import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    return (
        <section className="section-padding pricing-section" id="pricing">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-label">Exclusive 3D Studio • 30+ Themes</span>
                    <h2 className="section-title">Studio with Photography Packages</h2>
                    <p className="section-description">
                        Professional themed photography for your little ones.
                        Choose from our carefully crafted packages designed for every milestone.
                    </p>
                </div>

                <div className="pricing-grid">
                    {/* Silver Package */}
                    <div className="pricing-card">
                        <h3 className="pricing-title">Silver</h3>
                        <p className="pricing-age">2 Hour Duration</p>
                        <div className="pricing-price">₹13,000</div>
                        <p className="pricing-period">Prices Negotiable</p>
                        <ul className="pricing-features">
                            <li><Check size={18} /> Unlimited Themes</li>
                            <li><Check size={18} /> Candid Photographer</li>
                            <li><Check size={18} /> Candid Videographer</li>
                            <li><Check size={18} /> <strong>25</strong> Edited Photos</li>
                            <li><Check size={18} /> 1-2 Mins Teaser</li>
                            <li><Check size={18} /> Complimentary Costumes & Room</li>
                        </ul>
                        <div className="pricing-btn-container">
                            <a href="#contact" className="btn-primary pricing-btn">Choose Silver</a>
                        </div>
                    </div>

                    {/* Gold Package - Featured */}
                    <div className="pricing-card featured">
                        <div className="pricing-badge">Most Popular</div>
                        <h3 className="pricing-title">Gold</h3>
                        <p className="pricing-age">3 Hour Duration</p>
                        <div className="pricing-price">₹17,000</div>
                        <p className="pricing-period">Prices Negotiable</p>
                        <ul className="pricing-features">
                            <li><Check size={18} /> Unlimited Themes</li>
                            <li><Check size={18} /> Candid Photographer</li>
                            <li><Check size={18} /> Candid Videographer</li>
                            <li><Check size={18} /> <strong>35</strong> Edited Photos</li>
                            <li><Check size={18} /> 2-3 Mins Teaser</li>
                            <li><Check size={18} /> Complimentary Costumes & Room</li>
                        </ul>
                        <div className="pricing-btn-container">
                            <a href="#contact" className="btn-primary pricing-btn">Choose Gold</a>
                        </div>
                    </div>

                    {/* Platinum Package */}
                    <div className="pricing-card">
                        <h3 className="pricing-title">Platinum</h3>
                        <p className="pricing-age">4 Hour Duration</p>
                        <div className="pricing-price">₹23,000</div>
                        <p className="pricing-period">Prices Negotiable</p>
                        <ul className="pricing-features">
                            <li><Check size={18} /> Unlimited Themes</li>
                            <li><Check size={18} /> Candid Photographer</li>
                            <li><Check size={18} /> Candid Videographer</li>
                            <li><Check size={18} /> <strong>35</strong> Edited Photos</li>
                            <li><Check size={18} /> 3-4 Mins Teaser</li>
                            <li><Check size={18} /> 18x12 Frame & 10 Sheet Album</li>
                            <li><Check size={18} /> Complimentary Costumes & Room</li>
                        </ul>
                        <div className="pricing-btn-container">
                            <a href="#contact" className="btn-primary pricing-btn">Choose Platinum</a>
                        </div>
                    </div>
                </div>

                <div className="pricing-notes mt-5 text-center" style={{ color: 'var(--text-secondary)', fontWeight: 600, marginTop: '60px' }}>
                    <p style={{ marginBottom: '8px' }}>* Raw Data is copied on the day of the shoot itself.</p>
                    <p style={{ marginBottom: '8px' }}>* Payment Should be Cleared on or Before shoot.</p>
                    <p>* Costumes to Kids (Under 3 years) and Room complimentary.</p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
