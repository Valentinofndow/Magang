import React from 'react';
import './style.css';

export default function MainPage() {
  console.log('MainPage loaded');

  return (
    <div className="main-wrapper">
      <nav className="navbar">
        <h1 className="logo">Inspection Dashboard</h1>
        <button
          className="logout-btn"
          onClick={() => (window.location.href = '/')}
        >
          Logout
        </button>
      </nav>

      <div className="content">
        <h2>Welcome, User!</h2>
        <p>Here’s your system overview for today.</p>

        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Bottles Checked</h3>
            <p>1,248</p>
          </div>
          <div className="stat-card">
            <h3>Defective Bottles</h3>
            <p>37</p>
          </div>
          <div className="stat-card">
            <h3>Accuracy</h3>
            <p>97.04%</p>
          </div>
        </div>

        <div className="chart-placeholder">
          <p>📊 Graph area (coming soon)</p>
        </div>
      </div>
    </div>
  );
}
