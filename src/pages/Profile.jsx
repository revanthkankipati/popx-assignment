function Profile() {
  const raw = localStorage.getItem("user");
  const user = raw ? JSON.parse(raw) : null;

  if (!user) {
    return (
      <div className="app-frame" style={{ padding: "24px 20px" }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: "#1d2226" }}>
          Account Settings
        </h2>
        <p style={{ marginTop: 20, color: "#7b7b7b" }}>No user data found.</p>
      </div>
    );
  }

  const initials = user.fullName
    ? user.fullName.split(" ").map((n) => n[0]).join("")
    : "?";

  return (
    <div className="app-frame">
      <div className="signup-page">
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            color: "#1d2226",
            marginTop: 24,
          }}
        >
          Account Settings
        </h2>

        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 24,
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#6c25ff",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 600,
              flexShrink: 0,
            }}
          >
            {initials}
          </div>

          <div>
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "#1d2226" }}>
              {user.fullName || "N/A"}
            </h3>
            <p style={{ fontSize: 14, color: "#7b7b7b", marginTop: 2 }}>
              {user.email || "N/A"}
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: 14,
            color: "#7b7b7b",
            lineHeight: 1.5,
            marginTop: 20,
          }}
        >
          Computer Science student passionate about web development and building
          responsive applications using React.
        </p>

        <div className="profile-divider" style={{ marginTop: 20, marginBottom: 20 }}></div>

        <div className="profile-divider" style={{ marginTop: "auto" }}></div>
      </div>
    </div>
  );
}

export default Profile;
