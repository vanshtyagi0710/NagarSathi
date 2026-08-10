import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Dashboard() {

  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting("Good morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good afternoon");
      } else if (hour >= 17 && hour < 21) {
        setGreeting("Good evening");
      } else {
        setGreeting("Good night");
      }
    };

    updateGreeting();

    const timer = setInterval(updateGreeting, 60000);

    return () => clearInterval(timer);
  }, []);

  const complaints = [
    {
      id: 1,
      title: 'Large pothole near college gate',
      category: 'Road',
      priority: 'High',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Garbage not collected',
      category: 'Garbage',
      priority: 'Medium',
      status: 'Pending',
    },
    {
      id: 3,
      title: 'Streetlight not working',
      category: 'Streetlight',
      priority: 'Low',
      status: 'Resolved',
    },
  ]

  return (
    <div className="dashboard-page">

      {/* Dashboard Navbar */}
      <nav className="dashboard-navbar">

        <div className="logo">
  <img
  src="/nagarsathi-logo.png"
  alt="NagarSathi"
/>
  <span>NAGARSATHI</span>
</div>  

        <div className="dashboard-nav">

          <Link to="/about">
            About
          </Link>

          <Link to="/dashboard">
            Dashboard
          </Link>

          <Link to="/complaints">
            My Complaints
          </Link>

          <Link to="/">
            Logout
          </Link>

        </div>

      </nav>


      {/* Dashboard Content */}
      <main className="dashboard-content">

        <div className="dashboard-header">

          <div className="dashboard-welcome">
  <div className="welcome-content">

    <div className="dashboard-tag">
      🏙️ CITIZEN DASHBOARD
    </div>

    <h1>
      {greeting} 👋
    </h1>

    <p>
      Stay updated with your civic complaints and help make
      your neighbourhood better.
    </p>

  </div>

  <Link
    to="/report"
    className="report-button"
  >
    + Report New Complaint
  </Link>
</div>
</div>


        {/* Statistics */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <h2>5</h2>
            <p>Total Complaints</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <h2>2</h2>
            <p>Pending</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🔄</div>
            <h2>1</h2>
            <p>In Progress</p>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✅</div>
            <h2>2</h2>
            <p>Resolved</p>
          </div>

        </div>
        {/* Recent Complaints */}
<section className="recent-complaints">

  <div className="section-heading">
    <div>
      <span className="section-label">ACTIVITY</span>
      <h2>Recent Complaints</h2>
      <p>Your latest reported civic issues</p>
    </div>

    <Link to="/complaints" className="view-all-btn">
      View All →
    </Link>
  </div>

  <div className="recent-list">

   {complaints.slice(0, 3).map((complaint) => (
      <div className="recent-complaint-card" key={complaint.id}>

        <div className="recent-icon">
          📋
        </div>

        <div className="recent-info">
          <h3>{complaint.title}</h3>

          <div className="recent-meta">
            <span>📍 {complaint.category}</span>
            <span>⚡ {complaint.priority}</span>
          </div>
        </div>

        <div className={`recent-status ${complaint.status
          .toLowerCase()
          .replace(" ", "-")}`}>
          {complaint.status}
        </div>

        <Link
          to={`/complaints/${complaint.id}`}
          className="recent-view"
        >
          →
        </Link>

      </div>
    ))}

  </div>

</section>
{/* Quick Actions */}
<section className="quick-actions">

  <div className="section-heading">
    <div>
      <span className="section-label">QUICK ACCESS</span>
      <h2>What would you like to do?</h2>
      <p>Access common citizen services quickly.</p>
    </div>
  </div>

  <div className="quick-actions-grid">

    <Link to="/report" className="quick-action-card">
      <div className="quick-action-icon">📝</div>
      <div>
        <h3>Report an Issue</h3>
        <p>Report a new civic problem</p>
      </div>
      <span>→</span>
    </Link>

    <Link to="/complaints" className="quick-action-card">
      <div className="quick-action-icon">📋</div>
      <div>
        <h3>My Complaints</h3>
        <p>View all your complaints</p>
      </div>
      <span>→</span>
    </Link>

    <Link to="/complaints" className="quick-action-card">
      <div className="quick-action-icon">📍</div>
      <div>
        <h3>Track Complaint</h3>
        <p>Check complaint status</p>
      </div>
      <span>→</span>
    </Link>

  </div>

</section>
{/* Dashboard Footer CTA */}
<section className="dashboard-footer-cta">

  <div className="footer-cta-content">
    <span className="footer-cta-label">NAGARSATHI</span>

    <h2>Together, let's build a better city.</h2>

    <p>
      Your reports help the city identify problems faster
      and make everyday life better for everyone.
    </p>
  </div>

  <Link
    to="/report"
    className="footer-report-btn"
  >
    Report an Issue →
  </Link>

</section>
        

      </main>

    </div>
  )
}

export default Dashboard