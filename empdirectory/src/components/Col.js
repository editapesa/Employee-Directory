import React from 'react';
import '../styles/Col.css';

function Col(props) {
    return (
        <div className='row'>
            <div className='img-col'>
                <strong>Image</strong>
                <img alt={props.name} src={props.image} />
            </div>
            <div className='name-col'>
                <strong>Name</strong> {props.name}
            </div>
            <div className='phone-col'>
                <strong>Phone</strong> {props.phone}
            </div>
            <div className='email-col'>
                <strong>Email</strong> {props.email}
            </div>
            <div className='dob-col'>
                <strong>DOB</strong> {props.dob}
            </div>
        </div>
    );
}

export default Col;