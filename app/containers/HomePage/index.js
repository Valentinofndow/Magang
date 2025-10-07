import React, { useState } from 'react';
import './style.css';

export default function HomePage() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="login-wrapper">
      <div className="left-side">
        <h1 className="company-name">
          PT SATYA
          <br />
          SOLUSINDO
          <br />
          INDONESIA
        </h1>
      </div>

      <div className="right-side">
        <div className="login-card">
          <form>
            <input
              type="text"
              placeholder="Username or Email"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field"
            />
            <button
              type="button"
              className="login-btn"
              onClick={() => (window.location.href = '/main')}
            >
              LOGIN
            </button>

            <a href="#" className="forgot-text">
              Forgot Password?
            </a>

            <hr className="divider" />

            <p className="signup-text">
              Don’t have an account?{' '}
              <span className="signup-link" onClick={() => setShowSignup(true)}>
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>

      {showSignup && (
        <div className="signup-modal">
          <div
            className="signup-overlay"
            onClick={() => setShowSignup(false)}
          />
          <div className="signup-card">
            <button className="close-btn" onClick={() => setShowSignup(false)}>
              ✕
            </button>

            <h2 className="signup-title">Create your account</h2>
            <form>
              <label>Username:</label>
              <input
                type="text"
                placeholder="Username"
                className="input-field"
              />

              <label>Email:</label>
              <input type="email" placeholder="Email" className="input-field" />

              <label>Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="input-field"
              />

              <label>Confirm Password:</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input-field"
              />

              <button type="submit" className="signup-btn">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
