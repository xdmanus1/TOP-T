import React, { useState, useEffect } from 'react';
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
    const [devNames] = useState(['Dev Name 1', 'Dev Name 2', 'Dev Name 3']);
    const [devlogs, setDevlogs] = useState([]);

    useEffect(() => {
        // Fetch devlogs from Firestore when component mounts
        const fetchDevlogs = async () => {
            try {
                const snapshot = await firebase.firestore().collection('devlogs').get();
                const devlogsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDevlogs(devlogsData);
            } catch (error) {
                console.error('Error fetching devlogs:', error);
            }
        };

        fetchDevlogs();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Same as before

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
        <div className="container">
            <h2 className="devlog-header">Új fejlesztői napló hozzáadása</h2>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
            </form>

            {/* Error and success modals */}

            <div className="devlogs-section">
                <h2>Kezelt fejlesztői naplók</h2>
                <ul>
                    {devlogs.map(devlog => (
                        <li key={devlog.id}>
                            <span>{devlog.header}</span>
                            <button onClick={() => handleEdit(devlog)}>Szerkesztés</button>
                            <button onClick={() => handleDelete(devlog.id)}>Törlés</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DevlogPage;
