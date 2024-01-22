import React from 'react';

import './main.css';
import './fonts.css';

import billgates from './images/billgates.jpg';

const ProfileTemp = () => {
    return (
        <div id="profile-root">
            <div className="top-div" />
            <div id="flex-container">
                <img src={billgates} alt="Bill Gates" id="pfp"/>
                <div id="text-wrapper" className="profile-font">
                    <h2>General Information</h2>
                    <h3>Name:</h3>
                    <p>Bill Gates</p>
                    <h3>Graduated:</h3>
                    <p>1974</p>
                    <h3>Email:</h3>
                    <p>gatesb@outlook.com</p>
                </div>
            </div>
        </div>
    )
}  

export default ProfileTemp
