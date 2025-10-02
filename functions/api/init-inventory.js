export async function onRequestPost(context) {
  const { request, env } = context;

  // 🔑 Protect this route with an admin token
  const authHeader = request.headers.get("Authorization");
  if (!authHeader || authHeader !== `Bearer ${env.ADMIN_TOKEN}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  // Example inventory
  const initialInventory = {
    "live-resin": {
      name: "Live Resin",
      strains: ["Strain A", "Strain B", "Strain C"],
      amounts: { "1g": 50, "2g": 95, "3.5g": 160, "7g": 300 },
      stock: { "1g": 20, "2g": 15, "3.5g": 10, "7g": 5 }
    },
    "tshirt": {
      name: "MIKEYME T-Shirt",
      colors: {
        black: { sizes: { S: 10, M: 12, L: 8, XL: 6 } },
        white: { sizes: { S: 5, M: 7, L: 4, XL: 2 } }
      },
      price: 25
    },
    "hoodie": {
      name: "MIKEYME Hoodie",
      colors: {
        black: { sizes: { S: 6, M: 8, L: 5, XL: 3 } },
        gray: { sizes: { S: 4, M: 6, L: 4, XL: 2 } }
      },
      price: 45
    }
  };

  await env.INVENTORY.put("products", JSON.stringify(initialInventory));

  return new Response("Inventory initialized!", { status: 200 });
}
