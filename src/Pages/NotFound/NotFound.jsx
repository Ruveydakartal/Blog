import React from 'react';
import Style from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>404</h1>
            <p className={Style.text}>This page could not be found.</p>
        </div>
    );
};

export default NotFound;