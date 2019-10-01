import React from 'react';
import './Person.css';

const name = (props) => {
    return (
        <div className="Name">
            <span>{props.name}</span>
        </div>
    )
};

export default name;