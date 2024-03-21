import React from 'react';

import './fonts.css';
import './main.css';

import { Link as RouterLink } from 'react-router-dom';

import homepageimage from './images/homepageimage.jpg';
import { ButtonGroup, Button, Typography, Container, Divider } from '@mui/material';
import TopNav from './TopNav';

const Home = () => {

    return (
        <><div className="main-body">
            <Container className="container">
                <div id="header-font" className="header">
                    HOME
                </div>
                <Divider />
                <Typography
                    id="bodyfont"
                    variant="body1"
                    align="left"
                >
                    The Early College at Guilford is proud to announce its very own <strong>Alumni Association</strong>.
                    <br /><br />ECG students go on to do great things and we’re committed to connecting past and present students. Here, ECG Alumni can <strong>update</strong> current students on their own successes, <strong>sign up</strong> for ECG events, <strong>interact</strong> with current students, <strong>answer</strong> their questions, and <strong>much more</strong>.
                    <br /><br />If you’re an Alum, <strong>sign up</strong>! We want to hear about all the great things you’re doing!
                    <br /><br />Everyone else, <strong>explore</strong>! We’re so proud of all the things our graduates have done and the website only showcases a fraction of the great things they go on to do.
                </Typography>
            </Container>
        </div></>    
     );
}

export default Home;