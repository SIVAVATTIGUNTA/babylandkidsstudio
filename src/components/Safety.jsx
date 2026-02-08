import React from 'react';
import { Check, Shield, Award, Sparkles, Smile } from 'lucide-react';
import './Safety.css';

const Safety = () => {
    return (
        <section className="section-padding safety-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="safety-content">
                        <span className="section-label">Safety First</span>
                        <h2 className="section-title">Your Baby's Comfort is Our Priority</h2>
                        <p className="section-description text-left">
                            We understand that safety is the most important factor for parents.
                            Our studio is designed to be a safe haven for your little ones.
                        </p>

                        <div className="safety-grid">
                            <div className="safety-item">
                                <div className="safety-icon-wrapper">
                                    <Shield size={28} />
                                </div>
                                <div className="safety-text">
                                    <h3>Baby-Safe Environment</h3>
                                    <p>Child-proofed studio with padded flooring and safe props.</p>
                                </div>
                            </div>

                            <div className="safety-item">
                                <div className="safety-icon-wrapper">
                                    <Sparkles size={28} />
                                </div>
                                <div className="safety-text">
                                    <h3>Sanitized Props</h3>
                                    <p>All costumes and props are deep-cleaned after every single session.</p>
                                </div>
                            </div>

                            <div className="safety-item">
                                <div className="safety-icon-wrapper">
                                    <Smile size={28} />
                                </div>
                                <div className="safety-text">
                                    <h3>Soft Lighting</h3>
                                    <p>We use diffuse, gentle lighting that is safe for baby's sensitive eyes.</p>
                                </div>
                            </div>

                            <div className="safety-item">
                                <div className="safety-icon-wrapper">
                                    <Award size={28} />
                                </div>
                                <div className="safety-text">
                                    <h3>Experienced Staff</h3>
                                    <p>Our team is trained in newborn handling and soothing techniques.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Safety;
