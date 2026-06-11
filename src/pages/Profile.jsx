function Profile() {
  return (
    <div className="mobile-container">
      <h2>Account Settings</h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <img
          src="https://via.placeholder.com/70"
          alt="profile"
          style={{ borderRadius: "50%" }}
        />

        <div>
          <h4>Mary Doe</h4>
          <p>mary@example.com</p>
        </div>
      </div>

      <p style={{ marginTop: "20px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Profile;
