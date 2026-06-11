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
    isAgency: "yes",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    if (touched) {
      setErrors(validate(form));
    }
  };

  const validate = (data) => {
    const errs = {};
    if (!data.fullName.trim()) errs.fullName = "Name is required";
    else if (data.fullName.trim().length < 3)
      errs.fullName = "Name must be at least 3 characters";

    if (!data.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[0-9]{10}$/.test(data.phone.trim()))
      errs.phone = "Enter a valid 10-digit phone number";

    if (!data.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
      errs.email = "Enter a valid email address";

    if (!data.password) errs.password = "Password is required";
    else if (data.password.length < 6)
      errs.password = "Password must be at least 6 characters";

    if (!data.isAgency) errs.isAgency = "Select Yes or No";

    return errs;
  };

  const isFormValid =
    form.fullName.trim() &&
    form.phone.trim() &&
    form.email.trim() &&
    form.password;

  const handleSubmit = () => {
    setTouched(true);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    localStorage.setItem("user", JSON.stringify(form));
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
          error={errors.fullName}
        />

        <FloatingInput
          label="Phone number"
          required
          type="text"
          placeholder="+1234567890"
          value={form.phone}
          onChange={handleChange("phone")}
          error={errors.phone}
        />

        <FloatingInput
          label="Email address"
          required
          type="email"
          placeholder="marry@example.com"
          value={form.email}
          onChange={handleChange("email")}
          error={errors.email}
        />

        <FloatingInput
          label="Password"
          required
          type="password"
          placeholder="********"
          value={form.password}
          onChange={handleChange("password")}
          error={errors.password}
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
          {errors.isAgency && (
            <span className="input-error">{errors.isAgency}</span>
          )}
        </div>

        <Button
          className={`create-btn ${!isFormValid ? "btn-disabled" : ""}`}
          onClick={handleSubmit}
        >
          Create Account
        </Button>
      </div>
    </PhoneFrame>
  );
}

export default Signup;
