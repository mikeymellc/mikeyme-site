import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to MIKEYME</h1>
      <p>Supplying quality, budget THCA products from our small farm.</p>

      <div style={{
        marginTop: "2rem",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap" // allows stacking on smaller screens
      }}>
        <Link to="/Shop" style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#004d00",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.2s ease",
          minWidth: "150px",
          textAlign: "center"
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = "#003300"}
        onMouseOut={e => e.currentTarget.style.backgroundColor = "#004d00"}
        >
          Browse Products
        </Link>

        <Link to="/Wholesale" style={{
          padding: "0.75rem 1.5rem",
          backgroundColor: "#006600",
          color: "#fff",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.2s ease",
          minWidth: "150px",
          textAlign: "center"
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = "#004d00"}
        onMouseOut={e => e.currentTarget.style.backgroundColor = "#006600"}
        >
          Wholesale Inquiries
        </Link>
      </div>
    </div>
  );
          }
