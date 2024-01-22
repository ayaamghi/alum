import React from 'react';

import './fonts.css';
import './main.css';

import { Typography, Divider, Container } from '@material-ui/core';
import placeholder_person from './images/placeholder_person.png';

export default function AlumniSpotlight() {
    return (
        <div>
            <div className="top-div" />
            <div className="main-body">
                <Container className="container">
                    <div id="header-font" className="header">
                        ALUMNI SPOTLIGHT
                    </div>
                    <Divider />
                    <div className="spotlight-left">
                        <div className="left-image-div">
                            <img src={placeholder_person} alt="Placeholder" className="spotlight-images"/>
                        </div>
                        <div className="spotlight-left-text" id="spotlight-font">
                            <h2>Alumni's Name</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                                inventore consectetur, neque doloribus, cupiditate numquam 
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                                inventore consectetur, neque doloribus, cupiditate numquam 
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 
                            </p>
                        </div>
                    </div>
                    <Divider />
                    <div className="spotlight-right">
                        <div className="spotlight-right-text" id="spotlight-font">
                            <h2>Alumni's Name</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                                inventore consectetur, neque doloribus, cupiditate numquam 
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                                inventore consectetur, neque doloribus, cupiditate numquam 
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 
                            </p>
                        </div>
                        <div className="right-image-div">
                            <img src={placeholder_person} alt="Placeholder" className="spotlight-images"/>
                        </div>
                    </div>
                    <Divider />
                    <div className="spotlight-left">
                        <div className="left-image-div">
                            <img src={placeholder_person} alt="Placeholder" className="spotlight-images"/>
                        </div>
                        <div className="spotlight-left-text" id="spotlight-font">
                            <h2>Alumni's Name</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                                inventore consectetur, neque doloribus, cupiditate numquam 
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Quos blanditiis tenetur unde suscipit, quam beatae rerum 
                                inventore consectetur, neque doloribus, cupiditate numquam 
                                dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam. 
                            </p>
                        </div>
                    </div>
                </Container>
            </div> 
        </div>
    );
}