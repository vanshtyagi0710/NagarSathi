import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ReportComplaint from './pages/ReportComplaint'
import MyComplaints from "./pages/MyComplaints";
import ComplaintDetails from "./pages/ComplaintDetails";
import About from "./pages/About";
import AdminDashboard from "./pages/admin/AdminDashboard";

function Home() {
  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">
          🏙️ NagarSathi
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <Link to="/about">About</Link>
          <Link to="/dashboard">Dashboard</Link>

          <Link to="/complaints">My Complaints</Link>
          <Link to="/report">Report Complaint</Link>
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
            <button className="primary-btn">
              Report an Issue
            </button>

            <button className="secondary-btn">
              Track Complaint
            </button>
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
            <div>💡<span>Lights</span></div>
            <div>💧<span>Water</span></div>
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
        <Route path="/admin" element={<AdminDashboard />} />
  
      </Routes>
    </BrowserRouter>
  )
}

export default App