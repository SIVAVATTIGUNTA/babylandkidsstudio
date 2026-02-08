import React from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="section-padding bg-white" id="testimonials">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">What Parents Say About Us</h2>
                    <p className="section-description">
                        Real experiences from families who trust us with their most precious memories
                    </p>
                </div>

                <div className="testimonials-grid">
                    {/* Testimonial 1 */}
                    <div className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />)}
                        </div>
                        <p className="testimonial-text">
                            "Absolutely the best kids photography studio! They were so patient with our 6-month-old Emma.
                            The newborn photo shoot was magical, and the photos came out stunning. We'll treasure these
                            baby pictures forever. Highly recommend for anyone looking for professional newborn photography!"
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar" style={{ background: 'linear-gradient(135deg, var(--secondary-sky), var(--primary-mint))' }}>S</div>
                            <div>
                                <div className="author-name">Sarah Johnson</div>
                                <div className="author-role">Mother of Emma, 6 months</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />)}
                        </div>
                        <p className="testimonial-text">
                            "The themed birthday photoshoot for Leo's first birthday was incredible! The cake smash session
                            was so much fun and they captured every precious moment. The quality of the kids photography is
                            exceptional. Best baby photo shoot studio in town - worth every penny!"
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar" style={{ background: 'linear-gradient(135deg, var(--primary-pink), var(--primary-peach))' }}>M</div>
                            <div>
                                <div className="author-name">Michael Chen</div>
                                <div className="author-role">Father of Leo, 1 year</div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="testimonial-card">
                        <div className="quote-icon">"</div>
                        <div className="stars">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />)}
                        </div>
                        <p className="testimonial-text">
                            "We've been coming here since Aria was a newborn, and now she's 18 months! Every toddler photography
                            session has been amazing. The staff knows exactly how to work with kids and make them comfortable.
                            The outdoor photo shoot was beautiful. Thank you for preserving our baby's precious moments!"
                        </p>
                        <div className="testimonial-author">
                            <div className="author-avatar" style={{ background: 'linear-gradient(135deg, var(--primary-lavender), var(--secondary-lemon))' }}>P</div>
                            <div>
                                <div className="author-name">Priya Sharma</div>
                                <div className="author-role">Mother of Aria, 18 months</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
