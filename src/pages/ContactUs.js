import React from "react";

export default function Contact() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Contact MIKEYME</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Have questions or want to reach out? We’d love to hear from you!
      </p>

      <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input type="text" placeholder="Your Name" style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }} />
        <input type="email" placeholder="Your Email" style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }} />
        <textarea placeholder="Your Message" rows="5" style={{ padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }} />
        <button type="submit" style={{ backgroundColor: "#4CAF50", color: "white", padding: "0.75rem", borderRadius: "6px", border: "none" }}>
          Send Message
        </button>
      </form>

      <p style={{ marginTop: "2rem", textAlign: "center" }}>
        Or email us directly at <a href="mailto:info@mikeyme.com">info@mikeyme.com</a>
      </p>
    </div>
  );
}
