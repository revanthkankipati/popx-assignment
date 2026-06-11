import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PhoneFrame from "../components/PhoneFrame";
import FloatingInput from "../components/FloatingInput";
import Button from "../components/Button";

function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "",
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = () => {
    localStorage.setItem("popx_user", JSON.stringify(form));
    navigate("/profile");
  };

  return (
    <PhoneFrame>
      <h1 className="signup-title">
        Create your
        <br />
        PopX account
      </h1>

      <div className="form-body">
        <FloatingInput
          label="Full Name"
          required
          placeholder="Marry Doe"
          value={form.fullName}
          onChange={handleChange("fullName")}
        />

        <FloatingInput
          label="Phone number"
          required
          type="text"
          placeholder="+1234567890"
          value={form.phone}
          onChange={handleChange("phone")}
        />

        <FloatingInput
          label="Email address"
          required
          type="email"
          placeholder="marry@example.com"
          value={form.email}
          onChange={handleChange("email")}
        />

        <FloatingInput
          label="Password"
          required
          type="password"
          placeholder="********"
          value={form.password}
          onChange={handleChange("password")}
        />

        <FloatingInput
          label="Company name"
          placeholder="Acme Inc"
          value={form.company}
          onChange={handleChange("company")}
        />

        <div className="agency-section">
          <p>
            Are you an Agency?<span className="required">*</span>
          </p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.isAgency === "yes"}
                onChange={handleChange("isAgency")}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.isAgency === "no"}
                onChange={handleChange("isAgency")}
              />{" "}
              No
            </label>
          </div>
        </div>

        <Button className="create-btn" onClick={handleSubmit}>
          Create Account
        </Button>
      </div>
    </PhoneFrame>
  );
}

export default Signup;
