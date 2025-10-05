import './style.css';

function WhySection() {
    return (
        <section className="why-section">
            <div className="why-container">
                <div className="why-header">
                    <h2>Why Choose EventHub?</h2>
                    <p>We make event discovery and booking simple, secure, and enjoyable for everyone.</p>
                </div>
                <div className="why-grid">
                    <div className="why-card">
                        <div className="why-icon"><i className="ri-search-line"></i></div>
                        <h3>Easy Discovery</h3>
                        <p>Find events that match your interests with our powerful search and filtering system.</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon"><i className="ri-secure-payment-line"></i></div>
                        <h3>Secure Booking</h3>
                        <p>Book your tickets safely with our encrypted payment system and instant confirmation.</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon"><i className="ri-smartphone-line"></i></div>
                        <h3>Mobile Friendly</h3>
                        <p>Access your tickets and manage bookings on any device, anywhere, anytime.</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon"><i className="ri-customer-service-line"></i></div>
                        <h3>24/7 Support</h3>
                        <p>Get help when you need it with our dedicated customer support team.</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon"><i className="ri-notification-line"></i></div>
                        <h3>Smart Notifications</h3>
                        <p>Stay updated with event reminders, updates, and personalized recommendations.</p>
                    </div>
                    <div className="why-card">
                        <div className="why-icon"><i className="ri-group-line"></i></div>
                        <h3>Social Features</h3>
                        <p>Share events with friends and see what events your network is attending.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default WhySection;