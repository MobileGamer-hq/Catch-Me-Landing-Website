import React from 'react';
import './Footer.css';
import {images, links} from "../../assets/assets.js";

function Footer() {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                {/* Logo / Brand */}
                <div className="footer-brand">
                    <a href={links.app} id="footer-logo">
                        <img id="footer-logo" alt="Catch Me" src={images.textLogo} />
                    </a>
                    <p>Where talent meets opportunity.</p>
                </div>

                {/* Navigation */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#audience">Audience</a></li>
                        <li><a href="#problem">Problem</a></li>
                        <li><a href={links.app}>Get Started</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Catch Me. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
