import React from 'react';

import './fonts.css';
import './main.css';

import { Typography, Container, Divider } from '@mui/material';

export default function About() {
    return (
        <div>
            <div className="top-div" />
            <div className="main-body">
                <Container className="container">
                    <div id="header-font" className="header">
                        ABOUT
                    </div>
                    <Divider />
                    <Typography 
                        id="bodyfont"
                        variant="body1"
                        align="left"
                        >
                        <strong>The ECG Alumni Association</strong> is all about connecting past and present students. <br/><br/><strong>Here, Alumni can:</strong>
                        <ul>
                            <li><strong>Sign up</strong> for school events</li>
                            <li>Come back to <strong>talk</strong> with current students</li>
                            <li>Give advice</li>
                            <li><strong>Update their own profile</strong> on the website</li>
                            <li><strong>Connect</strong> with their fellow alumni</li>
                        </ul>
                    </Typography>
                </Container>
            </div> 
        </div>
    );
}