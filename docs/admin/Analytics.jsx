import React from "react";

function Analytics() {
  return (
    <div className="admin-page-placeholder">
      <div className="admin-page-header">
        <span className="eyebrow">REPORTING & INSIGHTS</span>
        <h1>Analytics</h1>
        <p>
          Monitor complaint trends and resolution performance.
        </p>
      </div>

      <div className="analytics-placeholder-grid">
        <div className="placeholder-card">
          <div className="placeholder-icon">📊</div>
          <h2>Complaint Trends</h2>
          <p>
            Complaint statistics and trends will appear here.
          </p>
        </div>

        <div className="placeholder-card">
          <div className="placeholder-icon">📈</div>
          <h2>Resolution Performance</h2>
          <p>
            Resolution performance data will appear here.
          </p>
        </div>

        <div className="placeholder-card">
          <div className="placeholder-icon">🏢</div>
          <h2>Department Performance</h2>
          <p>
            Department-wise statistics will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Analytics;