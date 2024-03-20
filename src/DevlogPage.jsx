import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import './devlog.css';
import ConfirmModal from './ConfirmModal';

function DevlogPage() {
    const [devlogs, setDevlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedDevlog, setSelectedDevlog] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        const fetchDevlogs = async () => {
            try {
                const devlogsRef = firebase.firestore().collection('devlogs');
                const snapshot = await devlogsRef.get();
                const devlogData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDevlogs(devlogData);
                setLoading(false);
            } catch (error) {
                console.error('Hiba a devnaplók lekérésekor:', error);
            }
        };

        const checkAdminStatus = async () => {
            try {
                const user = firebase.auth().currentUser;
                if (user) {
                    const doc = await firebase.firestore().collection('admins').doc(user.uid).get();
                    setIsAdmin(doc.exists);
                }
            } catch (error) {
                console.error('Error checking admin status:', error);
            }
        };

        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                checkAdminStatus();
            } else {
                setIsAdmin(false);
            }
        });

        fetchDevlogs();

        return () => unsubscribe();
    }, []);

    console.log('showConfirmModal:', showConfirmModal); // Log the state of showConfirmModal

    const formatDate = (timestamp) => {
        if (!timestamp || !timestamp.seconds) {
            return "Érvénytelen időbélyeg";
        }
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleString();
    };

    const handleDeleteClick = (devlog) => {
        setSelectedDevlog(devlog);
        setShowConfirmModal(true);
    };

    const handleDeleteConfirm = async () => {
        if (selectedDevlog) {
            try {
                await firebase.firestore().collection('devlogs').doc(selectedDevlog.id).delete();
                setDevlogs(devlogs.filter(devlog => devlog.id !== selectedDevlog.id));
            } catch (error) {
                console.error('Hiba a devnapló törlésekor:', error);
            }
        }
        setShowConfirmModal(false);
    };

    const handleDeleteCancel = () => {
        setShowConfirmModal(false);
    };

    if (loading) {
        return <p>Betöltés...</p>;
    }

    return (
        <div>
            <h1 className='devh1'>Fejlesztői naplók</h1>
            <ul className='uls'>
                {devlogs.map(devlog => (
                    <div key={devlog.id} className="devlog-entry">
                        {isAdmin && <span className="delete-icon" onClick={() => handleDeleteClick(devlog)}>X</span>}
                        <h2 className='cim'>Cím: <b>{devlog.header}</b></h2>
                        {Array.isArray(devlog.changes) ? (
                            <div className='others'>
                                <p>Változások:</p>
                                <ul className='others2'>
                                    {devlog.changes.map(change => (
                                        <li key={change}>{change}</li>
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>Nincsenek rögzített változások</p>
                        )}
                        <p className='others'>Fejlesztő: {devlog.devName}</p>
                        <p className='others'>Idő: {formatDate(devlog.time)}</p>
                        <hr className='hrs' />
                    </div>
                ))}
            </ul>
            {showConfirmModal && (
                <ConfirmModal
                    onClose={handleDeleteCancel}
                    onConfirm={handleDeleteConfirm}
                    className="delete-confirm-modal"
                    showConfirmModal={true}
                />
            )}
        </div>
    );
}

export default DevlogPage;
