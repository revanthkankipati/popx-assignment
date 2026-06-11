import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("popx_user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

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
            {user.fullName
              ? user.fullName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
              : "?"}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}

export default Profile;
