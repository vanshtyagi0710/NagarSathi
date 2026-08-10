import React from "react";

function Notifications() {
  return (
    <div className="admin-page-placeholder">

      <div className="admin-page-header">
        <span className="eyebrow">UPDATES</span>
        <h1>Notifications</h1>
        <p>
          Stay updated with important civic complaint activity.
        </p>
      </div>

      <div className="notifications-card">

        <div className="notification-item">
          <div className="notification-icon">
            📋
          </div>

          <div>
            <strong>
              New complaint received
            </strong>

            <p>
              A new civic complaint has been submitted.
            </p>

            <span>
              Recently
            </span>
          </div>
        </div>

        <div className="notification-item">
          <div className="notification-icon">
            ⚠️
          </div>

          <div>
            <strong>
              High priority complaint
            </strong>

            <p>
              A complaint requires administrator attention.
            </p>

            <span>
              Recently
            </span>
          </div>
        </div>

        <div className="notification-item">
          <div className="notification-icon">
            ✅
          </div>

          <div>
            <strong>
              Complaint resolved
            </strong>

            <p>
              A complaint has been marked as resolved.
            </p>

            <span>
              Recently
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Notifications;