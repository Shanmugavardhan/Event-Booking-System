import './style.css';
import { useState} from "react";

function EventsSection() {
    const [showEventDetails, setShowEventDetails] = useState(false);
    const openModal = (type) => {
        document.body.style.overflow = 'hidden';
        if (type === "Stand-Up Comedy Night") {
            setShowEventDetails(true);
        }
    }
    const closeModal = () => {
        document.body.style.overflow = 'auto';
        setShowEventDetails(false);
    }

    return (
        <>
        <section className="events-section" id="events">
            <div className="events-container">
                <div className="events-header">
                    <h2>Upcoming Events</h2>
                    <p>Discover amazing events happening near you. From intimate gatherings to large festivals, find your
                        perfect experience.</p>
                </div>
                <div className="events-filter-bar">
                    <div className="events-filters">
                        <button className="filter-btn filter-btn-active">All</button>
                        <button className="filter-btn">Music</button>
                        <button className="filter-btn">Technology</button>
                        <button className="filter-btn">Food &amp; Drink</button>
                        <button className="filter-btn">Entertainment</button>
                        <button className="filter-btn">Arts &amp; Culture</button>
                        <button className="filter-btn">Sports &amp; Fitness</button>
                    </div>
                    <div className="events-sort">
                        <span>Sort by:</span>
                        <select>
                            <option value="date">Date</option>
                            <option value="price">Price</option>
                            <option value="popularity">Popularity</option>
                        </select>
                    </div>
                </div>
                <div className="events-grid">
                    {/* Event Card 1 */}
                    <div className="event-card">
                        <div className="event-card-img-wrapper">
                            <img alt="Stand-Up Comedy Night"
                                src="https://readdy.ai/api/search-image?query=intimate%20comedy%20club%20with%20comedian%20on%20stage%20under%20spotlight%2C%20audience%20laughing%20in%20dimly%20lit%20venue%2C%20brick%20wall%20background%2C%20microphone%20stand%2C%20warm%20stage%20lighting%2C%20cozy%20entertainment%20atmosphere%2C%20people%20enjoying%20drinks%20and%20laughing&amp;width=800&amp;height=600&amp;seq=4&amp;orientation=landscape" />
                            <div className="event-card-category">Entertainment</div>
                            <div className="event-card-price">₹35.99</div>
                        </div>
                        <div className="event-card-body">
                            <div className="card-heading">
                                <h3>Stand-Up Comedy Night</h3>
                            </div>
                            <div className="event-card-meta">
                                <span><i className="ri-calendar-line"></i> Jun 18, 2024 at 20:00</span>
                                <span><i className="ri-map-pin-line"></i> Comedy Club Downtown</span>
                            </div>
                            <p>Laugh until your sides hurt with our lineup of hilarious comedians. A night of non-stop
                                entertainment and great laughs.</p>
                            <div className="event-card-info">
                                <span className="event-card-seats event-card-seats-warning">89 seats available</span>
                                <span className="event-card-org">by Laugh Factory Productions</span>
                            </div>
                            <div className="event-card-tags">
                                <span>Comedy</span>
                                <span>Entertainment</span>
                                <span className="event-card-tag-more">+1 more</span>
                            </div>
                            <div className="event-card-actions">
                                <a><button onClick={() => openModal('Stand-Up Comedy Night')} className="event-btn-outline">View
                                    Details</button></a>
                                <a href="./booking.html"><button className="event-btn-primary">Book Now</button></a>
                            </div>
                        </div>
                    </div>
                    {/* Event Card 2 */}
                    <div className="event-card">
                        <div className="event-card-img-wrapper">
                            <img alt="Tech Innovation Conference 2024"
                                src="https://readdy.ai/api/search-image?query=modern%20technology%20conference%20with%20professional%20speakers%20on%20stage%2C%20large%20screens%20displaying%20tech%20graphics%2C%20audience%20in%20business%20attire%2C%20sleek%20convention%20center%20interior%2C%20blue%20and%20white%20color%20scheme%2C%20futuristic%20lighting%2C%20networking%20atmosphere&amp;width=800&amp;height=600&amp;seq=2&amp;orientation=landscape" />
                            <div className="event-card-category">Technology</div>
                            <div className="event-card-price">₹299.99</div>
                        </div>
                        <div className="event-card-body">
                            <div className="card-heading">
                                <h3>Tech Innovation Conference 2024</h3>
                            </div>
                            <div className="event-card-meta">
                                <span><i className="ri-calendar-line"></i> Jun 20, 2024 at 09:00</span>
                                <span><i className="ri-map-pin-line"></i> Convention Center Hall A</span>
                            </div>
                            <p>Discover the latest trends in technology and innovation. Network with industry leaders, attend
                                workshops, and gain insights into the future of tech.</p>
                            <div className="event-card-info">
                                <span className="event-card-seats event-card-seats-available">847 seats available</span>
                                <span className="event-card-org">by TechForward Events</span>
                            </div>
                            <div className="event-card-tags">
                                <span>Technology</span>
                                <span>Conference</span>
                                <span className="event-card-tag-more">+1 more</span>
                            </div>
                            <div className="event-card-actions">
                                <a href="#"><button className="event-btn-outline">View Details</button></a>
                                <a href="#"><button className="event-btn-primary">Book Now</button></a>
                            </div>
                        </div>
                    </div>
                    {/* Event Card 3 */}
                    <div className="event-card">
                        <div className="event-card-img-wrapper">
                            <img alt="Art Gallery Opening: Modern Expressions"
                                src="https://readdy.ai/api/search-image?query=sophisticated%20art%20gallery%20opening%20with%20modern%20paintings%20on%20white%20walls%2C%20well-dressed%20visitors%20viewing%20artwork%2C%20elegant%20gallery%20lighting%2C%20contemporary%20art%20pieces%2C%20cultural%20atmosphere%2C%20wine%20glasses%2C%20refined%20social%20gathering&amp;width=800&amp;height=600&amp;seq=5&amp;orientation=landscape" />
                            <div className="event-card-category">Arts &amp; Culture</div>
                            <div className="event-card-price">₹25.99</div>
                        </div>
                        <div className="event-card-body">
                            <div className="card-heading">
                                <h3>Art Gallery Opening: Modern Expressions</h3>
                            </div>
                            <div className="event-card-meta">
                                <span><i className="ri-calendar-line"></i> Jun 22, 2024 at 18:00</span>
                                <span><i className="ri-map-pin-line"></i> Metropolitan Art Gallery</span>
                            </div>
                            <p>Explore contemporary art from emerging and established artists. Join us for an evening of artistic
                                inspiration and cultural enrichment.</p>
                            <div className="event-card-info">
                                <span className="event-card-seats event-card-seats-available">267 seats available</span>
                                <span className="event-card-org">by Metropolitan Arts Foundation</span>
                            </div>
                            <div className="event-card-tags">
                                <span>Art</span>
                                <span>Culture</span>
                                <span>Gallery</span>
                                <span className="event-card-tag-more">+1 more</span>
                            </div>
                            <div className="event-card-actions">
                                <a href="#"><button className="event-btn-outline">View Details</button></a>
                                <a href="#"><button className="event-btn-primary">Book Now</button></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Event Card 4 --> */}
                    <div className="event-card">
                        <div className="event-card-img-wrapper">
                            <img alt="Gourmet Food &amp; Wine Tasting"
                                src="https://readdy.ai/api/search-image?query=elegant%20wine%20tasting%20event%20in%20luxurious%20ballroom%2C%20sophisticated%20guests%20holding%20wine%20glasses%2C%20gourmet%20food%20displays%2C%20warm%20ambient%20lighting%2C%20upscale%20restaurant%20atmosphere%2C%20professional%20catering%20setup%2C%20refined%20dining%20experience&amp;width=800&amp;height=600&amp;seq=3&amp;orientation=landscape" />
                            <div className="event-card-category">Food &amp; Drink</div>
                            <div className="event-card-price">₹149.99</div>
                        </div>
                        <div className="event-card-body">
                            <div className="card-heading">
                                <h3>Gourmet Food &amp; Wine Tasting</h3>
                            </div>
                            <div className="event-card-meta">
                                <span><i className="ri-calendar-line"></i> Jun 25, 2024 at 19:30</span>
                                <span><i className="ri-map-pin-line"></i> Grand Ballroom Hotel Luxe</span>
                            </div>
                            <p>Indulge in exquisite cuisine and premium wines from renowned chefs and vineyards. A sophisticated
                                evening of culinary excellence.</p>
                            <div className="event-card-info">
                                <span className="event-card-seats event-card-seats-available">156 seats available</span>
                                <span className="event-card-org">by Culinary Experiences Ltd</span>
                            </div>
                            <div className="event-card-tags">
                                <span>Food</span>
                                <span>Wine</span>
                                <span>Luxury</span>
                                <span className="event-card-tag-more">+1 more</span>
                            </div>
                            <div className="event-card-actions">
                                <a href="#"><button className="event-btn-outline">View Details</button></a>
                                <a href="#"><button className="event-btn-primary">Book Now</button></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Event Card 5 --> */}
                    <div className="event-card">
                        <div className="event-card-img-wrapper">
                            <img alt="Fitness Bootcamp Challenge"
                                src="https://readdy.ai/api/search-image?query=outdoor%20fitness%20bootcamp%20with%20energetic%20participants%20exercising%20in%20park%20setting%2C%20professional%20trainers%20leading%20workout%2C%20morning%20sunlight%2C%20athletic%20equipment%2C%20motivational%20atmosphere%2C%20people%20in%20workout%20gear%2C%20healthy%20lifestyle%20activity&amp;width=800&amp;height=600&amp;seq=6&amp;orientation=landscape" />
                            <div className="event-card-category">Sports &amp; Fitness</div>
                            <div className="event-card-price">₹45.99</div>
                        </div>
                        <div className="event-card-body">
                            <div className="card-heading">
                                <h3>Fitness Bootcamp Challenge</h3>
                            </div>
                            <div className="event-card-meta">
                                <span><i className="ri-calendar-line"></i> Jun 30, 2024 at 07:00</span>
                                <span><i className="ri-map-pin-line"></i> Riverside Park Fitness Area</span>
                            </div>
                            <p>Push your limits in this high-intensity fitness challenge. Suitable for all fitness levels with
                                professional trainers guiding you.</p>
                            <div className="event-card-info">
                                <span className="event-card-seats event-card-seats-warning">34 seats available</span>
                                <span className="event-card-org">by FitLife Training</span>
                            </div>
                            <div className="event-card-tags">
                                <span>Fitness</span>
                                <span>Outdoor</span>
                                <span>Challenge</span>
                                <span className="event-card-tag-more">+1 more</span>
                            </div>
                            <div className="event-card-actions">
                                <a href="#"><button className="event-btn-outline">View Details</button></a>
                                <a href="#"><button className="event-btn-primary">Book Now</button></a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Event Card 6 --> */}
                    <div className="event-card">
                        <div className="event-card-img-wrapper">
                            <img alt="Summer Music Festival 2024" src="https://readdy.ai/api/search-image?query=vibrant%20summer%20music%20festival%20with%20colorful%20stage%20lights%2C%20crowd%20dancing%2C%20outdoor%20amphitheater%20setting%2C%20evening%20atmosphere%2C%20professional%20concert%20photography%2C%20energetic%20crowd%20silhouettes%20against%20bright%20stage%20lighting%2C%20modern%20festival%20setup%20with%20multiple%20screens%20and%20sound%20equipment&amp;width=800&amp;height=600&amp;seq=1&amp;orientation=landscape" />
                            <div className="event-card-category">Music</div>
                            <div className="event-card-price">₹89.99</div>
                        </div>
                        <div className="event-card-body">
                            <div className="card-heading">
                                <h3>Summer Music Festival 2024</h3>
                            </div>
                            <div className="event-card-meta">
                                <span><i className="ri-calendar-line"></i> Jul 15, 2024 at 18:00</span>
                                <span><i className="ri-map-pin-line"></i> Central Park Amphitheater</span>
                            </div>
                            <p>Join us for an unforgettable night of music featuring top artists from around the world. Experience
                                live performances, food trucks, and amazing vibes under the stars.</p>
                            <div className="event-card-info">
                                <span className="event-card-seats event-card-seats-available">3247 seats available</span>
                                <span className="event-card-org">by MusicEvents Pro</span>
                            </div>
                            <div className="event-card-tags">
                                <span>Music</span>
                                <span>Festival</span>
                                <span>Outdoor</span>
                                <span className="event-card-tag-more">+1 more</span>
                            </div>
                            <div className="event-card-actions">
                                <a href="#"><button className="event-btn-outline">View Details</button></a>
                                <a href="#"><button className="event-btn-primary">Book Now</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="events-footer">
                    <p>Showing 6 of 6 events</p>
                </div>
            </div>
        </section>
        {/*Modal*/}
        {showEventDetails && (
            <div className="event-details-modal" id="eventDetailsModal">
            <div className="modal-container">
                <button onClick={() => closeModal()} className="modal-close-btn">
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
        )}
        </>
    );
}
export default EventsSection;