// ErrorModal.js
import React from 'react';

function ErrorModal({ onClose, className }) {
    return (
        <div className={`modal ${className}`}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>Hiba</h2>
                <p>A rendelés leadása során hiba történt. Kérjük, próbálkozzon később újra.</p>
            </div>
        </div>
    );
}

export default ErrorModal;
