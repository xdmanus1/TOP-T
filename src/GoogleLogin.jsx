import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faEye, faEyeSlash, faKey, faQuestionCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import './login.css';



const EmailPasswordLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showResetPopup, setShowResetPopup] = useState(false);
    const [resetTimer, setResetTimer] = useState(null);
    const [resetButtonDisabled, setResetButtonDisabled] = useState(false);
    const [resetAttemptCount, setResetAttemptCount] = useState(0);

    const handleSignInWithEmailAndPassword = async () => {
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = result.user;
            console.log('User signed in with email and password:', user);
        } catch (error) {
            console.error('Email/password sign-in error:', error);
            // Display error message to the user
        }
    };

    const handleForgotPassword = async () => {
        try {
            if (email.trim() !== '') {
                const lastResetTimestamp = localStorage.getItem('lastResetTimestamp');
                const currentTime = new Date().getTime();
                const oneHourInMillis = 60 * 60 * 1000; // 1 hour in milliseconds

                if (resetAttemptCount === 1) {
                    setResetButtonDisabled(true);
                    window.alert('You have already requested a password reset. Please try again later.');
                    return;
                }

                if (!lastResetTimestamp || (currentTime - lastResetTimestamp > oneHourInMillis)) {
                    await firebase.auth().sendPasswordResetEmail(email);
                    console.log('Password reset email sent successfully');
                    localStorage.setItem('lastResetTimestamp', currentTime);
                    setShowResetPopup(true);
                    setResetAttemptCount(resetAttemptCount + 1);
                    setResetTimer(setTimeout(() => {
                        setShowResetPopup(false);
                        setResetButtonDisabled(false);
                    }, 5000)); // 5 seconds timer
                } else {
                    console.log('Password reset already requested within the last hour');
                    setResetButtonDisabled(true);
                    window.alert(`You have already requested a password reset within the last hour. Please try again later.`);
                    // Display error message to the user or disable the button
                }
            } else {
                // Handle empty email
                console.error('Forgot password error: Email is empty');
                window.alert('Please enter your email address to reset the password.');
                // Display error message to the user
            }
        } catch (error) {
            console.error('Forgot password error:', error);
            // Display error message to the user
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <p>Email</p>
            <input
                className='inp1'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-wrapper">
                <p>Jelszó</p>
                <input
                    className='inp1'
                    type={showPassword ? "text" : "password"}
                    placeholder="Jelszó"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='eye'><FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} onClick={togglePasswordVisibility} /></div>
            </div>
            <div className='logmein'>
                <button className='logbtn' onClick={handleSignInWithEmailAndPassword}>
                    Bejelentkezés
                </button>
                <button className={`forgot-password ${resetButtonDisabled ? 'disabled' : ''}`} onClick={handleForgotPassword} disabled={resetButtonDisabled}>
                    <FontAwesomeIcon icon={faQuestionCircle} /> Elfelejtettem jelszavam
                </button>
            </div>
            {showResetPopup && (
                <div className="reset-popup">
                    <p>Password reset email sent successfully!</p>
                    <FontAwesomeIcon icon={faTimes} onClick={() => setShowResetPopup(false)} />
                </div>
            )}
        </div>
    );
};

const RegistrationForm = ({ isVisible }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterWithEmailAndPassword = async () => {
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = result.user;
            console.log('User registered with email and password:', user);

            // Create user document in Firestore
            await createUserDocument(user, { /* additional data if needed */ });
        } catch (error) {
            console.error('Email/password registration error:', error);
            // Display error message to the user
        }
    };

    const createUserDocument = async (userAuth, additionalData) => {
        if (!userAuth) return;

        const { uid, email } = userAuth;
        const userRef = firebase.firestore().doc(`users/${uid}`);

        try {
            const userSnapshot = await userRef.get();
            if (!userSnapshot.exists) {
                const createdAt = new Date();
                await userRef.set({
                    email,
                    createdAt,
                    userType: 'user', // Set default user type to 'user'
                    ...additionalData
                });
            }
        } catch (error) {
            console.error('Error creating user document:', error);
        }
    };


    return isVisible ? (
        <div >
            <input
                className='inp1'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="password-wrapper">
                <input
                    className='inp1'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Password visibility toggle */}

                <div className='eye1'> < FontAwesomeIcon icon={faEye} className='eye' /></div>
            </div>
            <button className='registerbtn' onClick={handleRegisterWithEmailAndPassword}>
                <FontAwesomeIcon icon={faUserPlus} /> Regisztráció
            </button>
        </div>
    ) : null;
};

const createUserDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const { uid, email } = userAuth;
    const userRef = firebase.firestore().doc(`users/${uid}`);

    try {
        const userSnapshot = await userRef.get();
        if (!userSnapshot.exists) {
            const createdAt = new Date();
            await userRef.set({
                email,
                createdAt,
                userType: 'user', // Set default user type to 'user'
                ...additionalData
            });
        }
    } catch (error) {
        console.error('Error creating user document:', error);
    }
};

const Login = () => {
    const [showRegistration, setShowRegistration] = useState(false);

    const toggleRegistration = () => {
        setShowRegistration(!showRegistration);
    };

    const handleSignInWithGoogle = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;

            // Check if the user's email is allowed to register
            const allowedEmails = ['craftercsapat590@gmail.com', 'gocsaldev@gmail.com', 'toptcorporation@protonmail.com', 'valogod3412@gmail.com']; // Add allowed email addresses here
            if (allowedEmails.includes(user.email)) {
                console.log('User signed in with Google:', user);
                // Create user document in Firestore
                await createUserDocument(user, { /* additional data if needed */ });
            } else {
                // Deny registration for users with disallowed emails
                console.log('Access denied. User email is not allowed to register.');
                // Display a popup alert
                window.alert('Access denied. Your email is not allowed to register.');
                // You may choose to sign out the user or perform other actions
                await firebase.auth().signOut();
            }
        } catch (error) {
            console.error('Google sign-in error:', error);
        }
    };


    return (
        <div className='login-thingy'>

            {!showRegistration && <EmailPasswordLogin />}
            <RegistrationForm isVisible={showRegistration} />
            <button className='togglebtn' onClick={toggleRegistration}>
                {showRegistration ? "Vissza a bejeletkezéshez" : "Nincs fiókom"}
            </button>
            <button className='logbtn1' onClick={handleSignInWithGoogle}>
                <FontAwesomeIcon icon={faSignInAlt} /> Bejeletkezés Google-val.
            </button>
        </div>
    );
};

export default Login;
