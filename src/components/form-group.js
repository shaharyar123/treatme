import React from 'react';
import { Form } from "react-bootstrap";
import '../styles/default-button.css';
const DefaultFormGroup = ({ controlId, onChange, label, validationText, inputType, placeholder, inputName, required, value }) => {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label>{label}</Form.Label>
            <Form.Control required={required} type={inputType} placeholder={placeholder} name={inputName} onChange={onChange} value={value}/>
            <Form.Control.Feedback type="invalid">
                {validationText}
            </Form.Control.Feedback>
        </Form.Group>);
};

export default DefaultFormGroup;