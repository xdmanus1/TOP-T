// Modal.js
import React from 'react';

const Modal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="modal" style={{ display: message ? 'block' : 'none' }}>
            <div className="modal-content">
                <p>{message}</p>
                <button className='btnm' onClick={() => { onConfirm(); }}>Elfogad</button>
                <button onClick={onCancel}>Mégse</button>
            </div>
        </div>
    );
};


export default Modal;
