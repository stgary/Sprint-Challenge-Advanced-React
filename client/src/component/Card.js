import React from 'react';
import '../App.css';

export default function Card(props) {
    return(
        <div className='container'>
            {props.users.map(users => (
                <div className='card' key={users.id}>
                    <h4>{users.name}</h4>
                    <h4>{users.country}</h4>
                </div>
            ))}
        </div>
    );
}