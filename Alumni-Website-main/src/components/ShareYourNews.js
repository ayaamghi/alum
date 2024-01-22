import React, {useState, useEffect} from 'react';
import UpdateForm  from './UpdateForm';

import './fonts.css';
import './main.css';

import { Typography, Container, Divider } from '@material-ui/core';


export default function ShareYourNews() {   

    return (
        <div>
            <div className="top-div" />
            <div className="main-body">
                <Container className="container">
                    <div id="header-font" className="header">
                        SHARE YOUR NEWS
                    </div>
                    <Divider />
                    <Typography 
                        id="bodyfont"
                        variant="body1"
                        align="left"
                        style = {{marginBottom: "35px"}}
                        >
                            We want to hear from you!
                    </Typography>
                    <UpdateForm />
                </Container>
            </div> 
        </div>
    );
}