import React, { useState } from "react";
import "./Header.css";
import { images, links } from "../../assets/assets.js";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <a href={links.app} id="logo">
                <img id="logo" alt="Catch Me" src={images.textLogo} />
            </a>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#problem" onClick={() => setMenuOpen(false)}>Problem</a>
                <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
                <a href="#audience" onClick={() => setMenuOpen(false)}>Audience</a>
                <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
                <a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
