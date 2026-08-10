import React from "react";

function AdminProfile() {
  return (
    <div className="admin-page-placeholder">

      <div className="admin-page-header">
        <span className="eyebrow">ACCOUNT</span>
        <h1>Admin Profile</h1>
        <p>
          View and manage your administrator account.
        </p>
      </div>

      <div className="profile-page-card">

        <div className="profile-large-avatar">
          A
        </div>

        <div className="profile-details">
          <h2>Admin</h2>
          <p>System Administrator</p>

          <div className="profile-information">

            <div>
              <span>Name</span>
              <strong>Admin</strong>
            </div>

            <div>
              <span>Role</span>
              <strong>Administrator</strong>
            </div>

            <div>
              <span>Access</span>
              <strong>Full Dashboard Access</strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="profile-active">
                Active
              </strong>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminProfile;