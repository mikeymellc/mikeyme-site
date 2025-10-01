// functions/api/inventory.js
export async function onRequest(context) {
  // context.env contains KV bindings and env vars (set in Pages dashboard)
  const { request, env } = context;
  const { INVENTORY } = env; // KV Namespace binding name must be INVENTORY

  if (!INVENTORY) {
    return new Response(JSON.stringify({ error: "KV binding INVENTORY not found" }), { status: 500 });
  }

  if (request.method === "GET") {
    // Return inventory JSON (or empty object if not present)
    const raw = await INVENTORY.get("inventory");
    const inventory = raw ? JSON.parse(raw) : {};
    return new Response(JSON.stringify({ success: true, inventory }), {
      headers: { "Content-Type": "application/json" }
    });
  }

  if (request.method === "POST") {
    // Expect body: { cart: [ { family: "liveResin", variant: "Strain A", option: "1g", qty: 1 }, ... ] }
    // We will perform best-effort decrements and reject if any item has insufficient stock.
    try {
      const body = await request.json();
      const cart = Array.isArray(body.cart) ? body.cart : (body.cart || []);
      if (!cart.length) {
        return new Response(JSON.stringify({ error: "Empty cart" }), { status: 400 });
      }

      // Read inventory from KV
      const raw = await INVENTORY.get("inventory");
      const inventory = raw ? JSON.parse(raw) : {};

      // First validate availability
      const insufficient = [];
      for (const item of cart) {
        const { family, variant, option, qty } = item;
        if (!family || !variant || !option || !qty) {
          return new Response(JSON.stringify({ error: "Invalid cart item shape" }), { status: 400 });
        }
        const familyObj = inventory[family];
        if (!familyObj) {
          insufficient.push({ item, reason: "family not found" });
          continue;
        }
        const variantObj = familyObj[variant];
        if (!variantObj) {
          insufficient.push({ item, reason: "variant not found" });
          continue;
        }
        const optObj = variantObj[option];
        if (!optObj || typeof optObj.qty !== "number") {
          insufficient.push({ item, reason: "option not found" });
          continue;
        }
        if (optObj.qty < qty) {
          insufficient.push({ item, reason: `only ${optObj.qty} left` });
        }
      }

      if (insufficient.length) {
        return new Response(JSON.stringify({ success: false, insufficient }), {
          status: 409,
          headers: { "Content-Type": "application/json" }
        });
      }

      // All good: decrement quantities (best-effort, non-atomic)
      for (const item of cart) {
        const { family, variant, option, qty } = item;
        inventory[family][variant][option].qty -= qty;
        if (inventory[family][variant][option].qty < 0) {
          inventory[family][variant][option].qty = 0;
        }
      }

      // Save back to KV
      await INVENTORY.put("inventory", JSON.stringify(inventory));

      return new Response(JSON.stringify({ success: true, inventory }), {
        headers: { "Content-Type": "application/json" }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message || String(err) }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  return new Response("Method Not Allowed", { status: 405 });
      }
