import React, {useState} from "react";
import "./Header.css";
import {images, links} from "../../assets/assets.js";
import GetStartedButton from "../../components/GetStartedButton.jsx";
import {Spin as Hamburger} from 'hamburger-react'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className='header-top'>
                {/* Left: Logo + Nav (desktop only) */}
                <div className="header-left">
                    <a href={links.app} id="logo">
                        <img id="logo" alt="Catch Me" src={images.textLogo}/>
                    </a>

                    <nav className="nav desktop-nav">
                        <a href="#hero">Home</a>
                        <a href="#problem">Problem</a>
                        <a href="#features">Features</a>
                        <a href="#audience">Audience</a>
                        <a href="#product">Product</a>
                        <a href="#footer">Contact</a>
                    </nav>
                </div>

                {/* Right: Get Started button (desktop only) */}
                <div className="header-right desktop-only">
                    <GetStartedButton/>
                </div>

                {/* Mobile Menu Toggle */}
                {/*<button*/}
                {/*    */}
                {/*    onClick={() => setMenuOpen(!menuOpen)}*/}
                {/*>*/}
                {/*    */}
                {/*</button>*/}
                <div className="menu-toggle mobile-only">
                    <Hamburger easing="ease-in" size={20} toggled={menuOpen}
                               toggle={setMenuOpen}/>
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
                <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#problem" onClick={() => setMenuOpen(false)}>Problem</a>
                <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
                <a href="#audience" onClick={() => setMenuOpen(false)}>Audience</a>
                <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
                <a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a>
                <GetStartedButton/>
            </nav>
        </header>
    );
}

export default Header;
