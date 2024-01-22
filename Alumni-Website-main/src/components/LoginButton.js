import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import './fonts.css';
import './main.css';

import { 
    makeStyles, Button, Typography
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    drawerButton: {
      padding: 20,
      paddingLeft:25,
      paddingRight:25,
      color:"black",
      backgroundColor: "white"
    },
  }));

const LoginButton = () => {
    const classes = useStyles();
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
        // <Button id="login-logout" onClick={() => loginWithRedirect()}>
        <Button id="login-logout">
            <Typography
               id="login-font" 
               align="center"
            >
                Login
            </Typography>
        </Button>
        )
    )
}

export default LoginButton