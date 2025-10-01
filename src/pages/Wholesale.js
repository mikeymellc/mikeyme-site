import React, { useState } from "react";

export default function Wholesale() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your wholesale inquiry has been submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Wholesale Inquiries</h1>
      <p>If you're interested in wholesale orders, please fill out the form below.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: "100%", marginBottom: "1rem" }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
                   }
