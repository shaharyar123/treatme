import React from 'react';
import '../styles/loading.scss';

const Loading = ({ className, text }) => {
    return (
        <div className={`loading-container ${className}`}>
            {text || 'Loading..'}
        </div>


    );
};

export default Loading;