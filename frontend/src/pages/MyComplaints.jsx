import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function MyComplaints() {
  const navigate = useNavigate();

  const savedComplaints =
  JSON.parse(localStorage.getItem("complaints")) || [];

const complaints = [
  ...savedComplaints,
  {
    id: 101,
    title: "Pothole near college",
    category: "Road",
    priority: "HIGH",
    status: "IN PROGRESS",
  },
  {
    id: 102,
    title: "Garbage overflow",
    category: "Garbage",
    priority: "MEDIUM",
    status: "RESOLVED",
  },
  {
    id: 103,
    title: "Streetlight not working",
    category: "Streetlight",
    priority: "LOW",
    status: "PENDING",
  },
];

  return (
    <div className="complaints-page">
      <div className="complaints-content">

        <h1>My Complaints</h1>
        <Link to="/dashboard" className="back-dashboard-btn">
  ← Back to Dashboard
</Link>
        <div className="complaint-summary">
  <div className="summary-card">
    <span className="summary-icon">📋</span>
    <div>
      <strong>{complaints.length}</strong>
      <p>Total Complaints</p>
      
    </div>
  </div>

  <div className="summary-card pending">
    <span className="summary-icon">⏳</span>
    <div>
      <strong>
        {complaints.filter((c) => c.status === "PENDING").length}
      </strong>
      <p>Pending</p>
    </div>
  </div>

  <div className="summary-card progress">
    <span className="summary-icon">🔄</span>
    <div>
      <strong>
        {complaints.filter((c) => c.status === "IN PROGRESS").length}
      </strong>
      <p>In Progress</p>
    </div>
  </div>

  <div className="summary-card resolved">
    <span className="summary-icon">✅</span>
    <div>
      <strong>
        {complaints.filter((c) => c.status === "RESOLVED").length}
      </strong>
      <p>Resolved</p>
    </div>
  </div>
</div>

        <p className="complaints-subtitle">
          Track and manage your reported civic issues.
        </p>

        {complaints.map((complaint) => (
          <div className="complaint-card" key={complaint.id}>

            <div>
              <h2>📋 Complaint #{complaint.id}</h2>

              <h3>{complaint.title}</h3>

              <p>
                📍 Category: <strong>{complaint.category || "Road"}</strong>
              </p>

              <p>
                ⚡ Priority: <strong>{complaint.priority || "HIGH"}</strong>
              </p>

              <p>
                Status: <strong className={`status-badge ${complaint.status.toLowerCase().replace(" ", "-")}`}>{complaint.status}</strong>
              </p>
            </div>

            <button onClick={() => navigate(`/complaints/${complaint.id}`)}>
              View Details → 
            </button>

          </div>
        ))}
        <div className="complaints-cta">
  <div className="cta-icon">🏙️</div>

  <div className="cta-content">
    <h2>Help Make Your City Better</h2>
    <p>
      Spotted a new civic issue? Report it and help improve your neighbourhood.
    </p>
  </div>

  <button
    className="cta-button"
    onClick={() => navigate("/report-complaint")}
  >
    Report an Issue →
  </button>
</div>

      </div>
    </div>
  );
}

export default MyComplaints;