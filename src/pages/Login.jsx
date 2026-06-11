function Login() {
  return (
    <div className="app-frame">
      <div className="login-page">
        <h1 className="login-title">Signin to your<br />PopX account</h1>

        <p className="login-subtitle">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label>Email Address*</label>
          <input type="email" placeholder="marry@example.com" />
        </div>

        <div className="input-group">
          <label>Password*</label>
          <input type="password" placeholder="********" />
        </div>

        <button className="primary-btn create-btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
