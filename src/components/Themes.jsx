import React from 'react';
import { Cloud, Crown, Gift, Heart, Mountain, Star, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Themes.css';

const themesData = [
    {
        id: "fairy-garden",
        title: "Fairy Garden Theme",
        description: "A magical setup with oversized flowers, butterflies, and soft green moss, perfect for your little fairy.",
        icon: <Heart size={32} color="white" />,
        color: "#4CAF50",
        gradient: "linear-gradient(135deg, #FFCE1B, #4CAF50)"
    },
    {
        id: "cloud-sky",
        title: "Cloud & Sky Theme",
        description: "Float among the fluffy clouds and twinkling stars in this dreamy, soft blue heavenly setup.",
        icon: <Cloud size={32} color="white" />,
        color: "#00B3FF",
        gradient: "linear-gradient(135deg, #00B3FF, #4CAF50)"
    },
    {
        id: "balloon-dream",
        title: "Balloon Dream Theme",
        description: "Pop of colors with hundreds of pastel balloons creating a joyful and floating atmosphere.",
        icon: <Gift size={32} color="white" />,
        color: "#8A2BE2",
        gradient: "linear-gradient(135deg, #8A2BE2, #FF3FA4)"
    },
    {
        id: "princess",
        title: "Princess Theme",
        description: "Royal carriage, tiaras, and castle backdrops for your beautiful little princess.",
        icon: <Crown size={32} color="white" />,
        color: "#FF3FA4",
        gradient: "linear-gradient(135deg, #FF3FA4, #FFCE1B)"
    },
    {
        id: "superhero",
        title: "Superhero Theme",
        description: "City skylines and capes! Let your little hero save the day in this action-packed fun theme.",
        icon: <Star size={32} color="white" />,
        color: "#FF6B2B",
        gradient: "linear-gradient(135deg, #FF6B2B, #FFCE1B)"
    },
    {
        id: "forest-animals",
        title: "Forest Animals Theme",
        description: "Woodland wonder with rustic props, soft greenery, and cute animal friends.",
        icon: <Trees size={32} color="white" />,
        color: "#2E7D32",
        gradient: "linear-gradient(135deg, #2E7D32, #4CAF50)"
    },
    {
        id: "birthday",
        title: "Birthday Theme",
        description: "Celebrate the big milestone with cakes, confetti, and festive decor customized to your taste.",
        icon: <Gift size={32} color="white" />,
        color: "#FFCE1B",
        gradient: "linear-gradient(135deg, #FFCE1B, #FF6B2B)"
    }
];

const Themes = () => {
    return (
        <section className="section-padding themes-section" id="themes">
            <div className="container">
                <div className="text-center">
                    <span className="section-label">Magical Sets</span>
                    <h2 className="section-title">Indoor Themed Photoshoots</h2>
                    <p className="section-description">
                        Choose from our handcrafted magical worlds. Each theme is designed with premium props
                        and safety in mind to create the perfect backdrop for your baby.
                    </p>
                </div>

                <div className="themes-grid">
                    {themesData.map((theme, index) => (
                        <div className="theme-card" key={index}>
                            <div className="theme-image-placeholder" style={{ background: theme.gradient }}>
                                <div className="theme-card-icon-wrapper">
                                    {theme.icon}
                                </div>
                            </div>
                            <div className="theme-content">
                                <h3 className="theme-title">{theme.title}</h3>
                                <p className="theme-description">{theme.description}</p>
                                <Link to={`/themes/${theme.id}`} className="theme-btn" style={{ color: theme.color }}>
                                    See More Photos
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Themes;
