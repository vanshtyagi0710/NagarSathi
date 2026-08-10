import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ReportComplaint from './pages/ReportComplaint'
import MyComplaints from "./pages/MyComplaints";
import ComplaintDetails from "./pages/ComplaintDetails";
import About from "./pages/About";

function Home() {
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [notifications, setNotifications] = useState([
  {
    id: 1,
    icon: "🚧",
    title: "Complaint update",
    message: "Your road complaint is now in progress.",
    time: "5 minutes ago",
    unread: true
  },
  {
    id: 2,
    icon: "✅",
    title: "Complaint resolved",
    message: "Your streetlight complaint has been resolved.",
    time: "1 hour ago",
    unread: true
  },
  {
    id: 3,
    icon: "📢",
    title: "NagarSathi update",
    message: "New civic services are now available.",
    time: "2 hours ago",
    unread: true
    }
  ]);
  const markNotificationAsRead = (id) => {
  setNotifications(
    notifications.map(notification =>
      notification.id === id
        ? { ...notification, unread: false }
        : notification
    )
  )
}
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
  <img src="/nagarsathi-logo.png" alt="NagarSathi" />
  <span>NAGARSATHI</span>
</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>

          <Link to="/complaints">My Complaints</Link>
          <Link to="/report">Report Complaint</Link>
          {/* Notification Center */}
<div className="notification-wrapper">
  <button className="notification-btn" title="Notifications">
    🔔
    <span className="notification-badge">
  {notifications.filter(n => n.unread).length}
</span>
  </button>

  <div className="notification-dropdown">
    <div className="notification-header">
      <div>
        <h3>Notifications</h3>
        <span>3 new updates</span>
      </div>
      <button
  onClick={() => {
    setNotifications(
      notifications.map(notification => ({
        ...notification,
        unread: false
      }))
    )
  }}
>
  Mark all read
</button>
    </div>

    <div className="notification-item unread">
      <span className="notification-icon">🚧</span>
      <div>
        <strong>Complaint update</strong>
        <p>Your road complaint is now in progress.</p>
        <small>5 minutes ago</small>
      </div>
    </div>

    <div className="notification-item unread">
      <span className="notification-icon">✅</span>
      <div>
        <strong>Complaint resolved</strong>
        <p>Your streetlight complaint has been resolved.</p>
        <small>1 hour ago</small>
      </div>
    </div>

    <div className="notification-item unread">
      <span className="notification-icon">📢</span>
      <div>
        <strong>NagarSathi update</strong>
        <p>New civic services are now available.</p>
        <small>2 hours ago</small>
      </div>
    </div>

    <div className="notification-footer">
  View all notifications →
</div>

</div> {/* notification-dropdown */}

</div> {/* notification-wrapper */}

<Link to="/login" className="login-btn">
  Login
</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
      
        <div className="hero-text">
          <p className="tagline">SMART CIVIC MANAGEMENT</p>

          <h1>
            Make Your City
            <span> Better.</span>
          </h1>

          <p className="description">
            Report civic problems, track their progress, and help
            make your community a better place.
          </p>

          <div className="hero-buttons">
  <Link to="/report" className="primary-btn">
    Report an Issue
  </Link>

  <Link to="/complaints" className="secondary-btn">
    Track Complaint
  </Link>
</div>
</div>

        <div className="hero-card">
          <div className="city-icon">🏙️</div>

          <h2>Your Voice Matters</h2>

          <p>
            From potholes to garbage collection,
            report problems directly to your city.
          </p>

          <div className="issue-icons">
            <div>🛣️<span>Roads</span></div>
            <div>🗑️<span>Garbage</span></div>
            <div>💡<span>Electricity</span></div>
            <div>💧<span>Drainage</span></div>
          </div>
        </div>
        <div className="city-details">

  <div className="road-line"></div>
</div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">

        <p className="section-tag">HOW IT WORKS</p>

        <h2>Report. Track. Improve.</h2>

        <div className="steps">

          <div className="step">
            <div className="step-icon">📝</div>
            <div className="step-number">01</div>
            <h3>Report</h3>
            <p>
              Tell us about a problem in your area.
            </p>
          </div>

          <div className="step">
            <div className="step-icon">🤖</div>
            <div className="step-number">02</div>
            <h3>AI Analysis</h3>
            <p>
              Our AI suggests the complaint category
              and priority.
            </p>
          </div>

          <div className="step">
            <div className="step-icon">📍</div>
            <div className="step-number">03</div>
            <h3>Track</h3>
            <p>
              Follow your complaint until it is resolved.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
<footer>
  <div className="footer-content">
    <div className="footer-brand">
      <h3>🏙️ NagarSathi</h3>
      <p>Building better cities, together.</p>
    </div>

    <div className="footer-links">
      <a href="#home">Home</a>
      <a href="#how-it-works">How It Works</a>
      <a href="#about">About</a>
    </div>
  </div>

  <div className="footer-bottom">
    © 2026 NagarSathi. Making cities better, together.
  </div>
</footer>

    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/complaints" element={<MyComplaints />} />

        <Route path="/about" element={<About />} />

        <Route
          path="/complaints/:id"
          element={<ComplaintDetails />}
        />

        <Route
          path="/report"
          element={<ReportComplaint />}
        />
  
      </Routes>
    </BrowserRouter>
  )
}

export default App