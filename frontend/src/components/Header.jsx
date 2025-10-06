import "./style.css";
import { useState } from "react";
function Header() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
  const openModal = (type) => {
    document.body.style.overflow = "hidden";
    if (type === "signin") {
      setShowSignIn(true);
    }
    if (type === "signup") {
      setShowSignUp(true);
    }
    if (type === "usermenu") {
      setShowUserMenu(true);
    }
  };

  const closeAllModals = () => {
    document.body.style.overflow = "auto";
    setShowSignIn(false);
    setShowSignUp(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuVisible((prev) => !prev);
  };

  //   const handleShowSignInModal = () => {
  //     setShowSignIn(true);
  //     document.body.style.overflow = "hidden";
  //   };

  //   const handleShowSignUpModal = () => {
  //     setShowSignUp(true);
  //     document.body.style.overflow = "hidden";
  //   };

  //   const handleShowUserMenu = () => {
  //     setShowUserMenu(true);
  //     document.body.style.overflow = "hidden";
  //   };
  return (
    <>
      <header className="main-header">
        <div className="header-container">
          <div className="header-flex">
            <a className="header-logo" href="#" data-discover="true">
              <div className="logo-icon">
                <i className="ri-calendar-event-line"></i>
              </div>
              <span className="logo-text">EventHub</span>
            </a>
            <nav className="main-nav">
              <a className="nav-link nav-link-active" data-discover="true">
                Events
              </a>
              <a className="nav-link" data-discover="true">
                My Bookings
              </a>
              <a className="nav-link" data-discover="true">
                Admin
              </a>
            </nav>
            <div className="header-actions">
              <button
                onClick={() => openModal("signin")}
                className="btn btn-outline"
              >
                Sign In
              </button>
              <button
                onClick={() => openModal("signup")}
                className="btn btn-primary"
              >
                Sign Up
              </button>
              <div onClick={toggleUserMenu} className="header-user">
                <div className="user-avatar">
                  <img
                    alt="User Avatar"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                  />
                </div>
                <span className="user-name">John Doe</span>
                <button className="menu-btn">
                  {isUserMenuVisible ? "Hide Menu" : "Show Menu"}
                  <i className="ri-menu-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Modals */}
      {showSignIn && (
        <div className="sign-in-modal">
          <div className="modal-container">
            <button
              onClick={() => closeAllModals()}
              className="modal-close-btn"
            >
              <i className="ri-close-line"></i>
            </button>
            <div className="modal-header">
              <h2>Sign In to EventHub</h2>
              <p>Welcome back! Please enter your details to sign in.</p>
            </div>
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="signin-email">Email Address</label>
                <input
                  id="signin-email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signin-password">Password</label>
                <input
                  id="signin-password"
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="form-group rememberdiv">
                <input id="remember-me" type="checkbox" />
                <label htmlFor="remember-me">Remember Me</label>
              </div>
              <div className="form-group">
                <a href="#" className="forgot-password-link">
                  Forgot Password?
                </a>
              </div>
              <div className="form-group">
                <a href="#" className="create-account-link">
                  Don't have an account? Sign Up
                </a>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
      {showSignUp && (
        <div className="sign-up-modal">
          <div className="modal-container">
            <button
              onClick={() => closeAllModals()}
              className="modal-close-btn"
            >
              <i className="ri-close-line"></i>
            </button>
            <div className="modal-header">
              <h2>Create Your EventHub Account</h2>
              <p>
                Join us today! Please fill in the details to create your
                account.
              </p>
            </div>
            <form className="modal-form">
              <div className="form-group">
                <label htmlFor="signup-name">Full Name</label>
                <input id="signup-name" type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signup-confirm-password">Confirm Password</label>
                <input
                  id="signup-confirm-password"
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="form-group">
                <input id="terms" type="checkbox" />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a href="#" className="terms-link">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      )}
      <div className={`user-Menu ${isUserMenuVisible ? "visible" : ""}`}>
        <div className="user-Menu-content">
          <ul className="user-Menu-list">
            <li style={{ marginBottom: "8px" }}>
              <a
                href="#"
                style={{
                  display: "block",
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#2563eb")}
                onMouseOut={e => (e.currentTarget.style.color = "#374151")}
              >
                Profile
              </a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a
                href="#"
                style={{
                  display: "block",
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#2563eb")}
                onMouseOut={e => (e.currentTarget.style.color = "#374151")}
              >
                My Bookings
              </a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a
                href="#"
                style={{
                  display: "block",
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#2563eb")}
                onMouseOut={e => (e.currentTarget.style.color = "#374151")}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                style={{
                  display: "block",
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#2563eb")}
                onMouseOut={e => (e.currentTarget.style.color = "#374151")}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Header;
