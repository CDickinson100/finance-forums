import React from 'react';
import './Category.css';

export default function Category(props) {
    var {name} = props;

    return (
        <div className="category">
            <h1>{name}</h1>
        </div>
    )
}