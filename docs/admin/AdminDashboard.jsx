import React, { useEffect, useMemo, useState } from "react";
import "./AdminDashboard.css";

const initialComplaints = [
  {
    id: "CMP001",
    title: "Pothole near main road",
    category: "Road",
    priority: "High",
    status: "Pending",
    department: "Road Department",
    date: "2026-08-05",
    location: "Main Road",
  },
  {
    id: "CMP002",
    title: "Garbage not collected",
    category: "Garbage",
    priority: "Medium",
    status: "In Progress",
    department: "Sanitation",
    date: "2026-08-04",
    location: "Market Area",
  },
  {
    id: "CMP003",
    title: "Street light not working",
    category: "Electricity",
    priority: "Low",
    status: "Resolved",
    department: "Electricity Department",
    date: "2026-08-03",
    location: "Station Road",
  },
  {
    id: "CMP004",
    title: "Water leakage on street",
    category: "Water",
    priority: "High",
    status: "Pending",
    department: "Water Department",
    date: "2026-08-02",
    location: "Lake Road",
  },
  {
    id: "CMP005",
    title: "Broken footpath",
    category: "Road",
    priority: "Medium",
    status: "In Progress",
    department: "Road Department",
    date: "2026-08-01",
    location: "Park Street",
  },
];

/* -------------------------------------------------------
   HELPERS
------------------------------------------------------- */

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "Good Morning";
  }

  if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  }

  if (hour >= 17 && hour < 21) {
    return "Good Evening";
  }

  return "Good Night";
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getCurrentDate = () => {
  return new Date().toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

/* -------------------------------------------------------
   MAIN COMPONENT
------------------------------------------------------- */

function AdminDashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const [complaints, setComplaints] = useState(() => {
    try {
      const saved = localStorage.getItem("nagarSathiComplaints");

      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Could not load complaints:", error);
    }

    return initialComplaints;
  });

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [currentDate, setCurrentDate] = useState(getCurrentDate());

  const [notifications, setNotifications] = useState(2);

  /* -------------------------------------------------------
     CLOCK
  ------------------------------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
      setCurrentDate(getCurrentDate());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* -------------------------------------------------------
     SAVE COMPLAINTS
  ------------------------------------------------------- */

  useEffect(() => {
    localStorage.setItem(
      "nagarSathiComplaints",
      JSON.stringify(complaints)
    );
  }, [complaints]);

  /* -------------------------------------------------------
     STATUS CHANGE
  ------------------------------------------------------- */

  const changeStatus = (id, newStatus) => {
    setComplaints((previousComplaints) =>
      previousComplaints.map((complaint) =>
        complaint.id === id
          ? {
              ...complaint,
              status: newStatus,
            }
          : complaint
      )
    );
  };

  /* -------------------------------------------------------
     FILTERS
  ------------------------------------------------------- */

  const filteredComplaints = useMemo(() => {
    return complaints.filter((complaint) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        complaint.id.toLowerCase().includes(searchText) ||
        complaint.title.toLowerCase().includes(searchText) ||
        complaint.department.toLowerCase().includes(searchText) ||
        complaint.location.toLowerCase().includes(searchText);

      const matchesCategory =
        categoryFilter === "All" ||
        complaint.category === categoryFilter;

      const matchesStatus =
        statusFilter === "All" ||
        complaint.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        complaint.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [
    complaints,
    search,
    categoryFilter,
    statusFilter,
    priorityFilter,
  ]);

  /* -------------------------------------------------------
     STATISTICS
  ------------------------------------------------------- */

  const totalComplaints = complaints.length;

  const pendingComplaints = complaints.filter(
    (complaint) => complaint.status === "Pending"
  ).length;

  const inProgressComplaints = complaints.filter(
    (complaint) => complaint.status === "In Progress"
  ).length;

  const resolvedComplaints = complaints.filter(
    (complaint) => complaint.status === "Resolved"
  ).length;

  const resolutionRate =
    totalComplaints === 0
      ? 0
      : Math.round((resolvedComplaints / totalComplaints) * 100);

  /* -------------------------------------------------------
     CATEGORY STATISTICS
  ------------------------------------------------------- */

  const categoryCounts = {
    Road: complaints.filter(
      (complaint) => complaint.category === "Road"
    ).length,

    Garbage: complaints.filter(
      (complaint) => complaint.category === "Garbage"
    ).length,

    Water: complaints.filter(
      (complaint) => complaint.category === "Water"
    ).length,

    Electricity: complaints.filter(
      (complaint) => complaint.category === "Electricity"
    ).length,

    Other: complaints.filter(
      (complaint) => complaint.category === "Other"
    ).length,
  };

  /* -------------------------------------------------------
     NAVIGATION
  ------------------------------------------------------- */

  const navigate = (page) => {
    setActivePage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* -------------------------------------------------------
     CLEAR FILTERS
  ------------------------------------------------------- */

  const clearFilters = () => {
    setSearch("");
    setCategoryFilter("All");
    setStatusFilter("All");
    setPriorityFilter("All");
  };

  /* -------------------------------------------------------
     RENDER
  ------------------------------------------------------- */

  return (
    <div className="admin-layout">

      {/* ===================================================
          SIDEBAR
      =================================================== */}

      <aside className="admin-sidebar">

        <div className="sidebar-brand">
          <div className="brand-logo">N</div>

          <div>
            <h2>NagarSathi</h2>
            <span>Admin Portal</span>
          </div>
        </div>

        <div className="sidebar-section-title">
          MAIN
        </div>

        <nav className="sidebar-nav">

          <button
            className={
              activePage === "dashboard"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => navigate("dashboard")}
          >
            <span className="nav-icon">▣</span>
            Dashboard
          </button>

          <button
            className={
              activePage === "complaints"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => navigate("complaints")}
          >
            <span className="nav-icon">☷</span>
            Complaints

            <span className="nav-count">
              {totalComplaints}
            </span>
          </button>

          <button
            className={
              activePage === "map"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => navigate("map")}
          >
            <span className="nav-icon">⌖</span>
            Complaint Map
          </button>

          <button
            className={
              activePage === "analytics"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => navigate("analytics")}
          >
            <span className="nav-icon">▥</span>
            Analytics
          </button>

        </nav>

        <div className="sidebar-section-title system-title">
          SYSTEM
        </div>

        <nav className="sidebar-nav">

          <button
            className={
              activePage === "settings"
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() => navigate("settings")}
          >
            <span className="nav-icon">⚙</span>
            Settings
          </button>

        </nav>

        <div className="sidebar-bottom">

          <button
            className="admin-profile"
            onClick={() => navigate("profile")}
          >
            <div className="profile-avatar">
              A
            </div>

            <div className="profile-info">
              <strong>Admin</strong>
              <span>Administrator</span>
            </div>

            <span className="profile-arrow">›</span>
          </button>

          <div className="system-status">
            <span className="status-dot"></span>
            System Active
          </div>

        </div>

      </aside>

      {/* ===================================================
          MAIN AREA
      =================================================== */}

      <main className="admin-main">

        {/* TOP BAR */}

        <header className="admin-topbar">

          <div className="topbar-title">
            <span>ADMIN PORTAL</span>
          </div>

          <div className="topbar-actions">

            <button
              className="notification-button"
              onClick={() => setNotifications(0)}
              title="Notifications"
            >
              🔔

              {notifications > 0 && (
                <span className="notification-badge">
                  {notifications}
                </span>
              )}
            </button>

            <button
              className="top-profile"
              onClick={() => navigate("profile")}
            >
              <div className="top-avatar">
                A
              </div>

              <div>
                <strong>Admin</strong>
                <small>Administrator</small>
              </div>

              <span>⌄</span>
            </button>

          </div>

        </header>

        {/* =================================================
            PAGE CONTENT
        ================================================= */}

        <div className="admin-content">

          {/* ===============================================
              DASHBOARD
          =============================================== */}

          {activePage === "dashboard" && (
            <DashboardPage
              greeting={getGreeting()}
              currentTime={currentTime}
              currentDate={currentDate}
              totalComplaints={totalComplaints}
              pendingComplaints={pendingComplaints}
              inProgressComplaints={inProgressComplaints}
              resolvedComplaints={resolvedComplaints}
              resolutionRate={resolutionRate}
              complaints={complaints}
              navigate={navigate}
            />
          )}

          {/* ===============================================
              COMPLAINTS
          =============================================== */}

          {activePage === "complaints" && (
            <ComplaintsPage
              complaints={complaints}
              filteredComplaints={filteredComplaints}
              search={search}
              setSearch={setSearch}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
              changeStatus={changeStatus}
              clearFilters={clearFilters}
            />
          )}

          {/* ===============================================
              MAP
          =============================================== */}

          {activePage === "map" && (
            <MapPage complaints={complaints} />
          )}

          {/* ===============================================
              ANALYTICS
          =============================================== */}

          {activePage === "analytics" && (
            <AnalyticsPage
              complaints={complaints}
              categoryCounts={categoryCounts}
              resolutionRate={resolutionRate}
            />
          )}

          {/* ===============================================
              SETTINGS
          =============================================== */}

          {activePage === "settings" && (
            <SettingsPage />
          )}

          {/* ===============================================
              PROFILE
          =============================================== */}

          {activePage === "profile" && (
            <ProfilePage />
          )}

        </div>

      </main>

    </div>
  );
}

/* =========================================================
   DASHBOARD PAGE
========================================================= */

function DashboardPage({
  greeting,
  currentTime,
  currentDate,
  totalComplaints,
  pendingComplaints,
  inProgressComplaints,
  resolvedComplaints,
  resolutionRate,
  complaints,
  navigate,
}) {
  const recentComplaints = [...complaints]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 5);

  return (
    <>

      <section className="welcome-section">

        <div>
          <p className="eyebrow">
            ADMIN PANEL
          </p>

          <h1>
            {greeting}, Admin <span>👋</span>
          </h1>

          <p className="welcome-text">
            Here's what's happening with civic complaints today.
          </p>

          <div className="date-time">
            <span>◷ {currentTime}</span>
            <span>•</span>
            <span>{currentDate}</span>
          </div>
        </div>

        <button
          className="primary-button"
          onClick={() => navigate("complaints")}
        >
          Manage Complaints →
        </button>

      </section>

      {/* STAT CARDS */}

      <section className="stats-grid">

        <StatCard
          icon="▣"
          title="Total Complaints"
          value={totalComplaints}
          description="All reported complaints"
          type="total"
        />

        <StatCard
          icon="!"
          title="Pending"
          value={pendingComplaints}
          description="Waiting for action"
          type="pending"
        />

        <StatCard
          icon="↻"
          title="In Progress"
          value={inProgressComplaints}
          description="Currently being handled"
          type="progress"
        />

        <StatCard
          icon="✓"
          title="Resolved"
          value={resolvedComplaints}
          description="Successfully completed"
          type="resolved"
        />

      </section>

      {/* OVERVIEW */}

      <section className="panel overview-panel">

        <div className="panel-heading">

          <div>
            <p className="eyebrow">
              PERFORMANCE
            </p>

            <h2>Complaint Overview</h2>

            <p>
              Current status of all civic complaints
            </p>
          </div>

          <div className="resolution-rate">
            <strong>{resolutionRate}%</strong>
            <span>resolution rate</span>
          </div>

        </div>

        <div className="progress-bar">
          <div
            style={{
              width: `${resolutionRate}%`,
            }}
          />
        </div>

        <div className="overview-stats">

          <div>
            <span className="dot pending-dot"></span>
            Pending
            <strong>{pendingComplaints}</strong>
          </div>

          <div>
            <span className="dot progress-dot"></span>
            In Progress
            <strong>{inProgressComplaints}</strong>
          </div>

          <div>
            <span className="dot resolved-dot"></span>
            Resolved
            <strong>{resolvedComplaints}</strong>
          </div>

        </div>

      </section>

      {/* RECENT ACTIVITY */}

      <section className="panel">

        <div className="panel-heading compact">

          <div>
            <p className="eyebrow">
              LATEST ACTIVITY
            </p>

            <h2>Recent Complaints</h2>
          </div>

          <button
            className="text-button"
            onClick={() => navigate("complaints")}
          >
            View all →
          </button>

        </div>

        <div className="recent-list">

          {recentComplaints.map((complaint) => (
            <div
              className="recent-item"
              key={complaint.id}
            >

              <div className="recent-icon">
                {complaint.category === "Road"
                  ? "🛣️"
                  : complaint.category === "Garbage"
                  ? "🗑️"
                  : complaint.category === "Water"
                  ? "💧"
                  : complaint.category === "Electricity"
                  ? "⚡"
                  : "📌"}
              </div>

              <div className="recent-info">

                <strong>
                  {complaint.title}
                </strong>

                <span>
                  {complaint.id} • {complaint.category}
                </span>

              </div>

              <StatusBadge
                status={complaint.status}
              />

              <span className="recent-date">
                {complaint.date}
              </span>

            </div>
          ))}

        </div>

      </section>

    </>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  title,
  value,
  description,
  type,
}) {
  return (
    <div className={`stat-card stat-${type}`}>

      <div className="stat-icon">
        {icon}
      </div>

      <div className="stat-content">

        <span className="stat-title">
          {title}
        </span>

        <strong className="stat-value">
          {value}
        </strong>

        <small>
          {description}
        </small>

      </div>

    </div>
  );
}

/* =========================================================
   COMPLAINTS PAGE
========================================================= */

function ComplaintsPage({
  complaints,
  filteredComplaints,
  search,
  setSearch,
  categoryFilter,
  setCategoryFilter,
  statusFilter,
  setStatusFilter,
  priorityFilter,
  setPriorityFilter,
  changeStatus,
  clearFilters,
}) {
  return (
    <>

      <PageHeader
        eyebrow="MANAGE"
        title="Complaints"
        description="Review, filter and manage civic complaints."
      />

      {/* FILTER PANEL */}

      <section className="panel filters-panel">

        <div className="filters-row">

          <div className="search-box">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search complaints..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value)
            }
          >
            <option value="All">
              All Categories
            </option>
            <option value="Road">Road</option>
            <option value="Garbage">Garbage</option>
            <option value="Water">Water</option>
            <option value="Electricity">
              Electricity
            </option>
            <option value="Other">Other</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">
              All Status
            </option>
            <option value="Pending">
              Pending
            </option>
            <option value="In Progress">
              In Progress
            </option>
            <option value="Resolved">
              Resolved
            </option>
          </select>

          <select
            value={priorityFilter}
            onChange={(e) =>
              setPriorityFilter(e.target.value)
            }
          >
            <option value="All">
              All Priorities
            </option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>

          <button
            className="clear-button"
            onClick={clearFilters}
          >
            Clear
          </button>

        </div>

      </section>

      {/* TABLE */}

      <section className="panel complaints-panel">

        <div className="table-top">

          <div>
            <h2>All Complaints</h2>

            <p>
              Showing {filteredComplaints.length} of{" "}
              {complaints.length} complaints
            </p>
          </div>

        </div>

        <div className="table-wrapper">

          <table className="complaints-table">

            <thead>
              <tr>
                <th>ID</th>
                <th>Complaint</th>
                <th>Category</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Department</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              {filteredComplaints.length > 0 ? (
                filteredComplaints.map((complaint) => (
                  <tr key={complaint.id}>

                    <td>
                      <strong className="complaint-id">
                        {complaint.id}
                      </strong>
                    </td>

                    <td>
                      <div className="complaint-title">

                        <strong>
                          {complaint.title}
                        </strong>

                        <span>
                          {complaint.location}
                        </span>

                      </div>
                    </td>

                    <td>
                      <span className="category-badge">
                        {complaint.category}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`priority-badge ${complaint.priority.toLowerCase()}`}
                      >
                        {complaint.priority}
                      </span>
                    </td>

                    <td>

                      <select
                        className={`status-select ${complaint.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        value={complaint.status}
                        onChange={(e) =>
                          changeStatus(
                            complaint.id,
                            e.target.value
                          )
                        }
                      >
                        <option value="Pending">
                          Pending
                        </option>

                        <option value="In Progress">
                          In Progress
                        </option>

                        <option value="Resolved">
                          Resolved
                        </option>

                      </select>

                    </td>

                    <td>
                      {complaint.department}
                    </td>

                    <td>
                      {complaint.date}
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="no-results"
                  >
                    No complaints found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </section>

    </>
  );
}

/* =========================================================
   MAP PAGE
========================================================= */

function MapPage({ complaints }) {
  return (
    <>

      <PageHeader
        eyebrow="LOCATION"
        title="Complaint Map"
        description="View reported civic issues and their locations."
      />

      <section className="map-layout">

        <div className="panel map-panel">

          <div className="map-toolbar">
            <div>
              <h2>Complaint Locations</h2>
              <p>
                {complaints.length} reported locations
              </p>
            </div>

            <span className="map-live">
              ● Live Data
            </span>
          </div>

          <div className="map-container">

            {/* OpenStreetMap background */}

            <iframe
              title="NagarSathi Complaint Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.50%2C12.90%2C77.70%2C13.05&layer=mapnik"
              className="osm-map"
            />

            {/* Complaint markers */}

            <div className="map-marker marker-one">
              <span>1</span>
            </div>

            <div className="map-marker marker-two">
              <span>2</span>
            </div>

            <div className="map-marker marker-three">
              <span>3</span>
            </div>

            <div className="map-marker marker-four">
              <span>4</span>
            </div>

            <div className="map-marker marker-five">
              <span>5</span>
            </div>

          </div>

          <div className="map-note">
            <strong>Map integration</strong>
            <span>
              Complaint locations can be connected to
              latitude and longitude when the reporting
              form starts storing coordinates.
            </span>
          </div>

        </div>

        <div className="panel map-list-panel">

          <div className="panel-heading compact">
            <div>
              <p className="eyebrow">
                REPORTS
              </p>

              <h2>Locations</h2>
            </div>
          </div>

          <div className="location-list">

            {complaints.map((complaint, index) => (
              <div
                className="location-item"
                key={complaint.id}
              >

                <div className="location-number">
                  {index + 1}
                </div>

                <div>
                  <strong>
                    {complaint.title}
                  </strong>

                  <span>
                    {complaint.location}
                  </span>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </>
  );
}

/* =========================================================
   ANALYTICS
========================================================= */

function AnalyticsPage({
  complaints,
  categoryCounts,
  resolutionRate,
}) {
  const maxCategory = Math.max(
    ...Object.values(categoryCounts),
    1
  );

  return (
    <>

      <PageHeader
        eyebrow="INSIGHTS"
        title="Analytics"
        description="Understand complaint trends and performance."
      />

      <section className="analytics-grid">

        <div className="panel analytics-card">

          <div className="panel-heading compact">
            <div>
              <p className="eyebrow">
                CATEGORIES
              </p>

              <h2>Complaint Categories</h2>
            </div>
          </div>

          <div className="category-chart">

            {Object.entries(categoryCounts).map(
              ([category, count]) => (
                <div
                  className="chart-row"
                  key={category}
                >

                  <div className="chart-label">
                    <span>{category}</span>
                    <strong>{count}</strong>
                  </div>

                  <div className="chart-track">
                    <div
                      className="chart-fill"
                      style={{
                        width: `${(count / maxCategory) * 100}%`,
                      }}
                    />
                  </div>

                </div>
              )
            )}

          </div>

        </div>

        <div className="panel analytics-card">

          <div className="panel-heading compact">
            <div>
              <p className="eyebrow">
                PERFORMANCE
              </p>

              <h2>Resolution Rate</h2>
            </div>
          </div>

          <div className="analytics-circle">

            <div>
              <strong>
                {resolutionRate}%
              </strong>

              <span>
                Resolved
              </span>
            </div>

          </div>

          <p className="analytics-summary">
            {complaints.filter(
              (c) => c.status === "Resolved"
            ).length}{" "}
            of {complaints.length} complaints have
            been resolved.
          </p>

        </div>

      </section>

      <section className="panel analytics-summary-panel">

        <div className="summary-box">
          <span>Total</span>
          <strong>{complaints.length}</strong>
        </div>

        <div className="summary-box">
          <span>Pending</span>
          <strong>
            {
              complaints.filter(
                (c) => c.status === "Pending"
              ).length
            }
          </strong>
        </div>

        <div className="summary-box">
          <span>In Progress</span>
          <strong>
            {
              complaints.filter(
                (c) => c.status === "In Progress"
              ).length
            }
          </strong>
        </div>

        <div className="summary-box">
          <span>Resolved</span>
          <strong>
            {
              complaints.filter(
                (c) => c.status === "Resolved"
              ).length
            }
          </strong>
        </div>

      </section>

    </>
  );
}

/* =========================================================
   SETTINGS
========================================================= */

function SettingsPage() {
  const [notificationsEnabled, setNotificationsEnabled] =
    useState(true);

  const [emailUpdates, setEmailUpdates] =
    useState(true);

  return (
    <>

      <PageHeader
        eyebrow="SYSTEM"
        title="Settings"
        description="Manage your administrator preferences."
      />

      <section className="panel settings-panel">

        <div className="settings-section">

          <div>
            <h2>Notifications</h2>
            <p>
              Control how administrator alerts are displayed.
            </p>
          </div>

          <label className="toggle-row">

            <span>
              Notifications
            </span>

            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={(e) =>
                setNotificationsEnabled(
                  e.target.checked
                )
              }
            />

            <span className="toggle-switch"></span>

          </label>

        </div>

        <div className="settings-section">

          <div>
            <h2>Email Updates</h2>
            <p>
              Receive important complaint updates.
            </p>
          </div>

          <label className="toggle-row">

            <span>
              Email updates
            </span>

            <input
              type="checkbox"
              checked={emailUpdates}
              onChange={(e) =>
                setEmailUpdates(e.target.checked)
              }
            />

            <span className="toggle-switch"></span>

          </label>

        </div>

        <div className="settings-section">

          <div>
            <h2>System Status</h2>
            <p>
              NagarSathi administration services.
            </p>
          </div>

          <span className="system-active-badge">
            ● System Active
          </span>

        </div>

      </section>

    </>
  );
}

/* =========================================================
   PROFILE
========================================================= */

function ProfilePage() {
  return (
    <>

      <PageHeader
        eyebrow="ACCOUNT"
        title="Admin Profile"
        description="Administrator account information."
      />

      <section className="profile-page">

        <div className="panel profile-card">

          <div className="large-profile-avatar">
            A
          </div>

          <h2>Admin</h2>

          <p className="profile-role">
            Administrator
          </p>

          <div className="profile-details">

            <div>
              <span>Name</span>
              <strong>Admin</strong>
            </div>

            <div>
              <span>Role</span>
              <strong>Administrator</strong>
            </div>

            <div>
              <span>Portal</span>
              <strong>NagarSathi Admin Portal</strong>
            </div>

            <div>
              <span>Account Status</span>
              <strong className="account-active">
                Active
              </strong>
            </div>

          </div>

        </div>

      </section>

    </>
  );
}

/* =========================================================
   PAGE HEADER
========================================================= */

function PageHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="page-header">

      <div>
        <p className="eyebrow">
          {eyebrow}
        </p>

        <h1>{title}</h1>

        <p>
          {description}
        </p>
      </div>

    </section>
  );
}

/* =========================================================
   STATUS BADGE
========================================================= */

function StatusBadge({ status }) {
  return (
    <span
      className={`status-badge ${status
        .toLowerCase()
        .replace(" ", "-")}`}
    >
      {status}
    </span>
  );
}

export default AdminDashboard;