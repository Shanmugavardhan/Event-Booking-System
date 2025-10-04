function HeroSection() {
    return (
        <section class="hero-section">
            <div class="hero-bg">
                <div class="hero-container">
                    <div class="hero-text">
                        <h1>
                            "Discover Amazing"
                            <span class="hero-highlight">Events Near You</span>
                        </h1>
                        <p class="hero-subtitle">
                            From concerts to conferences, find and book your next unforgettable experience
                        </p>
                        <form class="hero-search-form">
                            <div class="search-wrapper">
                                <div class="search-icon">
                                    <i class="ri-search-line"></i>
                                </div>
                                <input placeholder="Search for events, venues, or categories..." type="text" value="" />
                                <div class="search-btn-wrapper">
                                    <button type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                        <div class="hero-browse-btn">
                            <a href="#" data-discover="true">
                                <button>
                                    <i class="ri-calendar-event-line browse-events-icon"></i>
                                    Browse Events
                                </button>
                            </a>
                        </div>
                        <div class="hero-create-btn">
                            <a href="#" data-discover="true">
                                <button>
                                    <i class="ri-add-line create-event-icon"></i>
                                    Create Event
                                </button>
                            </a>
                        </div>
                        <div class="hero-stats">
                            <div>
                                <div class="stat-number">10,000+</div>
                                <div class="stat-label">Events Hosted</div>
                            </div>
                            <div>
                                <div class="stat-number">500K+</div>
                                <div class="stat-label">Happy Attendees</div>
                            </div>
                            <div>
                                <div class="stat-number">50+</div>
                                <div class="stat-label">Cities Covered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HeroSection;