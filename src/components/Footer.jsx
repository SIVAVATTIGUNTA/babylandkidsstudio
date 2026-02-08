import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <div className="footer-brand">Baby Land Studio</div>
                        <p className="footer-description">
                            Professional kids photography studio specializing in newborn, baby, and toddler photo shoots.
                            Creating magical memories with beautiful pastel-themed sessions since 2015.
                        </p>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Facebook size={20} /></a>
                            <a href="https://instagram.com/babyland_kidsstudio" target="_blank" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#themes">Themes</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#about">About Us</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Photography Services</h4>
                        <ul className="footer-links">
                            <li><a href="#themes">Newborn Photography</a></li>
                            <li><a href="#themes">Baby Photo Shoots</a></li>
                            <li><a href="#themes">Toddler Sessions</a></li>
                            <li><a href="#themes">Kids Photography</a></li>
                            <li><a href="#themes">Birthday Photoshoots</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-title">Contact Info</h4>
                        <ul className="footer-links contact-links">
                            <li><a href="tel:+919393616333">📞 +91 93936 16333</a></li>
                            <li><a href="mailto:babyland@kidsstudio.com">✉️ babyland@kidsstudio.com</a></li>
                            <li><span>📍 Babyland Studio, Main Road<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;City</span></li>
                            <li><span>🕒 Mon-Sat: 9 AM - 6 PM</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Baby Land Kids Studio. All Rights Reserved. Professional Kids Photography | Newborn & Toddler Photo Shoots</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
