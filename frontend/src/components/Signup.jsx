import "./style.css";
import { useState } from "react";
function SignUp() {
  const [showSignUp, setShowSignUp] = useState(false);
  const hideSignUpModal = () => {
    setShowSignUp(false);
    document.body.style.overflow = "auto";
  };
  return (
    <>
      {showSignUp && (
        <div className="sign-up-modal">
          <div className="modal-container">
            <button onClick={hideSignUpModal} className="modal-close-btn">
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
                <label for="signup-name">Full Name</label>
                <input id="signup-name" type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label for="signup-email">Email Address</label>
                <input
                  id="signup-email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label for="signupPassword">Password</label>
                <input
                  id="signupPassword"
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="form-group">
                <label for="signupConfirmPassword">Confirm Password</label>
                <input
                  id="signupConfirmPassword"
                  type="password"
                  placeholder="********"
                />
              </div>
              <div className="form-group">
                <input id="terms" type="checkbox" />
                <label for="terms">
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
    </>
  );
}
export default SignUp;
