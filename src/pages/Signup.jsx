function Signup() {
  return (
    <div className="app-frame">
      <div className="signup-page">
        <h1 className="signup-title">Create your<br />PopX account</h1>

        <div className="input-group">
          <label>Full Name*</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="input-group">
          <label>Phone Number*</label>
          <input type="text" placeholder="+1234567890" />
        </div>

        <div className="input-group">
          <label>Email Address*</label>
          <input type="email" placeholder="marry@example.com" />
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="input-group">
          <label>Company Name</label>
          <input type="text" placeholder="Acme Inc" />
        </div>

        <div className="agency-section">
          <p>Are you an Agency?*</p>
          <div className="radio-group">
            <label>
              <input type="radio" name="agency" /> Yes
            </label>
            <label>
              <input type="radio" name="agency" /> No
            </label>
          </div>
        </div>

        <button className="primary-btn create-btn">Create Account</button>
      </div>
    </div>
  );
}

export default Signup;
