function Login() {
  return (
    <div className="mobile-container">
      <h1>Signin to your PopX account</h1>

      <p style={{ margin: "10px 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <label>Email Address</label>
      <input type="email" placeholder="Enter email address" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <button className="primary-btn">Login</button>
    </div>
  );
}

export default Login;
