import React, { useState, useEffect } from 'react';
import './Hero.css';

// Import generated slider images
import slider1 from '../assets/slider_baby_1.png';
import slider2 from '../assets/slider_baby_2.png';
import slider3 from '../assets/slider_baby_3.png';
import slider4 from '../assets/slider_baby_4.png';

const sliderImages = [
    {
        id: 1,
        image: slider1,
        caption: "Pure Joy & Smiles"
    },
    {
        id: 2,
        image: slider2,
        caption: "Dreamy Clouds"
    },
    {
        id: 3,
        image: slider3,
        caption: "Playful Moments"
    },
    {
        id: 4,
        image: slider4,
        caption: "Fairy Garden Magic"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % sliderImages.length);
        }, 3500); // Smooth auto-scroll every 3.5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge">Award-Winning Studio</span>
                    <h1 className="hero-title">
                        Magical Memories for <br />
                        <span className="highlight">Your Little One</span>
                    </h1>
                    <p className="hero-subtitle">
                        Premium Indoor Themed Baby Photoshoots | 0–2 Years.
                        We create safe, hygienic, and joyful experiences for your baby.
                    </p>
                    <div className="hero-actions">
                        <a href="/#themes" className="btn-primary">View Themes</a>
                        <a href="/#contact" className="btn-secondary">Book a Shoot</a>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">500+</span>
                            <span className="stat-label">Happy Families</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">4.9</span>
                            <span className="stat-label">Rating</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    {/* Auto Image Slider - Smooth & Clean */}
                    <div className="hero-slider">
                        {sliderImages.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`slide ${index === currentSlide ? 'active' : ''}`}
                            >
                                <img src={slide.image} alt={slide.caption} className="slide-image" />
                                <div className="slide-overlay">
                                    {/* <span className="slide-caption">{slide.caption}</span> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
