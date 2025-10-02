export async function onRequestGet(context) {
  const { env } = context;

  const data = await env.INVENTORY.get("products");
  if (!data) {
    return new Response(JSON.stringify({ error: "No inventory found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" }
    });
  }

  return new Response(data, {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}
