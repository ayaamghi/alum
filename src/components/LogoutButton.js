/*import React from 'react'
 
import './fonts.css';

import { Button, Typography } from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    drawerButton: {
      padding: 20,
      paddingLeft:25,
      paddingRight:25,
      color:"white"
    },
  }));

const LogoutButton = () => {
    const classes = useStyles();
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <Button className={classes.drawerButton} onClick={() => logout({
            returnTo: window.location.origin,
          })}>
            <Typography
               id="login-font" 
               align="center"
            >
                Logout
            </Typography>
        </Button>
        )
    )
}

export default LogoutButton
*/