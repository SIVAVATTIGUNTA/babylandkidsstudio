import React from 'react';
import { MessageCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section-padding contact-section" id="contact">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-label">Book Your Session</span>
                    <h2 className="section-title">Reserve Your Kids Photography Session Today</h2>
                    <p className="section-description">
                        Ready to create magic? Fill out the form or reach us via WhatsApp!
                    </p>
                </div>

                <div className="contact-grid">
                    {/* Left Column: Form */}
                    <div className="contact-form-wrapper">
                        <h3 className="form-title">Send Us a Message</h3>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="parentName">Parent's Full Name</label>
                                <input type="text" id="parentName" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="form-group two-col">
                                <div>
                                    <label htmlFor="babyAge">Baby's Age</label>
                                    <input type="text" id="babyAge" className="form-control" placeholder="e.g. 6 Months" required />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" id="phone" className="form-control" placeholder="+1234567890" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="theme">Preferred Theme</label>
                                <select id="theme" className="form-select">
                                    <option>Select a Theme</option>
                                    <option>Fairy Garden</option>
                                    <option>Cloud & Sky</option>
                                    <option>Balloon Dream</option>
                                    <option>Princess</option>
                                    <option>Superhero</option>
                                    <option>Forest Animals</option>
                                    <option>Birthday / Cake Smash</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="date">Preferred Date</label>
                                <input type="date" id="date" className="form-control" />
                            </div>
                            <button type="submit" className="btn-primary w-100">Book Now</button>
                        </form>
                    </div>

                    {/* Right Column: Info & Map */}
                    <div className="contact-info-wrapper">
                        <div className="info-card">
                            <h3>Contact Info</h3>
                            <ul className="info-list">
                                <li><Phone size={20} className="icon" /> <span>+91 9393616333 / 7672044569</span></li>
                                <li><Mail size={20} className="icon" /> <span>babyland@kidsstudio.com</span></li>
                                <li><Clock size={20} className="icon" /> <span>Mon - Sat: 9:00 AM - 6:00 PM</span></li>
                                <li><MapPin size={20} className="icon" /> <span>Babyland Studio, Main Road, City</span></li>
                            </ul>

                            <a href="https://wa.me/919393616333" target="_blank" className="btn-whatsapp">
                                <MessageCircle size={24} /> Chat on WhatsApp
                            </a>
                        </div>

                        <div className="map-placeholder">
                            <div className="map-overlay">
                                <MapPin size={48} color="var(--accent-rose)" />
                                <p>Google Map Placeholder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
