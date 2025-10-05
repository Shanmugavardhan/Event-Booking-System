import './style.css';

function Footer() {
    return (
        <footer className="custom-footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="footer-logo-row">
                            <div className="footer-logo-icon">
                                <i className="ri-calendar-event-line"></i>
                            </div>
                            <span className="footer-logo-text">EventHub</span>
                        </div>
                        <p className="footer-desc">
                            Discover amazing events and create unforgettable experiences. Your gateway to the best events in your
                            city.
                        </p>
                        <div className="footer-socials">
                            <a href="#"><i className="ri-facebook-fill"></i></a>
                            <a href="#"><i className="ri-twitter-fill"></i></a>
                            <a href="#"><i className="ri-instagram-fill"></i></a>
                            <a href="#"><i className="ri-linkedin-fill"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#" data-discover="true">About Us</a></li>
                            <li><a href="#" data-discover="true">Contact</a></li>
                            <li><a href="#" data-discover="true">Careers</a></li>
                            <li><a href="#" data-discover="true">Press</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#" data-discover="true">Help Center</a></li>
                            <li><a href="#" data-discover="true">Safety</a></li>
                            <li><a href="#" data-discover="true">Community Guidelines</a></li>
                            <li><a href="#" data-discover="true">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>For Organizers</h3>
                        <ul>
                            <li><a href="#" data-discover="true">Create Event</a></li>
                            <li><a href="#" data-discover="true">Pricing</a></li>
                            <li><a href="#" data-discover="true">Resources</a></li>
                            <li><a href="#" data-discover="true">Event Planning</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2025 EventHub. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <a href="#" data-discover="true">Privacy Policy</a>
                        <a href="#" data-discover="true">Cookie Policy</a>
                        <a href="https://readdy.ai/?origin=logo" target="_blank" rel="noopener noreferrer">Website Builder</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;