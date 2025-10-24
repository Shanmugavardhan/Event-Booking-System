import "./style.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import API from "../api/api";

function Header() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const { user, logout } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/signup", form);
      if (res.data.token) {
        login(res.data.token); // automatically log in user
        setMessage("Signup successful 🎉 You are now logged in.");
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      if (err.response) {
        console.log("Backend error:", err.response.data);
        alert(error.response.data.message || "SignIn failed");
      } else {
        console.error("unexpected error:", err);
        alert("Something went wrong. Please try again");
      }
      setMessage(err.response?.data?.error || "Signup failed");
    }
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      console.log("handle SignIn is triggered");
      const res = await API.post("/signin", form);
      console.log("await API.post completed");
      login(res.data.token);
      setShowSignIn(false);
      document.body.style.overflow = "auto";
      setAuthStatus("success");
      setAuthMessage("Sign-In Successful!");
      setShowAuthResponse(true);
      setTimeout(() => {
        setShowAuthResponse(false);
        window.location.reload();
      }, 3000);
      console.log("Login Succesfull");
      setMessage("Login Successful");
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
      // setShowSignInFailed(true);
      setAuthStatus("error");
      setAuthMessage("Sign-In failed, Please try again!");
      setShowAuthResponse(true);
      document.body.style.overflow = "auto";
      setTimeout(() => {
        setShowAuthResponse(false);
      }, 3000);
    }
  };

  const [authStatus, setAuthStatus] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [showAuthResponse, setShowAuthResponse] = useState(false);

  const AuthResponse = ({ type, message, show }) => {
    if (!show) return null;
    return (
      <div className={`signin-response ${type === "success" ? "animate" : ""}`}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
        >
          <circle
            className="path circle"
            fill="none"
            stroke="#73AF55"
            strokeWidth="6"
            strokeMiterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <polyline
            className="path check"
            fill="none"
            stroke="#73AF55"
            strokeWidth="6"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
        <p className={type}>{message}</p>
      </div>
    );
  };

  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignInSuccesful, setShowSignInSuccesful] = useState(false);
  const [showSignInFailed, setShowSignInFailed] = useState(false);
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

  const handleLogout = (e) => {
    // prevent anchor navigation
    if (e && e.preventDefault) e.preventDefault();
    // call auth logout and hide the user menu
    logout();
    setIsUserMenuVisible(false);
  };

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
                className={`btn btn-outline ${!user ? "" : "hidden"}`}
              >
                Sign In
              </button>
              <button
                onClick={() => openModal("signup")}
                className={`btn btn-primary ${!user ? "" : "hidden"}`}
              >
                Sign Up
              </button>
              <div
                onClick={toggleUserMenu}
                className={`header-user ${!user ? "hidden" : ""}`}
              >
                <div className="user-avatar">
                  <img
                    alt="User Avatar"
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                  />
                </div>
                <span className="user-name">{user?.username || "Guest"}</span>
                <button className="menu-btn">
                  {isUserMenuVisible ? "Hide Menu" : "Show Menu"}
                  <i className="ri-menu-line"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Authentication response toast */}
      <AuthResponse
        type={authStatus === "success" ? "success" : "error"}
        message={authMessage}
        show={showAuthResponse}
      />
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

            <form className="modal-form" onSubmit={handleSignin}>
              <div className="form-group">
                <label htmlFor="signin-email">Email Address</label>
                <input
                  id="signin-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signin-password">Password</label>
                <input
                  id="signin-password"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
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
      {/* {showSignInSuccesful && (
        <div className={`signin-response ${type ==="success" ? "animate": ""}`}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <circle
              className="path circle"
              fill="none"
              stroke="#73AF55"
              strokeWidth="6"
              strokeMiterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <polyline
              className="path check"
              fill="none"
              stroke="#73AF55"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="100.2,40.2 51.5,88.8 29.8,67.5 "
            />
          </svg>
          <p className={type}>{message}</p>
        </div>
      )}
      {showSignInFailed && (

        <div className={`signin-response`}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <circle
              className="path circle"
              fill="none"
              stroke="#D06079"
              strokeWidth="6"
              strokeMiterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <line
              className="path line"
              fill="none"
              stroke="#D06079"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="34.4"
              y1="37.9"
              x2="95.8"
              y2="92.3"
            />
            <line
              className="path line"
              fill="none"
              stroke="#D06079"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              x1="95.8"
              y1="38"
              x2="34.4"
              y2="92.2"
            />
          </svg>
          <p className="error">SignIn Failed, Please tryagain!</p>
        </div>
      )} */}
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
            <form className="modal-form" onSubmit={handleSignup}>
              <div className="form-group">
                <label htmlFor="signup-name">Full Name</label>
                <input 
                  id="signup-name" 
                  name="username"
                  type="text" 
                  value={form.username}
                  onChange={handleChange}
                  placeholder="username" />
              </div>
              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signupPassword">Password</label>
                <input
                  id="signupPassword"
                  name="password"
                  type="password"
                  value={form.signupPassword}
                  onChange={handleChange}
                  placeholder="********"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signupConfirmPassword">
                  Confirm Password
                </label>
                <input
                  id="signupConfirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={form.signupConfirmPassword}
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
      {/*Hamburger side Menu */}
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
                onMouseOver={(e) => (e.currentTarget.style.color = "#2563eb")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
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
                onMouseOver={(e) => (e.currentTarget.style.color = "#2563eb")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
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
                onMouseOver={(e) => (e.currentTarget.style.color = "#2563eb")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                onClick={handleLogout}
                style={{
                  display: "block",
                  color: "#374151",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#2563eb")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#374151")}
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
