import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import homepageimage from './images/homepageimage.jpg';
import { ButtonGroup, Button, Typography, Container, Divider } from '@mui/material';
import './fonts.css';
import './main.css';

export default  function TopNav()  { 

    return (
     <><div id="home-img-div">
            <img id="img2" src={homepageimage} />
        </div><ButtonGroup variant="text" id="button-group">
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
            </ButtonGroup></>
    );

}