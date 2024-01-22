import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './fonts.css';

import { 
    makeStyles, Button, Typography
} from '@material-ui/core';

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