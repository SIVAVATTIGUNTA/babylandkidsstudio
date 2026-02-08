import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Cloud, Crown, Gift, Heart, Star, Trees, ArrowLeft, Camera, Sparkles } from 'lucide-react';
import './ThemeDetails.css';

const themesData = {
    "fairy-garden": {
        title: "Fairy Garden Theme",
        description: "Step into a magical woodland filled with oversized flowers, fluttering butterflies, and soft green moss. This theme creates an enchanting atmosphere where your little one creates their own fairytale. Perfect for capturing the innocence and wonder of childhood.",
        icon: <Heart size={48} color="white" />,
        color: "#4CAF50",
        gradient: "linear-gradient(135deg, #FFCE1B, #4CAF50)",
        gallery: ["🌸", "🧚‍♀️", "🍄", "✨", "🌿", "🦋"],
        bts: ["🎬", "💡", "🎥"]
    },
    "cloud-sky": {
        title: "Cloud & Sky Theme",
        description: "Float among the fluffy clouds and twinkling stars in this dreamy, soft blue heavenly setup. We use cotton-soft props and gentle blue lighting to create a serene 'head in the clouds' feeling.",
        icon: <Cloud size={48} color="white" />,
        color: "#00B3FF",
        gradient: "linear-gradient(135deg, #00B3FF, #4CAF50)",
        gallery: ["☁️", "⭐", "🌙", "🌤️", "🪁", "🐦"],
        bts: ["📽️", "🏗️", "🎞️"]
    },
    "balloon-dream": {
        title: "Balloon Dream Theme",
        description: "A pop of joy! Hundreds of pastel balloons create a floating, festive atmosphere. This theme is vibrant, fun, and perfect for celebrating milestones with a burst of color.",
        icon: <Gift size={48} color="white" />,
        color: "#8A2BE2",
        gradient: "linear-gradient(135deg, #8A2BE2, #FF3FA4)",
        gallery: ["🎈", "🎀", "🎁", "🎡", "🍬", "🍭"],
        bts: ["🎉", "🎨", "🧵"]
    },
    "princess": {
        title: "Princess Theme",
        description: "A royal setup for your little highness. Featuring a miniature castle, shimmering tiaras, and elegant drapes. We treat every baby like royalty in this classic, sophisticated theme.",
        icon: <Crown size={48} color="white" />,
        color: "#FF3FA4",
        gradient: "linear-gradient(135deg, #FF3FA4, #FFCE1B)",
        gallery: ["👑", "🏰", "👗", "💍", "👠", "🎭"],
        bts: ["💄", "📸", "👸"]
    },
    "superhero": {
        title: "Superhero Theme",
        description: "It's a bird... it's a plane... it's your baby! With a cityscape backdrop and cute capes, this theme is action-packed fun. Let your little hero save the day in style.",
        icon: <Star size={48} color="white" />,
        color: "#FF6B2B",
        gradient: "linear-gradient(135deg, #FF6B2B, #FFCE1B)",
        gallery: ["🦸", "⚡", "🏙️", "💥", "🕶️", "🧥"],
        bts: ["🪜", "🔌", "🔦"]
    },
    "forest-animals": {
        title: "Forest Animals Theme",
        description: "A rustic wonderland with wood textures, soft greenery, and adorable animal friends. Foxes, bears, and bunnies join your baby for a cozy, nature-inspired session.",
        icon: <Trees size={48} color="white" />,
        color: "#2E7D32",
        gradient: "linear-gradient(135deg, #2E7D32, #4CAF50)",
        gallery: ["🦊", "🐻", "🐰", "🌲", "🪵", "🌰"],
        bts: ["🐾", "🦗", "🕷️"]
    },
    "birthday": {
        title: "Birthday Theme",
        description: "The big ONE (or two)! We go all out with custom banners, cakes, and confetti. This festive setup is tailored to your color preferences to mark the special milestone.",
        icon: <Gift size={48} color="white" />,
        color: "#FFCE1B",
        gradient: "linear-gradient(135deg, #FFCE1B, #FF6B2B)",
        gallery: ["🎂", "🕯️", "🥳", "🧁", "🍩", "🥤"],
        bts: ["🎊", "🎻", "🎹"]
    }
};

const ThemeDetails = () => {
    const { id } = useParams();
    const theme = themesData[id];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!theme) {
        return (
            <div className="theme-error">
                <Navbar />
                <div className="container text-center" style={{ padding: '150px 0' }}>
                    <h2 className="section-title">Theme Not Found</h2>
                    <Link to="/" className="btn-primary">Return Home</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="theme-details-page">
            <Navbar />

            {/* Hero Header */}
            <header className="theme-header" style={{ background: theme.gradient }}>
                <div className="container hero-container-simple">
                    <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Home</Link>
                    <div className="theme-header-content">
                        <div className="theme-big-icon">{theme.icon}</div>
                        <h1>{theme.title}</h1>
                    </div>
                </div>
            </header>

            <main className="container section-padding">
                {/* Description Section */}
                <section className="theme-info-section mb-60">
                    <div className="text-center">
                        <span className="section-label">Theme Overview</span>
                        <h2 className="section-title">About This Theme</h2>
                        <p className="lead-text">{theme.description}</p>
                    </div>
                </section>

                {/* Realtime / Behind the Scenes */}
                <section className="theme-bts-section mb-60">
                    <div className="text-center mb-40">
                        <span className="section-label">Behind The Scenes</span>
                        <h3 className="section-title">Setup & Real-time</h3>
                        <p className="section-description">A glimpse into how we create the magic.</p>
                    </div>
                    <div className="bts-grid">
                        {theme.bts.map((emoji, idx) => (
                            <div key={idx} className="bts-card">
                                <div className="bts-placeholder">{emoji}</div>
                                <div className="bts-label"><Sparkles size={16} /> Making Magic</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="theme-gallery-section mb-60">
                    <div className="text-center mb-40">
                        <span className="section-label">The Result</span>
                        <h3 className="section-title">Captured Moments</h3>
                        <p className="section-description">Beautiful memories created in this theme.</p>
                    </div>
                    <div className="theme-gallery-grid">
                        {theme.gallery.map((emoji, idx) => (
                            <div key={idx} className="theme-gallery-item">
                                <div className="gallery-placeholder" style={{ fontSize: '4rem' }}>{emoji}</div>
                                <div className="hover-cam"><Camera size={32} color="white" /></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="theme-cta text-center">
                    <div className="cta-box" style={{ borderColor: theme.color }}>
                        <h3 className="section-title" style={{ fontSize: '2rem' }}>Love the {theme.title}?</h3>
                        <p className="section-description" style={{ marginBottom: '30px' }}>Book this specific theme for your little one's session today!</p>
                        <Link to="/#contact" className="btn-primary">Book Now</Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ThemeDetails;
