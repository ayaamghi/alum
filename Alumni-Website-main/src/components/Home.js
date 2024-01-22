import React from 'react';

import './fonts.css';
import './main.css';

import { Link as RouterLink } from 'react-router-dom';

import homepageimage from './images/homepageimage.jpg';
import { ButtonGroup, Button, Typography, Container, Divider } from '@material-ui/core';

const Home = () => {

    return (
        <div>
            <div id="home-img-div">
                <img id="img2" src={homepageimage}/>
            </div>
            <ButtonGroup variant="text" id="button-group">
                <Button id="home-buttons">
                    <RouterLink to="/about" id="router-links">
                        <Typography 
                            variant="overline"
                            id="centeredbuttons">
                            About
                        </Typography>
                    </RouterLink>
                </Button>
                <Button id="home-buttons">
                    <RouterLink to="/alumni-spotlight" id="router-links">
                        <Typography 
                            variant="overline" 
                            id="centeredbuttons">
                            Alumni Spotlight
                        </Typography>
                    </RouterLink>
                </Button>
                <Button id="home-buttons">
                    <RouterLink to="/alumni-news" id="router-links">
                        <Typography 
                            variant="overline" 
                            id="centeredbuttons">
                            Alumni News
                        </Typography>
                    </RouterLink>
                </Button>
                <Button id="home-buttons">
                    <RouterLink to="/share-your-news" id="router-links">
                        <Typography 
                            variant="overline" 
                            id="centeredbuttons">
                            Share Your News
                        </Typography>
                    </RouterLink>
                </Button>
                <Button id="home-buttons">
                    <RouterLink to="/event-calendar" id="router-links">
                        <Typography 
                            variant="overline" 
                            id="centeredbuttons">
                            Event Calendar
                        </Typography>
                    </RouterLink>
                </Button>
            </ButtonGroup>

            <div className="main-body">
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
                            <br/><br/>ECG students go on to do great things and we’re committed to connecting past and present students. Here, ECG Alumni can <strong>update</strong> current students on their own successes, <strong>sign up</strong> for ECG events, <strong>interact</strong> with current students, <strong>answer</strong> their questions, and <strong>much more</strong>. 
                            <br/><br/>If you’re an Alum, <strong>sign up</strong>! We want to hear about all the great things you’re doing! 
                            <br/><br/>Everyone else, <strong>explore</strong>! We’re so proud of all the things our graduates have done and the website only showcases a fraction of the great things they go on to do. 
                    </Typography>
                </Container>
            </div>    
        </div>
    );
}

export default Home;