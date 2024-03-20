import React from 'react';

function SuccessModal({ onClose, className, message }) {
    return (
        <div className={`modal ${className}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Siker</h2>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default SuccessModal;
