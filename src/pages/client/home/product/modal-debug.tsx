// This is a standalone file to test modal rendering outside of your component

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const ModalDebug: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleModal = () => {
        setIsVisible(prev => !prev);
    };

    useEffect(() => {
        // Add a button to the page
        const button = document.createElement('button');
        button.innerText = 'Show Debug Modal';
        button.style.position = 'fixed';
        button.style.bottom = '180px';
        button.style.right = '20px';
        button.style.zIndex = '99999';
        button.style.padding = '10px 20px';
        button.style.background = 'blue';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.cursor = 'pointer';
        button.onclick = toggleModal;

        document.body.appendChild(button);

        return () => {
            document.body.removeChild(button);
        };
    }, []);

    // Create a simple modal with inline styles
    if (!isVisible) return null;

    return ReactDOM.createPortal(
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                maxWidth: '90vw',
                background: 'white',
                boxShadow: '0 0 50px black',
                borderRadius: '8px',
                zIndex: 9999999,
                border: '5px solid blue',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
            }}
        >
            <h2>Simple Debug Modal</h2>
            <p>This is a simple modal rendered directly to document.body</p>
            <p>If you can see this, basic portal rendering is working correctly.</p>
            <button
                onClick={toggleModal}
                style={{
                    padding: '10px 20px',
                    background: 'blue',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Close Modal
            </button>
        </div>,
        document.body
    );
};

export default ModalDebug;
