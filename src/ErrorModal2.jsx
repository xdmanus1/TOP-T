import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ErrorModal2 = ({ errorMessage, onClose }) => {
    return (
        <div className="modal-content">
            <p>{errorMessage}</p>
            <FontAwesomeIcon icon={faTimes} onClick={onClose} />
        </div>
    );
};

export default ErrorModal2;
