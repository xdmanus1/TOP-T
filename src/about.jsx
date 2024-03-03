import React from 'react';
import './AboutPage.css';
import mpfp from './assets/mpfp.jpg'; // Import the image
import hpfp from './assets/hpfp.png'; // Import the image
import gpfp from './assets/test4.jpg'; // Import the image

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>Rólunk</h1>
            <p></p>
            <div className="team">
                <div className="team-category">
                    <div className="team-member">
                        <img src={mpfp} alt="Gocsál Mátyás" />
                        <div>
                            <h3>Gocsál Mátyás</h3>
                            <p>CEO, CHRO, Consulting Team Lead, GAML </p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={hpfp} alt="Karsa Hunor Ákos" />
                        <div>
                            <h3>Karsa Hunor Ákos</h3>
                            <p>CEO, CTO, Devolopment Team Lead</p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src={gpfp} alt="Kovács Gáspár" />
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
