import { useNavigate } from "react-router-dom";
import FloatingInput from "../components/FloatingInput";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/profile");
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
            placeholder="marry@example.com"
          />

          <FloatingInput
            label="Password"
            required
            type="password"
            placeholder="********"
          />

          <Button className="create-btn" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
