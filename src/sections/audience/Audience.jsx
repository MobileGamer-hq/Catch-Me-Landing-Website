import React from 'react';
import './Audience.css';

function Audience() {
    return (
        <section id="audience" className="audience">
            <h1>Join a Growing Community</h1>
            <p>
                Catch Me is built for everyone who lives and breathes sports.
                Whether you’re chasing your first big break, building a team, or scouting the next star,
                our platform connects you to the moments that matter most.
            </p>

            <div className="audience-groups">
                <div className="audience-card">
                    <h2>Athletes</h2>
                    <p>
                        Showcase your highlights, track your stats, and prove yourself on the leaderboards.
                        Every game becomes a chance to get noticed.
                    </p>
                </div>
                <div className="audience-card">
                    <h2>Coaches & Teams</h2>
                    <p>
                        Organize games, monitor player progress, and motivate your squad with real-time insights.
                        Turn raw talent into unstoppable performance.
                    </p>
                </div>
                <div className="audience-card">
                    <h2>Scouts</h2>
                    <p>
                        Discover hidden talent faster than ever.
                        From game highlights to player stats, Catch Me gives you the full picture.
                    </p>
                </div>
                <div className="audience-card">
                    <h2>Fans</h2>
                    <p>
                        Celebrate every dunk, save, and highlight.
                        Follow your favorite players and be part of their journey from day one.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Audience;
