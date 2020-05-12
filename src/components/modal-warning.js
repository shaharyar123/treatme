import React from 'react';
import '../styles/default-button.css';
import { Modal } from 'react-bootstrap';
import DefaultButton from './default-button';

const ModalWarning = ({ confirm, warningHead, close, show, warningText }) => {
    return (
        <Modal
            show={show !== ''}
            centered={true}
            onHide={close}
        >
            <Modal.Header>
                <Modal.Title className='modal-heading'>{warningHead}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{warningText}</Modal.Body>
            <Modal.Footer>
                <DefaultButton
                    title='Yes'
                    onClick={confirm}
                    style={{ width: "100px" }}
                    hideLoader={true}
                />
                <DefaultButton
                    title='No'
                    onClick={close}
                    style={{ width: "100px" }}
                    hideLoader={true}
                />
            </Modal.Footer>
        </Modal>);
};

export default ModalWarning;