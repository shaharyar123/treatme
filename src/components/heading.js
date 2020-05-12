import React from 'react';
import '../styles/heading.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
const Heading = ({ className, addItem, icon, title }) => {
    return (
        <div className={`page-heading ${className}`}>
            <FontAwesomeIcon icon={icon} className='mr-2' size='lg' />
            <span className='heading-text'>{title}</span>
            {
                addItem && (
                    <span className='add-item-icon'>
                        <Button variant='danger' size='sm' onClick={addItem}>
                            <FontAwesomeIcon icon={faPlus} size='sm' />
                        </Button>
                    </span>
                )
            }
        </div>
    );
};

export default Heading;