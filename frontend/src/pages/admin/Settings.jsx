import React, { useState } from "react";

function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  return (
    <div className="admin-page-placeholder">
      <div className="admin-page-header">
        <span className="eyebrow">SYSTEM CONFIGURATION</span>
        <h1>Settings</h1>
        <p>
          Manage your administrator preferences.
        </p>
      </div>

      <div className="settings-card">

        <div className="settings-row">
          <div>
            <h3>Admin Notifications</h3>
            <p>
              Receive notifications about new complaints.
            </p>
          </div>

          <button
            className={`toggle-button ${
              notifications ? "active" : ""
            }`}
            onClick={() => setNotifications(!notifications)}
          >
            <span />
          </button>
        </div>

        <div className="settings-row">
          <div>
            <h3>Email Alerts</h3>
            <p>
              Receive important complaint updates by email.
            </p>
          </div>

          <button
            className={`toggle-button ${
              emailAlerts ? "active" : ""
            }`}
            onClick={() => setEmailAlerts(!emailAlerts)}
          >
            <span />
          </button>
        </div>

        <div className="settings-row">
          <div>
            <h3>Complaint Categories</h3>
            <p>
              Road, Garbage, Water, Electricity and Other.
            </p>
          </div>

          <span className="settings-status">
            Active
          </span>
        </div>

      </div>
    </div>
  );
}

export default Settings;