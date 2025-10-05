import './style.css';

function SignIn() {
    return (
        <div className="sign-in-modal hidden">
            <div className="modal-container">
                <button onClick={hideSignInModal} className="modal-close-btn">
                    <i className="ri-close-line"></i>
                </button>
                <div className="modal-header">
                    <h2>Sign In to EventHub</h2>
                    <p>Welcome back! Please enter your details to sign in.</p>
                </div>
                <form className="modal-form">
                    <div className="form-group">
                        <label for="signin-email">Email Address</label>
                        <input id="signin-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div className="form-group">
                        <label for="signin-password">Password</label>
                        <input id="signin-password" type="password" placeholder="********" />
                    </div>
                    <div className="form-group rememberdiv">
                        <input id="remember-me" type="checkbox" />
                        <label for="remember-me">Remember Me</label>
                    </div>
                    <div className="form-group">
                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                    </div>
                    <div className="form-group">
                        <a href="#" className="create-account-link">Don't have an account? Sign Up</a>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    );
}
export default SignIn;