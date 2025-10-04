function Signup() {
    return (
        <div class="sign-up-modal hidden">
            <div class="modal-container">
                <button onclick="hideSignUpModal()" class="modal-close-btn">
                    <i class="ri-close-line"></i>
                </button>
                <div class="modal-header">
                    <h2>Create Your EventHub Account</h2>
                    <p>Join us today! Please fill in the details to create your account.</p>
                </div>
                <form class="modal-form">
                    <div class="form-group">
                        <label for="signup-name">Full Name</label>
                        <input id="signup-name" type="text" placeholder="Your Name" />
                    </div>
                    <div class="form-group">
                        <label for="signup-email">Email Address</label>
                        <input id="signup-email" type="email" placeholder="your@email.com" />
                    </div>
                    <div class="form-group">
                        <label for="signup-password">Password</label>
                        <input id="signup-password" type="password" placeholder="********" />
                    </div>
                    <div class="form-group">
                        <label for="signup-confirm-password">Confirm Password</label>
                        <input id="signup-confirm-password" type="password" placeholder="********" />
                    </div>
                    <div class="form-group">
                        <input id="terms" type="checkbox" />
                            <label for="terms">I agree to the <a href="#" class="terms-link">Terms & Conditions</a></label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
