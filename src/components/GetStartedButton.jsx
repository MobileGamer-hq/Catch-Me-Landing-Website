// GetStartedButton.jsx
import React from 'react';
import './Components.css';

function GetStartedButton({ text = "Get Started", href }) {
    return (
        <a className="get-started-button" href={href} target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    );
}

export default GetStartedButton;
