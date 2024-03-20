import React from 'react';

function ConfirmModal({ onClose, onConfirm, className, showConfirmModal }) {
    console.log('showConfirmModal:', showConfirmModal); // Log the value of showConfirmModal
    return (
        <div className={`modal ${className} ${showConfirmModal ? 'show' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Erősítés</h2>
                <p>Biztosan törölni szeretné ezt a naplóbejegyzést?</p>
                <div className="button-container">
                    <button onClick={onConfirm} style={{ marginRight: "10px" }}>Törlés</button>
                    <button onClick={onClose}>Mégse</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmModal;
