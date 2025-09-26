// GetStartedButton.jsx
import React from 'react';
import './Components.css';
import {links} from "../assets/assets.js";

function GetStartedButton({text = 'Get Started'}) {
    return (
        <a className="get-started-button" href={links.app} target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    );
}

export default GetStartedButton;
