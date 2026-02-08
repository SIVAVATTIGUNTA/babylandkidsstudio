import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Phone, Youtube, Instagram } from 'lucide-react';
import './Navbar.css';

import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50); // Navbar change on scroll
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    <a href="/" className="logo-link">
                        <img src={logo} alt="Baby Land Kids Studio" className="logo-img" />
                    </a>
                </div>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="/#home" onClick={() => setIsOpen(false)}>Home</a>
                    <a href="/#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="/#themes" onClick={() => setIsOpen(false)}>Themes</a>
                    <a href="/#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
                    <a href="/#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
                    <a href="/#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    <a href="tel:+919393616333" className="mobile-phone-link">
                        <Phone size={18} /> +91 93936 16333
                    </a>
                    <div className="mobile-social-links">
                        <a href="https://instagram.com/babyland_kidsstudio" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Youtube size={20} /></a>
                    </div>
                </div>

                <div className="nav-actions">
                    <div className="desktop-social-links">
                        <a href="https://instagram.com/babyland_kidsstudio" target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={20} /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon"><Youtube size={20} /></a>
                    </div>
                    <a href="tel:+919393616333" className="phone-link">
                        <Phone size={20} /> <span>+91 93936 16333</span>
                    </a>
                    <a href="/#contact" className="btn-primary desktop-btn" style={{ textDecoration: 'none' }}>Book Now</a>
                    <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
