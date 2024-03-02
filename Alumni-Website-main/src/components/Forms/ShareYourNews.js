import React, {useState, useEffect} from 'react';
import UpdateForm  from './UpdateForm';
import ContactForm from './ContactForm'
import '../fonts.css';
import '../main.css';

import { Typography, Container, Divider } from '@material-ui/core';


export default function ShareYourNews() {   

    return (
        <div>
            <div className="top-div" />
            <div className="main-body">
                <Container className="container">
                    <div id="header-font" className="header">
                        CONNECT WITH ECG
                    </div>
                    <Divider />
                    <Typography 
                        id="bodyfont"
                        variant="body1"
                        align="left"
                        style = {{marginBottom: "35px"}}
                        >
                            Connect with ECG. We want to stay in touch with our alumni!
                    </Typography>
                  
                    <Typography 
                        id="bodyfont"
                        variant="body1"
                        align="left"
                        style = {{marginBottom: "35px"}}
                        >
                            Have news to share? 
                    </Typography>

                    <UpdateForm />
                    <div style={{ marginTop: '80px' }}>
                    <Typography 
                        id="bodyfont"
                        variant="body1"
                        align="left"
                        style = {{marginBottom: "35px"}}
                        >
                            Update your contact information-- we'll reach out to you regarding upcoming events and oppourtunities to get involved. 
                    </Typography>

                    <ContactForm />
                    
                    </div>
                </Container>
            </div> 
        </div>
    );
}