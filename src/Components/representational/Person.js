import React from 'react';
import '../../App.css';

const Person =(props) =>{
    return(
        <div className="perosn" onClick={props.selectedBookHandler}>
            <h1> Name:{props.name}</h1>
            <p>Writer: {props.writer}</p>
        </div>
    )
}

export default Person;