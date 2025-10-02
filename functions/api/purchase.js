export async function onRequestPost(context) {
  const { request, env } = context;
  const body = await request.json();

  const { productId, option, subOption, quantity } = body;
  // productId = "tshirt", "hoodie", "live-resin"
  // option = color or strain
  // subOption = size or amount
  // quantity = number purchased

  const data = await env.INVENTORY.get("products");
  if (!data) {
    return new Response(JSON.stringify({ error: "No inventory found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }

  const inventory = JSON.parse(data);

  if (!inventory[productId]) {
    return new Response(JSON.stringify({ error: "Invalid product" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Handle different product types
  let stockRef;
  if (productId === "live-resin") {
    stockRef = inventory[productId].stock[subOption];
  } else {
    stockRef = inventory[productId].colors[option].sizes[subOption];
  }

  if (stockRef === undefined || stockRef < quantity) {
    return new Response(JSON.stringify({ error: "Insufficient stock" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }

  // Deduct purchased quantity
  if (productId === "live-resin") {
    inventory[productId].stock[subOption] -= quantity;
  } else {
    inventory[productId].colors[option].sizes[subOption] -= quantity;
  }

  await env.INVENTORY.put("products", JSON.stringify(inventory));

  return new Response(
    JSON.stringify({ success: true, inventory }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
  
