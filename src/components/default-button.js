import React from 'react';
import '../styles/default-button.css';
import { Button } from 'react-bootstrap';
const DefaultButton = ({ className, onClick, title, block, type, style }) => {
    return (
        <Button className={`default-button ${className}`} onClick={onClick} block={block === true} type={type === 'submit' ? 'submit' : 'button'} style={style}>{title}</Button>
    );
};

export default DefaultButton;