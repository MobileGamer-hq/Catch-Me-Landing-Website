import React from 'react';
import { images } from "../../assets/assets.js";
import './Features.css';

function Features() {
    return (
        <section id="features">
            <div className='feature-container'>
                <div className='features-container-item'>
                    <h2>Player-Centric Application</h2>
                    <p>
                        Our platform is designed with the player at the core. From profiles to
                        highlights, everything is built to put athletes in the spotlight.
                        Whether you’re a rising star or already making waves, you’ll have the
                        tools to showcase your talent and gain the recognition you deserve.
                    </p>
                </div>
                <div className='features-container-item'>
                    <img className='feature-image' src={images.socials} alt='Socials'/>
                </div>
            </div>

            <div className='feature-container'>
                <div className='features-container-item'>
                    <img className='feature-image' src={images.schedule} alt='Schedule'/>
                </div>
                <div className='features-container-item'>
                    <h2>Organize, Compete & Compare</h2>
                    <p>
                        Catch Me was built to simplify how sports are played, organized, and remembered.
                        Every game matters and with our platform, no match goes unsaved.
                        From pickup games to competitive matches, results and highlights are recorded in real time,
                        ensuring every performance counts. Track your progress against friends, teammates, and athletes
                        worldwide with live leaderboards and rankings. Set goals, see where you stand, and push yourself
                        to outperform your last game. Competition fuels growth — and we make it simple, fun, and engaging.
                    </p>

                </div>
            </div>

            <div className='feature-container'>
                <div className='features-container-item'>
                    <h2>Track Your Performance</h2>
                    <p>
                        Log your stats after every game and get instant insights into your
                        strengths and areas for improvement. From scoring trends to defensive
                        contributions, our analytics break down your performance so you can
                        focus on what matters: getting better every single day.
                    </p>
                </div>
                <div className='features-container-item'>
                    <img className='feature-image' src={images.stats_all} alt='Stats'/>
                </div>
            </div>

            <div className='feature-container'>
                <div className='features-container-item'>
                    <img className='feature-image' src={images.game} alt='Game'/>
                </div>
                <div className='features-container-item'>
                    <h2>Every Highlight Matters</h2>
                    <p>
                        In sports, no moment is too small to matter. Every dunk, shot, miss, foul, save,
                        and block deserves to be seen. With Catch Me, you can share the action in real-time,
                        connect with teammates, rivals, and fans, and make sure the game lives beyond the
                        final whistle. Join a community that values every highlight as much as you do.
                    </p>

                </div>
            </div>

            <div className='feature-container'>
                <div className='features-container-item'>
                    <h2>Showcase Yourself</h2>
                    <p>
                        Create a profile that truly represents who you are as an athlete.
                        Share highlights, stats, and achievements to capture the attention
                        of scouts, coaches, and fans. Your journey deserves to be seen, and
                        we give you the stage to show the world your growth and potential.
                    </p>
                </div>
                <div className='features-container-item'>
                    <img className='feature-image' src={images.social_2} alt='Profile'/>
                </div>
            </div>
        </section>
    );
}

export default Features;
