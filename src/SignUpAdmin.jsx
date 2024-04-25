import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import ConfirmModal from './ConfirmModal'; // Import the ConfirmModal component

const SignupAdmin = () => {
    const [signups, setSignups] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false); // State to control visibility of the confirmation modal
    const [signupIdToDelete, setSignupIdToDelete] = useState(null); // State to store the ID of the signup to delete

    useEffect(() => {
        // Fetch signups from Firestore
        const fetchSignups = async () => {
            try {
                const signupsCollection = await firebase.firestore().collection('jelent').get();
                const signupsData = signupsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setSignups(signupsData);
            } catch (error) {
                console.error('Hiba a jelentkezések lekérése közben:', error);
            }
        };

        fetchSignups();

        // Subscribe to real-time updates (if needed)
        // const unsubscribe = firebase.firestore().collection('jelent').onSnapshot(snapshot => {
        //     const signupsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        //     setSignups(signupsData);
        // });

        // return () => unsubscribe(); // Unsubscribe from real-time updates when component unmounts
    }, []);

    // Function to handle confirmation modal close
    const handleCloseModal = () => {
        setShowConfirmModal(false);
        setSignupIdToDelete(null);
    };

    // Function to show confirmation modal and set signup ID to delete
    const handleShowModal = (signupId) => {
        setSignupIdToDelete(signupId);
        setShowConfirmModal(true);
    };

    // Function to delete the signup from Firestore
    const handleDeleteSignup = async () => {
        try {
            await firebase.firestore().collection('jelent').doc(signupIdToDelete).delete();
            setSignups(prevSignups => prevSignups.filter(signup => signup.id !== signupIdToDelete));
            handleCloseModal();
        } catch (error) {
            console.error('Hiba a jelentkezés törlése közben:', error);
        }
    };

    return (
        <div className='container orders-management devlog-management'>
            <h2>Admin Panel: Jelentkezések</h2>
            {signups.map(signup => (
                <div key={signup.id} className="signup-item">
                    <div><strong>Email:</strong> {signup.email}</div>
                    <div><strong>Vezetéknév:</strong> {signup.firstName}</div>
                    <div><strong>Keresztnév:</strong> {signup.lastName}</div>
                    <div><strong>Telefonszám:</strong> {signup.phone}</div>
                    <div><strong>Pozíció:</strong> {signup.position}</div>
                    <div><strong>Tapasztalat:</strong> {signup.experience}</div>
                    <div><strong>Iskolai végzettség:</strong> {signup.education}</div>
                    <div><strong>Portfólió URL:</strong> {signup.portfolioURL}</div>
                    <div><strong>Képességek:</strong> {signup.skills}</div>
                    <span className="delete-icon" onClick={() => handleShowModal(signup.id)}>×</span> {/* "x" icon to trigger delete confirmation modal */}
                    <hr className='hrse' />
                    {/* Display more fields as needed */}
                </div>
            ))}
            <ConfirmModal
                onClose={handleCloseModal}
                onConfirm={handleDeleteSignup}
                showConfirmModal={showConfirmModal}
            />
        </div>
    );
};

export default SignupAdmin;
