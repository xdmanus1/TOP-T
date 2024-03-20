import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import ErrorModal from './ErrorModal';
import SuccessModal from './SuccessModal';

function DevlogPage() {
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [newDevlogHeader, setNewDevlogHeader] = useState('');
    const [newDevlogChanges, setNewDevlogChanges] = useState('');
    const [selectedDevName, setSelectedDevName] = useState('');
    const [devNames] = useState(['Karsa Hunor Ákos', 'Gocsál Mátyás', 'Kovács Gáspár']);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newDevlogHeader || !newDevlogChanges || !selectedDevName) {
            // If any required field is empty, show error modal and return early
            setShowErrorModal(true);
            setShowSuccessModal(false);
            return;
        }

        try {
            console.log('Adding new devlog...');

            const firestore = firebase.firestore(); // Get the Firestore instance
            const devlogsRef = firestore.collection('devlogs'); // Reference to 'devlogs' collection

            const newDevlogData = {
                header: newDevlogHeader,
                changes: newDevlogChanges.split('\n'), // Assuming changes are separated by new lines
                devName: selectedDevName,
                time: firebase.firestore.Timestamp.now() // Add submission timestamp as Firestore Timestamp
            };

            await devlogsRef.add(newDevlogData); // Add new devlog data to Firestore

            console.log('New devlog added successfully!');

            // Show success modal
            setShowSuccessModal(true);
            setShowErrorModal(false);

            // Clear input fields after adding devlog
            setNewDevlogHeader('');
            setNewDevlogChanges('');
            setSelectedDevName('');
        } catch (error) {
            console.error('Error adding devlog:', error);

            // Show error modal
            setShowErrorModal(true);
            setShowSuccessModal(false);
        }
    };


    const closeModal = () => {
        setShowErrorModal(false);
        setShowSuccessModal(false);
    };

    return (
        <div className="container orders-management devlog-management">
            <h2 className="devlog-header">Új fejlesztői napló hozzáadása</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="devlogHeader">Cím:</label>
                    <input
                        type="text"
                        id="devlogHeader"
                        value={newDevlogHeader}
                        onChange={(e) => setNewDevlogHeader(e.target.value)}
                        className="devlogheader"
                        placeholder="Add meg a címet"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="devlogChanges">Változások:</label>
                    <textarea
                        id="devlogChanges"
                        value={newDevlogChanges}
                        onChange={(e) => setNewDevlogChanges(e.target.value)}
                        className="input-field expandable"
                        rows="3"
                        placeholder="Add meg a változásokat (új sorokkal elválasztva)"
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="devName">Fejlesztő neve:</label>
                    <select
                        id="devName"
                        value={selectedDevName}
                        onChange={(e) => setSelectedDevName(e.target.value)}
                        className="input-field"
                    >
                        <option value="">Válassz fejlesztőt</option>
                        {devNames.map((name, index) => (
                            <option key={index} value={name}>{name}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn-submit">Hozzáadás</button>
            </form>

            <ErrorModal onClose={closeModal} className={showErrorModal ? 'show' : 'hide'} />
            <SuccessModal onClose={closeModal} className={showSuccessModal ? 'show' : 'hide'} message="A devlog hozzáadása sikeres." />

        </div>
    );
}

export default DevlogPage;