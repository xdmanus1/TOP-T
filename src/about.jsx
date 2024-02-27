import React from 'react';
import './AboutPage.css';
import testimg4 from './assets/test4.jpg'; // Import the image

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>Rólunk</h1>
            <p>Welcome to our about page! Here you'll learn more about our company.</p>
            <div className="team">
                <div className="team-category">
                    <div className="team-member">
                        <img src={testimg4} alt="Gocsál Mátyás" />
                        <div>
                            <h3>Gocsál Mátyás</h3>
                            <p>CEO, CHRO, Consulting Team Lead, GAML </p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={testimg4} alt="Karsa Hunor Ákos" />
                        <div>
                            <h3>Karsa Hunor Ákos</h3>
                            <p>CEO, CTO, Devolopment Team Lead</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={testimg4} alt="Kovács Gáspár" />
                        <div>
                            <h3>Kovács Gáspár</h3>
                            <p>CEO, CCO, CFO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
