import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValid = email.trim() && password.trim();

  const handleLogin = () => {
    const raw = localStorage.getItem("user");
    if (!raw) {
      alert("No account found. Please sign up first.");
      return;
    }
    const user = JSON.parse(raw);
    if (email === user.email && password === user.password) {
      navigate("/profile");
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="app-frame">
      <div className="signup-page">
        <h1 className="login-title">
          Signin to your
          <br />
          PopX account
        </h1>

        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </p>

        <div className="form-body">
          <FloatingInput
            label="Email Address"
            required
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FloatingInput
            label="Password"
            required
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            className={`create-btn ${!isValid ? "btn-disabled" : ""}`}
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
