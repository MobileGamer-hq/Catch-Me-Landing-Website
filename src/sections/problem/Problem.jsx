import React from 'react';
import './Problem.css';

function Problem() {
    return (
        <section id="problem" className="problem">
            <h1>The Problem</h1>
            <p>
                Too many games are forgotten, too many stats go unrecorded, and too many athletes
                never get the recognition they deserve. From casual matches to school tournaments,
                the lack of organization means talent is overlooked and moments are lost forever.
            </p>

            <div className="problem-groups">
                <div className="problem-card">
                    <h2>Unorganized Games</h2>
                    <p>
                        Players often struggle to coordinate schedules, track results, or keep a
                        record of performance.
                    </p>
                </div>
                <div className="problem-card">
                    <h2>Lost Stats</h2>
                    <p>
                        Important details like goals, assists, saves, or highlights are forgotten
                        the moment the game ends.
                    </p>
                </div>
                <div className="problem-card">
                    <h2>Limited Exposure</h2>
                    <p>
                        Talented athletes remain unseen by scouts and coaches due to lack of
                        visibility and proper tracking.
                    </p>
                </div>
                <div className="problem-card">
                    <h2>Missed Opportunities</h2>
                    <p>
                        Without a central platform, many athletes miss out on showcasing their full
                        potential to teams, schools, and professional organizations.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Problem;
