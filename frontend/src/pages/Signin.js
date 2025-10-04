function Signin() {
    return (
        <div class="sign-in-modal hidden">
            <div class="modal-container">
                <button onclick="hideSignInModal()" class="modal-close-btn">
                    <i class="ri-close-line"></i>
                </button>
                <div class="modal-header">
                    <h2>Sign In to EventHub</h2>
                    <p>Welcome back! Please enter your details to sign in.</p>
                </div>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="signin-email">Email Address</label>
                        <input id="signin-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div class="form-group">
                        <label for="signin-password">Password</label>
                        <input id="signin-password" type="password" placeholder="********" />
                    </div>
                    <div class="form-group rememberdiv">
                        <input id="remember-me" type="checkbox" />
                        <label for="remember-me">Remember Me</label>
                    </div>
                    <div class="form-group">
                        <a href="#" class="forgot-password-link">Forgot Password?</a>
                    </div>
                    <div class="form-group">
                        <a href="#" class="create-account-link">Don't have an account? Sign Up</a>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </form>
            </div>
        </div>
    );
}
export default Signin;