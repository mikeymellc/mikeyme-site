// functions/api/init-inventory.js
export async function onRequest(context) {
  const { request, env } = context;
  const { INVENTORY, ADMIN_TOKEN } = env;

  if (!INVENTORY) {
    return new Response(JSON.stringify({ error: "KV binding INVENTORY not found" }), { status: 500 });
  }

  // Simple header token check
  const token = request.headers.get("x-admin-token");
  if (!ADMIN_TOKEN || token !== ADMIN_TOKEN) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
  }

  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    const body = await request.json();
    // Expect full inventory object in body.inventory
    if (!body || typeof body.inventory !== "object") {
      return new Response(JSON.stringify({ error: "Provide { inventory: {...} }" }), { status: 400 });
    }

    await INVENTORY.put("inventory", JSON.stringify(body.inventory));

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
