import React from 'react';
import './Rebranding.css';

const Rebranding = () => {
    return (
        <div className="rebranding-container">
            {/* Animated Background */}
            <div className="rebranding-bg">
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="grid-overlay"></div>
                <div className="noise-overlay"></div>
            </div>

            {/* Floating Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>

            {/* Main Card */}
            <div className="rebranding-card">
                <div className="card-glow"></div>
                <div className="card-border"></div>

                <div className="card-content">
                    {/* Logo */}
                    <div className="logo-wrapper">
                        <img
                            src="/logo.png"
                            alt="WorthyTen Logo"
                            className="rebranding-logo"
                        />
                    </div>

                    {/* Premium Badge */}
                    <div className="premium-badge">
                        <span className="badge-dot"></span>
                        <span>Coming Soon</span>
                    </div>

                    {/* Title with stagger animation */}
                    <h1 className="rebranding-title">
                        <span className="title-word">We</span>
                        <span className="title-word">Are</span>
                        <span className="title-word highlight">Evolving</span>
                    </h1>

                    <p className="rebranding-description">
                        WorthyTen is undergoing a major transformation to bring you a smarter, faster, and more premium experience. We'll be back shortly.
                    </p>

                    {/* Contact Section */}
                    <div className="contact-section">
                        <p className="contact-title">
                            Want to buy or sell gadgets? <span>Contact us:</span>
                        </p>
                        <div className="contact-grid">
                            <a href="tel:+919843010705" className="contact-card">
                                <div className="card-shine"></div>
                                <span className="contact-icon">📍</span>
                                <span className="contact-city">Coimbatore</span>
                                <span className="contact-phone">98430 10705</span>
                            </a>
                            <a href="tel:+919843010774" className="contact-card">
                                <div className="card-shine"></div>
                                <span className="contact-icon">📍</span>
                                <span className="contact-city">Tiruchirappalli</span>
                                <span className="contact-phone">98430 10774</span>
                            </a>
                            <a href="tel:+919843010781" className="contact-card">
                                <div className="card-shine"></div>
                                <span className="contact-icon">📍</span>
                                <span className="contact-city">Madurai</span>
                                <span className="contact-phone">98430 10781</span>
                            </a>
                            <a href="tel:+919843010716" className="contact-card">
                                <div className="card-shine"></div>
                                <span className="contact-icon">📍</span>
                                <span className="contact-city">Chennai</span>
                                <span className="contact-phone">98430 10716</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rebranding;
