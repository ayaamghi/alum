import React from 'react';

import './fonts.css';
import './Footer.css';

import { Container, Grid, IconButton} from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() { 
    return (
        <div className="root" id="footerDiv">
            <Container className="foot-container" maxWidth="sm">      
                <Grid container justifyContent="center">
                    <Grid item xs={3}>
                        <a className="footerlink" id="footerfont"  href="tel:336-316-2860" target="_blank" >
                            (336) 316-2860
                        </a>
                    </Grid>
                    <Grid id="centergrid" item xs={1}>
                        <p className="footerline" id="footerfontline">
                            |
                        </p>
                    </Grid>
                    <Grid item xs={3}>
                        <a className="footerlink" id="footerfont"  href="https://www.gcsnc.com/Early_College_at_Guilford" target="_blank" >
                            GCS Website
                        </a>
                    </Grid>
                </Grid>
                <div className="address">
                    <a className="footeraddress" id="footerfont" href="https://www.google.com/maps/place/The+Early+College+at+Guilford/@36.0896894,-79.8859075,15z/data=!4m5!3m4!1s0x0:0xf49400d8a0bf272c!8m2!3d36.0896894!4d-79.8859075" target="_blank">
                        5608 W Friendly Ave
                        <br />Greensboro, NC 27410-4240
                    </a>
                </div>
                <Grid className="address" container justifyContent="center">
                    <Grid item xs={2}>
                        <IconButton href="https://www.facebook.com/" target="_blank" size="large">
                            <FacebookIcon className="iconbuttons" />
                        </IconButton>
                    </Grid>
                    <Grid id="centergrid" item xs={1}>
                        <IconButton href="https://twitter.com/home" target="_blank" size="large">
                            <TwitterIcon className="iconbuttons" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton href="https://www.instagram.com/" target="_blank" size="large">
                            <InstagramIcon className="iconbuttons" />
                        </IconButton>
                    </Grid>
                </Grid>
                <div className="address" id="footerfont">
                    <p className="footertext">
                        Early College at Guilford | 2024
                    </p>
                </div>
            </Container>
        </div>
    );
  }