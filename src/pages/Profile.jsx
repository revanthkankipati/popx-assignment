import { useState, useRef, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);
  const fileRef = useRef(null);

  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) {
      const data = JSON.parse(raw);
      setUser(data);
      if (data.photo) setPhoto(data.photo);
    }
  }, []);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      setPhoto(dataUrl);
      const raw = localStorage.getItem("user");
      if (raw) {
        const data = JSON.parse(raw);
        data.photo = dataUrl;
        localStorage.setItem("user", JSON.stringify(data));
      }
    };
    reader.readAsDataURL(file);
  };

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
        <div className="profile-header">
          <h2>Account Settings</h2>
        </div>

        <div className="profile-content">
          <div className="profile-info">
            <div className="avatar-wrapper">
              <div className="avatar">
                {photo ? (
                  <img src={photo} alt="profile" className="avatar-img" />
                ) : (
                  initials
                )}
              </div>
              <div className="camera-badge" onClick={() => fileRef.current.click()}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                  <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z"/>
                  <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
                </svg>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileRef}
                onChange={handlePhoto}
                style={{ display: "none" }}
              />
            </div>
            <div>
              <h3 className="profile-name">{user.fullName || "N/A"}</h3>
              <p className="profile-email">{user.email || "N/A"}</p>
            </div>
          </div>

          <p className="profile-description">
            Computer Science student passionate about web development, React
            applications, backend development, and continuous learning.
          </p>

          <div className="profile-divider"></div>

          <div className="profile-bottom-divider"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
