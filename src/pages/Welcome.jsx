import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="app-frame" style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          marginTop: "auto",
          padding: "0 20px 32px",
        }}
      >
        <h1 style={{ fontSize: 28, fontWeight: 600, color: "#1d2226" }}>
          Welcome to PopX
        </h1>

        <p
          style={{
            fontSize: 18,
            color: "#6b7280",
            lineHeight: 1.5,
            marginTop: 12,
          }}
        >
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <div style={{ marginTop: 24 }} />

        <button className="primary-btn" onClick={() => navigate("/signup")}>
          Create Account
        </button>

        <div style={{ marginTop: 12 }} />

        <button className="secondary-btn" onClick={() => navigate("/login")}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

export default Welcome;
