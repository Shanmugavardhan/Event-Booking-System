function EventDetails() {
    return (
        <div class="event-details-modal hidden" id="eventDetailsModal">
            <div class="modal-container">
                <button onclick="hideEventDetailsModal()" class="modal-close-btn">
                    <i class="ri-close-line"></i>
                </button>
                <div class="modal-header">
                    <h2 id="eventTitle">Event Title</h2>
                </div>
                <div class="modal-body">
                    <div class="event-details" id="eventDetailsContent">
                        <div class="event-image-wrapper">
                            <img alt="Event Image" class="eventImage"
                                src="https://readdy.ai/api/search-image?query=intimate%20comedy%20club%20with%20comedian%20on%20stage%20under%20spotlight%2C%20audience%20laughing%20in%20dimly%20lit%20venue%2C%20brick%20wall%20background%2C%20microphone%20stand%2C%20warm%20stage%20lighting%2C%20cozy%20entertainment%20atmosphere%2C%20people%20enjoying%20drinks%20and%20laughing&amp;width=800&amp;height=600&amp;seq=4&amp;orientation=landscape"/>
                                <div class="event-card-meta">
                                    <span><i class="ri-calendar-line"></i> Jun 18, 2024 at 20:00</span>
                                    <span><i class="ri-map-pin-line"></i> Comedy Club Downtown</span>
                                </div>
                                <div class="event-image-overlay">
                                    <div class="event-category">Entertainment</div>
                                    <div class="event-price">₹35.99</div>
                                    <div class="event-date">Jun 18, 2024 at 20:00</div>
                                    <div class="event-venue">Comedy Club Downtown</div>
                                </div>
                        </div>
                        <p id="eventDescription">Laugh until your sides hurt with our lineup of hilarious comedians. A night
                            of
                            non-stop entertainment and great laughs.</p>
                        <div class="event-card-info">
                            <span class="event-card-seats event-card-seats-warning">89 seats available</span>
                        </div>
                        <div class="event-card-tags">
                            <span>Comedy</span>
                            <span>Entertainment</span>
                        </div>
                        <div class="event-card-actions">
                            <a href="./booking.html"><button class="event-btn-primary">Book Now</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default EventDetails;