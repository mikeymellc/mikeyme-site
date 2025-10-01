import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to MIKEYME</h1>
      <p>Supplying quality, budget THCA products from our small farm.</p>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        {/* Link to Products / Shop Page */}
        <Link 
          to="/Shop"
          style={{
            backgroundColor: "#004d00",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          View Products
        </Link>

        {/* Link to Wholesale Page */}
        <Link 
          to="/Wholesale"
          style={{
            backgroundColor: "#004d00",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Wholesale Inquiry
        </Link>
      </div>
    </div>
  );
  }
