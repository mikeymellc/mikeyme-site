/**
 * update-inventory.js
 * Pushes your inventory.json to the Cloudflare KV namespace
 */

import fetch from "node-fetch"; // If using Node.js < 18
import fs from "fs";

// ===== CONFIGURE THESE =====
const ACCOUNT_ID = "YOUR_CLOUDFLARE_ACCOUNT_ID"; // Find in your Cloudflare dashboard
const NAMESPACE_ID = "YOUR_KV_NAMESPACE_ID";     // Your INVENTORY KV
const AUTH_EMAIL = "YOUR_CLOUDFLARE_EMAIL";      // Only for API Token method
const API_TOKEN = "YOUR_API_TOKEN";              // Must have KV write permissions
const INVENTORY_FILE = "./inventory.json";       // Path to your inventory file
// ===========================

async function updateInventory() {
  try {
    const inventoryData = fs.readFileSync(INVENTORY_FILE, "utf8");

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${NAMESPACE_ID}/values/inventory`,
      {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: inventoryData,
      }
    );

    const result = await response.json();
    if (result.success) {
      console.log("✅ Inventory updated successfully!");
    } else {
      console.error("❌ Failed to update inventory:", result);
    }
  } catch (err) {
    console.error("Error updating inventory:", err);
  }
}

updateInventory();
