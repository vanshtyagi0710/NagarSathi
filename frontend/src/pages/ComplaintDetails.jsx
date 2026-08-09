import { useParams } from "react-router-dom";

function ComplaintDetails() {
  const { id } = useParams();

  const complaints = {
  101: {
    title: "Pothole near college",
    description:
      "There is a large pothole near the college entrance which is causing problems for vehicles.",
    category: "Road",
    priority: "HIGH",
    location: "Near College Main Gate",
    date: "08 August 2026",
    status: "IN PROGRESS",
  },

  102: {
    title: "Garbage overflow",
    description:
      "Garbage bins are overflowing near the residential area and need immediate cleaning.",
    category: "Garbage",
    priority: "MEDIUM",
    location: "Near Community Park",
    date: "07 August 2026",
    status: "RESOLVED",
  },

  103: {
    title: "Streetlight not working",
    description:
      "The streetlight has stopped working, making the road difficult to use at night.",
    category: "Streetlight",
    priority: "LOW",
    location: "Main Road",
    date: "06 August 2026",
    status: "PENDING",
  },
};

const complaint = complaints[id];
  return (
    <div className="complaint-details-page">
      <div className="complaint-details-card">
        <button
  className="back-button"
  onClick={() => window.history.back()}
>
  ← Back to Complaints
</button>

        <h1>Complaint Details</h1>

        <div className="detail-row">
          <strong>Complaint ID:</strong>
          <span>#{id}</span>
        </div>

        <div className="detail-row">
          <strong>Title:</strong>
          <span>{complaint.title}</span>
        </div>

        <div className="detail-row">
          <strong>Description:</strong>
          <span>{complaint.description}</span>
        </div>

        <div className="detail-row">
          <strong>Category:</strong>
          <span>{complaint.category}</span>
        </div>

        <div className="detail-row">
          <strong>Priority:</strong>
          <span>{complaint.priority}</span>
        </div>

        <div className="detail-row">
          <strong>Location:</strong>
          <span>{complaint.location}</span>
        </div>

        <div className="detail-row">
          <strong>Date:</strong>
          <span>{complaint.date}</span>
        </div>

        <div className="detail-row">
          <strong>Status:</strong>
          <span>{complaint.status}</span>
        </div>
        <div className="status-tracker">

  <div className="status-step active">
    <div className="status-circle">✓</div>
    <span>Submitted</span>
  </div>

  <div className="status-line"></div>

  <div className={`status-step ${
    complaint.status === "IN PROGRESS" || complaint.status === "RESOLVED"
      ? "active"
      : ""
  }`}>
    <div className="status-circle">✓</div>
    <span>In Progress</span>
  </div>

  <div className="status-line"></div>

  <div className={`status-step ${
    complaint.status === "RESOLVED" ? "active" : ""
  }`}>
    <div className="status-circle">✓</div>
    <span>Resolved</span>
  </div>

</div>
</div>
</div>
);
}
export default ComplaintDetails;