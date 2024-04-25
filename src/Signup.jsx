import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './Signup.css'; // Import CSS file for styling

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');
    const [education, setEducation] = useState('');
    const [portfolioURL, setPortfolioURL] = useState('');
    const [skills, setSkills] = useState('');
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);

    useEffect(() => {
        const lastSubmissionTimestamp = localStorage.getItem('lastSubmissionTimestamp');
        if (lastSubmissionTimestamp) {
            const lastSubmissionDate = new Date(parseInt(lastSubmissionTimestamp));
            const nextSubmissionDate = new Date(lastSubmissionDate.getTime() + 2 * 1000); // Set for testing purposes
            const currentTime = new Date();
            const timeDiff = nextSubmissionDate.getTime() - currentTime.getTime();
            if (timeDiff > 0) {
                setRemainingTime(timeDiff);
                const timer = setInterval(() => {
                    setRemainingTime(prevTime => prevTime - 1000);
                }, 1000);
                return () => clearInterval(timer);
            }
        }
        setRemainingTime(0);
    }, []);

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);
            // Check if it's been less than 24 hours since the last submission
            const lastSubmissionTimestamp = localStorage.getItem('lastSubmissionTimestamp');
            if (lastSubmissionTimestamp) {
                const lastSubmissionDate = new Date(parseInt(lastSubmissionTimestamp));
                const currentDate = new Date();
                const timeDiff = currentDate.getTime() - lastSubmissionDate.getTime();
                const hoursDiff = timeDiff / (1000 * 3600);
                if (hoursDiff < 24) {
                    throw new Error('Az űrlapot csak egyszer lehet benyújtani naponta.');
                }
            }

            // Save form data to Firestore
            await firebase.firestore().collection('jelent').add({
                email,
                firstName,
                lastName,
                phone,
                position,
                experience,
                education,
                portfolioURL,
                skills,
                timestamp: firebase.firestore.FieldValue.serverTimestamp() // Add server timestamp
            });

            // Store timestamp of the submission in local storage
            localStorage.setItem('lastSubmissionTimestamp', Date.now().toString());

            console.log('User signed up successfully!');
        } catch (error) {
            setError(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleDevButton = () => {
        localStorage.removeItem('lastSubmissionTimestamp');
        setRemainingTime(0);
    };
    const isFormValid = () => {
        return email && firstName && lastName && phone && position && experience && education && portfolioURL && skills;
    };
    const formatTime = (time) => {
        const hours = Math.floor(time / (1000 * 60 * 60));
        const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time % (1000 * 60)) / 1000);
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="charmander-form">
            <h2 style={{ textAlign: "center" }}>Jelentkezés</h2>
            {error && <div className="jigglypuff-error">{error}</div>}
            <div className="pikachu-group">
                <label className="pikachu-label">Email:</label>
                <input
                    type="email"
                    className="pikachu-input"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="pikachu-group">
                <label className="pikachu-label">Keresztnév:</label>
                <input
                    type="text"
                    className="pikachu-input"
                    placeholder="Keresztnév"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
            </div>
            <div className="pikachu-group">
                <label className="pikachu-label">Vezetéknév:</label>
                <input
                    type="text"
                    className="pikachu-input"
                    placeholder="Vezetéknév"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
            </div>
            <div className="pikachu-group">
                <label className="pikachu-label">Telefonszám:</label>
                <input
                    type="tel"
                    className="pikachu-input"
                    placeholder="Telefonszám"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <div className="pikachu-group">
                <label className="pikachu-label">Pozíció:</label>
                <input
                    type="text"
                    className="pikachu-input"
                    placeholder="Pozíció"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    required
                />
            </div>
            <div className="pikachu-group">
                <label className="pikachu-label">Tapasztalat:</label>
                <input
                    type="text"
                    className="pikachu-input"
                    placeholder="Tapasztalat"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                />
            </div>
            <div className="pikachu-group">
                <label className="pikachu-label">Tanulmányok:</label>
                <input
                    type="text"
                    className="pikachu-input"
                    placeholder="Tanulmányok"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    required
                />
            </div>
            <div className="pikachu-group">
                <label className="pikachu-label">Portfólió URL:</label>
                <input
                    type="url"
                    className="pikachu-input"
                    placeholder="Portfólió URL"
                    value={portfolioURL}
                    onChange={(e) => setPortfolioURL(e.target.value)}
                    required
                />
            </div>
            <div className="pikachu-group">
                <label className="pikachu-label">Képességek:</label>
                <input
                    type="text"
                    className="pikachu-input"
                    placeholder="Képességek"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    required
                />
            </div>
            {remainingTime > 0 && (
                <p>Hátralévő idő a következő beküldésig: {formatTime(remainingTime)}</p>
            )}
            <button className="charizard-button" onClick={handleSubmit} disabled={isSubmitting || remainingTime > 0 || !isFormValid()}>
                {isSubmitting ? 'Beküldés...' : 'Regisztráció'}
            </button>
            {/* <button className="charizard-button" onClick={handleDevButton}>Fejlesztő Gomb (Időzítő visszaállítása)</button> */}
        </div>
    );

};

export default SignUpForm;