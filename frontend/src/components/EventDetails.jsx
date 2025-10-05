import './style.css';
function EventDetails() {
    return (
        <div className="event-details-modal hidden" id="eventDetailsModal">
            <div className="modal-container">
                <button onClick={hideEventDetailsModal} className="modal-close-btn">
                    <i className="ri-close-line"></i>
                </button>
                <div className="modal-header">
                    <h2 id="eventTitle">Event Title</h2>
                </div>
                <div className="modal-body">
                    <div className="event-details" id="eventDetailsContent">
                        <div className="event-image-wrapper">
                            <img alt="Event Image" className="eventImage"
                                src="https://readdy.ai/api/search-image?query=intimate%20comedy%20club%20with%20comedian%20on%20stage%20under%20spotlight%2C%20audience%20laughing%20in%20dimly%20lit%20venue%2C%20brick%20wall%20background%2C%20microphone%20stand%2C%20warm%20stage%20lighting%2C%20cozy%20entertainment%20atmosphere%2C%20people%20enjoying%20drinks%20and%20laughing&amp;width=800&amp;height=600&amp;seq=4&amp;orientation=landscape" />
                            <div className="event-card-meta">
                                <span><i className="ri-calendar-line"></i> Jun 18, 2024 at 20:00</span>
                                <span><i className="ri-map-pin-line"></i> Comedy Club Downtown</span>
                            </div>
                            <div className="event-image-overlay">
                                <div className="event-category">Entertainment</div>
                                <div className="event-price">₹35.99</div>
                                <div className="event-date">Jun 18, 2024 at 20:00</div>
                                <div className="event-venue">Comedy Club Downtown</div>
                            </div>
                        </div>
                        <p id="eventDescription">Laugh until your sides hurt with our lineup of hilarious comedians. A night
                            of
                            non-stop entertainment and great laughs.</p>
                        <div className="event-card-info">
                            <span className="event-card-seats event-card-seats-warning">89 seats available</span>
                        </div>
                        <div className="event-card-tags">
                            <span>Comedy</span>
                            <span>Entertainment</span>
                        </div>
                        <div className="event-card-actions">
                            <a href="./booking.html"><button className="event-btn-primary">Book Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EventDetails;