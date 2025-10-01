import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to MIKEYME</h1>
      <p>Supplying quality, budget THCA products from our small farm.</p>
      <div style={{ marginTop: "2rem" }}>
        <Link
          to="/Shop"
          style={{ marginRight: "1rem", textDecoration: "underline" }}
        >
          Browse Products
        </Link>
        <Link to="/Wholesale" style={{ textDecoration: "underline" }}>
          Wholesale Inquiries
        </Link>
      </div>
    </div>
  );
}
