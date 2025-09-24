// GetStartedButton.jsx
import React from 'react';
import './Components.css';
import {links} from "../assets/assets.js";

function GetStartedButton() {
    return (
        <a className="get-started-button" href={links.app} target="_blank" rel="noopener noreferrer">
            Get Started
        </a>
    );
}

export default GetStartedButton;
