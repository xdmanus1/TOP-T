import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './OrderPage.css';
import ErrorModal from './ErrorModal';
import SuccessModal from './SuccessModal';

function OrderPage() {
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [lastSubmissionTime, setLastSubmissionTime] = useState(parseInt(localStorage.getItem('lastSubmissionTime')) || 0);
    const [isCooldown, setIsCooldown] = useState(false);
    const [cooldownTime, setCooldownTime] = useState(0);
    const [failedAttempts, setFailedAttempts] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const product = formData.get('product');
        const additionalText = formData.get('additionalText');
        const phoneNumber = formData.get('phoneNumber');

        if (!name || !email || !product || !additionalText || !phoneNumber) {
            // If any required field is empty, show error modal and return early
            setShowErrorModal(true);
            setShowSuccessModal(false);
            return;
        }

        const now = Date.now();

        // Check if cooldown is active
        if (isCooldown) {
            // Show error modal indicating cooldown
            setShowErrorModal(true);
            setShowSuccessModal(false);
            return;
        }

        // Check if cooldown period has passed since the last submission
        if (now - lastSubmissionTime < 300000) { // 5 minutes cooldown
            // Increment failed attempts
            setFailedAttempts(prevAttempts => prevAttempts + 1);

            // If failed attempts exceed 3, start the cooldown
            if (failedAttempts >= 3) {
                setIsCooldown(true);

                // Show error modal indicating cooldown
                setShowErrorModal(true);
                setShowSuccessModal(false);

                // Reset failed attempts after cooldown
                setTimeout(() => {
                    setIsCooldown(false);
                    setFailedAttempts(0);
                }, 300000);

                return;
            }
        }

        try {
            // Store form data in Firestore
            await firebase.firestore().collection('orders').add({
                name,
                email,
                product,
                additionalText,
                phoneNumber,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

            // Show success modal
            setShowSuccessModal(true);
            setShowErrorModal(false);

            // Update last submission time
            setLastSubmissionTime(now);
            localStorage.setItem('lastSubmissionTime', now.toString());
        }
        catch (error) {
            // Show error modal
            setShowErrorModal(true);
            setShowSuccessModal(false);
        }
    };

    const closeModal = () => {
        setShowErrorModal(false);
        setShowSuccessModal(false);
    };

    useEffect(() => {
        let intervalId;

        if (isCooldown) {
            // Calculate remaining cooldown time in minutes and seconds
            const remainingTime = Math.ceil((300000 - (Date.now() - lastSubmissionTime)) / 1000);

            // Update cooldown time
            setCooldownTime(remainingTime);

            // Start countdown interval
            intervalId = setInterval(() => {
                setCooldownTime((prevTime) => {
                    if (prevTime <= 0) {
                        clearInterval(intervalId);
                        setIsCooldown(false);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isCooldown, lastSubmissionTime]);

    useEffect(() => {
        // Check if cooldown period has passed since the last submission after page refresh
        const now = Date.now();
        if (now - lastSubmissionTime < 300000) {
            setIsCooldown(true);
            const remainingTime = Math.ceil((300000 - (now - lastSubmissionTime)) / 1000);
            setCooldownTime(remainingTime);
        }
    }, []);

    return (<div>
        <div className='szolg'>
            <h1 className='szolgh1'>Szolgáltatásaink</h1>
            <h2>Kreatív Webfejlesztés és Tervezés:</h2>
            <p>
                &nbsp;&nbsp;&nbsp;Szakértő csapatunk innovatív weboldalakat tervez és fejleszt, figyelembe véve ügyfeleink egyedi igényeit és a legfrissebb trendeket.
                Rugalmas megközelítésünk lehetővé teszi számunkra, hogy minden projekten egyedi és felhasználóbarát weboldalakat hozzunk létre.
            </p>

            <h2>Mobilalkalmazás Fejlesztés:</h2>
            <p>
                &nbsp;&nbsp;&nbsp;Tapasztalt fejlesztőink mobilalkalmazások tervezésében és fejlesztésében jeleskednek minden platformon.
                Az intuitív felhasználói élmény és a hatékony funkcionalitás jellemzi alkalmazásainkat, amelyek segítik ügyfeleinket céljaik elérésében.
            </p>

            <h2>Felhőalapú Megoldások:</h2>
            <p>
                &nbsp;&nbsp;&nbsp;A TOP T Cég kiemelkedő szakértelmet kínál a felhőalapú megoldások terén, beleértve az infrastruktúrát, az alkalmazásokat és az adattárolást.
                Rugalmas és skálázható felhőmegoldásaink segítségével ügyfeleink hatékonyan növelhetik vállalkozásuk hatékonyságát és rugalmasságát.
            </p>

            <h2>Szakértő Tanácsadás:</h2>
            <p>
                &nbsp;&nbsp;&nbsp;Tapasztalt tanácsadóink stratégiai és technológiai tanácsokkal látják el ügyfeleinket, hogy segítsenek nekik a legjobb döntések meghozatalában.
                Az üzleti igényekre szabott tanácsadásunk célja a hosszú távú siker és a versenyelőny biztosítása minden ügyfelünknek.
            </p>
        </div>
        <div className="container">

            <h2 className='ordtx'>Rendelés űrlap</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Név</label>
                    <input type="text" id="name" name="name" className="input-field" placeholder="Add meg a neved" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" className="input-field" placeholder="Add meg az emailed" />
                </div>
                <div className="form-group">
                    <label htmlFor="product">Termék</label>
                    <select id="product" name="product" className="input-field">
                        <option className="input-field1" value="basic">Basic</option>
                        <option className="input-field1" value="pro">Pro</option>
                        <option className="input-field1" value="enterprise">Enterprise</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="additionalText">További szöveg</label>
                    <textarea id="additionalText" name="additionalText" className="input-field expandable" rows="1" placeholder="Add meg a további szöveget"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Telefonszám</label>
                    <input type="tel" id="phoneNumber" name="phoneNumber" className="input-field" placeholder="Add meg a telefonszámod" />
                </div>
                <button type="submit" className={isCooldown ? "btn-submitdisabled" : "btn-submit"} disabled={isCooldown} style={{ marginRight: 'auto', marginLeft: 'auto', display: 'block' }}>Beküldés</button>
                {isCooldown && (
                    <p style={{ textAlign: 'center' }}>Következő küldésig: {Math.floor(cooldownTime / 60)} perc {cooldownTime % 60} másodperc</p>
                )}
            </form>

            <ErrorModal onClose={closeModal} className={showErrorModal ? 'show' : 'hide'} />
            <SuccessModal onClose={closeModal} className={showSuccessModal ? 'show' : 'hide'} message="A rendelés leadás sikeres." />
        </div>
    </div>
    );
}

export default OrderPage;
