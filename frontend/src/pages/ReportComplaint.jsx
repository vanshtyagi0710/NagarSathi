import { Link } from 'react-router-dom'

function ReportComplaint() {

  const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const complaint = {
    id: Date.now(),
    title: formData.get("title"),
    description: formData.get("description"),
    category: formData.get("category"),
    location: formData.get("location"),
    status: "Pending",
    date: new Date().toLocaleDateString(),
  };

  const existingComplaints =
    JSON.parse(localStorage.getItem("complaints")) || [];

  existingComplaints.push(complaint);

  localStorage.setItem(
    "complaints",
    JSON.stringify(existingComplaints)
  );

  alert("Complaint submitted successfully!");

  e.currentTarget.reset();
};

  return (
    <div className="report-page">

      {/* Navbar */}
      <nav className="dashboard-navbar">
        <div className="dashboard-logo">
          🏙️ SmartCity
        </div>

        <div className="dashboard-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/complaints">My Complaints</Link>
          <Link to="/">Logout</Link>
        </div>
      </nav>


      {/* Main Content */}
      <main className="report-content">

        <Link to="/dashboard" className="back-link">
          ← Back to Dashboard
        </Link>

        <div className="report-header">
          <p className="dashboard-tag">REPORT AN ISSUE</p>

          <h1>Report a Civic Problem</h1>

          <p>
            Tell us about the problem in your area and help make
            your city better.
          </p>
        </div>


        <div className="report-layout">

          {/* Complaint Form */}
          <section className="report-card">

            <h2>Complaint Details</h2>

            <p className="card-description">
              Provide as much information as possible so the issue
              can be resolved quickly.
            </p>

            <form onSubmit={handleSubmit}>

              {/* Title */}
              <div className="form-group">
                <label>Problem Title</label>

                <input
                  type="text"
                  placeholder="e.g. Large pothole near college gate"
                  name="title"
                />
              </div>


              {/* Description */}
              <div className="form-group">
                <label>Description</label>

                <textarea
                  placeholder="Describe the problem in detail..."
                  name="description"
                  rows="5"
                ></textarea>
              </div>


              {/* Category */}
              <div className="form-group">
                <label>Category</label>

                <select>
                  <option value="">
                    Select a category
                  </option>

                  <option value="road">
                    🛣️ Roads
                  </option>

                  <option value="garbage">
                    🗑️ Garbage
                  </option>

                  <option value="streetlight">
                    💡 Streetlights
                  </option>

                  <option value="water">
                    💧 Water
                  </option>

                  <option value="other">
                    📌 Other
                  </option>
                </select>
              </div>


              {/* Location */}
              <div className="form-group">
                <label>Location</label>

                <input
                  type="text"
                  placeholder="Enter the location of the problem"
                  name="location"
                />
              </div>


              {/* Photo */}
              <div className="form-group">

                <label>Upload Photo</label>

                <div className="upload-box">

                  <div className="upload-icon">
                    📷
                  </div>

                  <p>
                    Upload a photo of the problem
                  </p>

                  <span>
                    PNG, JPG up to 5MB
                  </span>

                  <input
                    type="file"
                    accept="image/png,image/jpeg"
                  />

                </div>

              </div>


              <button
                type="submit"
                className="submit-complaint"
              >
                Submit Complaint
              </button>

            </form>

          </section>


          {/* AI Analysis Card */}
          <aside className="ai-card">

            <div className="ai-icon">
              ✨
            </div>

            <h2>AI Analysis</h2>

            <p>
              Our AI will analyze your complaint and suggest
              the most appropriate category and priority.
            </p>


            <div className="ai-feature">

              <span>🤖</span>

              <div>
                <h3>Smart Categorization</h3>

                <p>
                  Automatically identify the type of civic issue.
                </p>
              </div>

            </div>


            <div className="ai-feature">

              <span>⚡</span>

              <div>
                <h3>Priority Detection</h3>

                <p>
                  Help identify urgent problems that need faster action.
                </p>
              </div>

            </div>


            <div className="ai-note">
              💡 AI suggestions will appear after you submit your complaint.
            </div>

          </aside>

        </div>

      </main>

    </div>
  )
}

export default ReportComplaint