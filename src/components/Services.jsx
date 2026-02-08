import React from 'react';
import { Star, Heart, Cake, Camera, Users, Home } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        icon: <Star size={32} color="var(--white)" />,
        title: "Newborn Photography",
        description: "Capture the earliest days of life with gentle, cozy setups. We ensure a safe and serene environment for your newborn's first portraits.",
        color: "var(--primary-pink)"
    },
    {
        icon: <Heart size={32} color="var(--white)" />,
        title: "Maternity Shoots",
        description: "Celebrate motherhood with elegant, glowing portraits. We create dreamy setups that capture the beauty of your journey.",
        color: "var(--primary-peach)"
    },
    {
        icon: <Cake size={32} color="var(--white)" />,
        title: "Pre-Birthday & Cake Smash",
        description: "Fun-filled themed sessions to celebrate your baby's milestone before the big day. Let them dive into cake and laughter while we capture the joy!",
        color: "var(--primary-mint)"
    },
    {
        icon: <Camera size={32} color="var(--white)" />,
        title: "Themed Kids Photography",
        description: "From superheroes to fairy tales, we bring your child's imagination to life. Custom backgrounds and props make every session magical.",
        color: "var(--secondary-sky)"
    },
    {
        icon: <Users size={32} color="var(--white)" />,
        title: "Family Portraits",
        description: "Timeless memories with the whole family in artistic frames. Perfectly lit and beautifully posed moments that you'll cherish forever.",
        color: "var(--secondary-lemon)"
    },
    {
        icon: <Home size={32} color="var(--white)" />,
        title: "Baby Studio Space Rental",
        description: "It's clear, friendly, and fits perfectly with the tone of your kids studio brand. It tells parents exactly what they're getting while sounding warm and welcoming.",
        color: "var(--primary-lavender)"
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">SERVICES</h2>
                    <div className="title-underline"></div>
                    <p className="section-subtitle">From baby bumps to cake smashes - we capture it all.</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon-wrapper" style={{ background: service.color }}>
                                {service.icon}
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
