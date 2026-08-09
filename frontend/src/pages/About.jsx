import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <div className="logo">
          🏙️ <span>NagarSathi</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
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


      {/* ================= HERO ================= */}
      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-tag">
            🏙️ ABOUT NAGARSATHI
          </span>

          <h1>
            Making Cities Better,
            <br />
            <span>Together.</span>
          </h1>

          <p>
            NagarSathi is a smart civic platform that connects citizens
            with their city and makes reporting, tracking and resolving
            civic issues simple and transparent.
          </p>

          <div className="about-hero-buttons">

            <Link
              to="/report"
              className="about-primary-btn"
            >
              Report an Issue →
            </Link>

            <Link
              to="/dashboard"
              className="about-secondary-btn"
            >
              Go to Dashboard
            </Link>

          </div>

        </div>
      </section>


      {/* ================= CITY CARD ================= */}
      <section className="about-city-card">

        <div style={{ fontSize: "58px" }}>
          🏙️
        </div>

        <h2>
          Smart City. Stronger Community.
        </h2>

        <p>
          Connected citizens. Better communities.
          NagarSathi brings citizens and civic authorities
          closer together through technology.
        </p>

      </section>


      {/* ================= MISSION ================= */}
      <section className="about-mission">

        <span>OUR MISSION</span>

        <h2>
          Technology that puts citizens first.
        </h2>

        <p>
          NagarSathi aims to make civic participation easier by giving
          citizens a simple digital space to report problems, follow
          their progress and stay connected with the issues affecting
          their neighbourhood.
        </p>


        {/* FEATURE CARDS */}
        <div className="about-process-grid">

          <div className="about-feature-card">

            <div style={{ fontSize: "34px" }}>
              📢
            </div>

            <h3>
              Report Easily
            </h3>

            <p>
              Report civic problems such as potholes, garbage,
              streetlights and other neighbourhood issues.
            </p>

          </div>


          <div className="about-feature-card">

            <div style={{ fontSize: "34px" }}>
              🔎
            </div>

            <h3>
              Track Progress
            </h3>

            <p>
              Keep track of your complaints and know whether
              they are pending, in progress or resolved.
            </p>

          </div>


          <div className="about-feature-card">

            <div style={{ fontSize: "34px" }}>
              🤝
            </div>

            <h3>
              Better Communities
            </h3>

            <p>
              Encourage citizens and authorities to work together
              towards cleaner, safer and smarter neighbourhoods.
            </p>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section
        className="about-process"
        id="how-it-works"
      >

        <span>
          HOW IT WORKS
        </span>

        <h2>
          From complaint to resolution.
        </h2>

        <p>
          A simple three-step process designed to make civic
          reporting faster and more transparent.
        </p>


        <div className="about-process-grid">


          {/* STEP 1 */}
          <div className="about-process-card">

            <div
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#2563eb",
                marginBottom: "18px",
                letterSpacing: "2px"
              }}
            >
              01
            </div>

            <div style={{ fontSize: "36px" }}>
              📝
            </div>

            <h3>
              Report
            </h3>

            <p>
              Submit a civic complaint through NagarSathi
              with the necessary details.
            </p>

          </div>


          {/* STEP 2 */}
          <div className="about-process-card">

            <div
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#2563eb",
                marginBottom: "18px",
                letterSpacing: "2px"
              }}
            >
              02
            </div>

            <div style={{ fontSize: "36px" }}>
              🔍
            </div>

            <h3>
              Track
            </h3>

            <p>
              Monitor the status of your reported issue
              as it moves through the resolution process.
            </p>

          </div>


          {/* STEP 3 */}
          <div className="about-process-card">

            <div
              style={{
                fontSize: "13px",
                fontWeight: "800",
                color: "#2563eb",
                marginBottom: "18px",
                letterSpacing: "2px"
              }}
            >
              03
            </div>

            <div style={{ fontSize: "36px" }}>
              ✅
            </div>

            <h3>
              Resolve
            </h3>

            <p>
              Stay informed until your civic complaint
              is successfully resolved.
            </p>

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="about-city-card">

        <div style={{ fontSize: "42px" }}>
          🚀
        </div>

        <h2>
          Your City. Your Voice.
        </h2>

        <p>
          Together, we can make our neighbourhoods cleaner,
          safer and smarter.
        </p>

        <div className="about-hero-buttons">

          <Link
            to="/report"
            className="about-primary-btn"
          >
            Report a Problem →
          </Link>

          <Link
            to="/dashboard"
            className="about-secondary-btn"
          >
            View Dashboard
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;