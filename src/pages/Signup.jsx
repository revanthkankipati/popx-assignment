function Signup() {
  return (
    <div className="mobile-container">
      <h1>Create your PopX account</h1>

      <label>Full Name</label>
      <input type="text" />

      <label>Phone Number</label>
      <input type="text" />

      <label>Email Address</label>
      <input type="email" />

      <label>Password</label>
      <input type="password" />

      <label>Company Name</label>
      <input type="text" />

      <div style={{ marginTop: "10px" }}>
        <p>Are you an Agency?</p>

        <label>
          <input type="radio" name="agency" /> Yes
        </label>

        <label style={{ marginLeft: "20px" }}>
          <input type="radio" name="agency" /> No
        </label>
      </div>

      <button
        className="primary-btn"
        style={{ marginTop: "20px" }}
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;
