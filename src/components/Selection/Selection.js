import React from 'react';
import './Selection.css';

const Selection = (props) => {
    const {name, salary} = props.list;
    
    return (
        <div className="selectedPart">
            <div className="listPart">
                <p><strong>{name}</strong> {salary}</p>
            </div>
        </div>
    );
};

export default Selection;