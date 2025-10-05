import './style.css';
function HeroSection() {
    return (
        <section className="hero-section">
            <div className="hero-bg">
                <div className="hero-container">
                    <div className="hero-text">
                        <h1>
                            "Discover Amazing"
                            <span className="hero-highlight">Events Near You</span>
                        </h1>
                        <p className="hero-subtitle">
                            From concerts to conferences, find and book your next unforgettable experience
                        </p>
                        <form className="hero-search-form">
                            <div className="search-wrapper">
                                <div className="search-icon">
                                    <i className="ri-search-line"></i>
                                </div>
                                <input placeholder="Search for events, venues, or categories..." type="text" defaultValue="" />
                                <div className="search-btn-wrapper">
                                    <button type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                        <div className="hero-browse-btn">
                            <a href="#" data-discover="true">
                                <button>
                                    <i className="ri-calendar-event-line browse-events-icon"></i>
                                    Browse Events
                                </button>
                            </a>
                        </div>
                        <div className="hero-create-btn">
                            <a href="#" data-discover="true">
                                <button>
                                    <i className="ri-add-line create-event-icon"></i>
                                    Create Event
                                </button>
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div>
                                <div className="stat-number">10,000+</div>
                                <div className="stat-label">Events Hosted</div>
                            </div>
                            <div>
                                <div className="stat-number">500K+</div>
                                <div className="stat-label">Happy Attendees</div>
                            </div>
                            <div>
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Cities Covered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;