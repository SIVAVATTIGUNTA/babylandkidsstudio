import React from 'react';
import './About.css';
import aboutImg from '../assets/about_studio.png';

const About = () => {
    return (
        <section className="section-padding about-section" id="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image-col">
                        <div className="about-image">
                            <img src={aboutImg} alt="Baby Land Studio" />
                        </div>
                    </div>
                    <div className="about-content-col">
                        <span className="section-label">About Us</span>
                        <h2 className="section-title mb-4">The Best Kids Photography Studio Since 2015</h2>
                        <p className="mb-4">
                            Welcome to Baby Land Studio, the premier kids photography studio specializing in newborn, baby,
                            and toddler photo shoots. Since 2015, we've been preserving precious childhood memories for
                            families across the city.
                        </p>
                        <p className="mb-4">
                            Our award-winning team of professional children's photographers creates a fun, comfortable
                            environment where your little ones can be themselves. We specialize in newborn photography, baby photo
                            shoots, and toddler sessions with beautiful pastel themes and natural lighting.
                        </p>
                        <p className="mb-5">
                            From indoor studio sessions with soft props to outdoor kids photography in scenic locations,
                            we capture authentic moments that showcase your child's unique personality. Every baby photo shoot
                            is tailored to your vision, creating timeless images you'll cherish forever.
                        </p>

                        <div className="stats-row">
                            <div className="stat-box">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Happy Families</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">5k+</div>
                                <div className="stat-label">Photos Captured</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-number">8+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
