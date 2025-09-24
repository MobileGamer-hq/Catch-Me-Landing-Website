import React from 'react';
import './Hero.css'
import GetStartedButton from "../../components/GetStartedButton.jsx";
import {images} from "../../assets/assets.js";

function Hero() {
    return (
        <section className="hero" id="hero">

            <div className="hero-body">
                <h1>Where Talent Meets Opportunity</h1>
                <p>
                    Catch Me is the all-in-one platform for athletes to showcase their skills,
                    track performance, and get noticed by scouts, coaches, and fans.
                    Every game counts and we make sure it’s seen.
                </p>

                <div className="hero-buttons">
                    <GetStartedButton />
                </div>
            </div>
            <div id='gap' />
            <div className ="hero_img_container">
                <img className='hero-img' src={images.main_profile}/>
            </div>
        </section>
    );
}

export default Hero;