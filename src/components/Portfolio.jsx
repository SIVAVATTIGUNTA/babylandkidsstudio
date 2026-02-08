import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';
import './Portfolio.css';

const portfolioItems = [
    { icon: "📸", color: "linear-gradient(135deg, var(--primary-pink), var(--primary-peach))" },
    { icon: "👶", color: "linear-gradient(135deg, var(--secondary-sky), var(--primary-mint))" },
    { icon: "🎈", color: "linear-gradient(135deg, var(--primary-lavender), var(--secondary-lemon))" },
    { icon: "🌸", color: "linear-gradient(135deg, var(--primary-mint), var(--secondary-sky))" },
    { icon: "⭐", color: "linear-gradient(135deg, var(--primary-peach), var(--primary-pink))" },
    { icon: "🎨", color: "linear-gradient(135deg, var(--secondary-lemon), var(--primary-lavender))" },
    { icon: "🎂", color: "linear-gradient(135deg, var(--secondary-coral), var(--primary-peach))" },
    { icon: "🌈", color: "linear-gradient(135deg, var(--accent-teal), var(--primary-mint))" },
    { icon: "🧸", color: "linear-gradient(135deg, var(--accent-purple), var(--primary-lavender))" },
    { icon: "💝", color: "linear-gradient(135deg, var(--accent-gold), var(--secondary-lemon))" },
    { icon: "🦋", color: "linear-gradient(135deg, var(--accent-rose), var(--secondary-coral))" },
    { icon: "🌟", color: "linear-gradient(135deg, var(--secondary-sage), var(--primary-mint))" },
];

const Portfolio = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <section className="section-padding" id="portfolio">
            <div className="container">
                <div className="text-center mb-5">
                    <span className="section-label">Portfolio</span>
                    <h2 className="section-title">Our Best Kids Photography Work</h2>
                    <p className="section-description">
                        Browse our collection of beautiful baby and toddler photography.
                        Each image tells a unique story of childhood wonder and joy.
                    </p>
                </div>

                <div className="gallery-grid">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="gallery-item"
                            style={{ background: item.color }}
                            onClick={() => setSelectedItem(item)}
                        >
                            <div className="gallery-placeholder">{item.icon}</div>
                            <div className="gallery-overlay">
                                <Eye size={48} color="white" />
                            </div>
                        </div>
                    ))}
                </div>

                {selectedItem && (
                    <div className="lightbox" onClick={() => setSelectedItem(null)}>
                        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                            <button className="lightbox-close" onClick={() => setSelectedItem(null)}>
                                <X size={32} />
                            </button>
                            <div className="lightbox-image-placeholder" style={{ background: selectedItem.color }}>
                                {selectedItem.icon}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portfolio;
