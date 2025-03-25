import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// This is a helper component to test if modals work in your app
const ModalTestHelper: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        console.log('Toggling modal, current state:', !showModal);
        setShowModal(!showModal);
    };

    const renderTestModal = () => {
        if (!showModal) return null;

        return ReactDOM.createPortal(
            <div
                style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    background: 'white',
                    padding: '20px',
                    zIndex: 9999999,
                    border: '5px solid red',
                    boxShadow: '0 0 50px black',
                    minWidth: '300px',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <h2>Test Modal</h2>
                <p>If you can see this, modals are working!</p>
                <button
                    onClick={toggleModal}
                    style={{
                        padding: '10px 20px',
                        background: 'red',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginTop: '20px'
                    }}
                >
                    Close Test Modal
                </button>
            </div>,
            document.body
        );
    };

    return (
        <>
            <button
                onClick={toggleModal}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999,
                    padding: '10px 20px',
                    background: '#0B74E5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
            >
                Test Modal System
            </button>
            {renderTestModal()}
        </>
    );
};

export default ModalTestHelper;
