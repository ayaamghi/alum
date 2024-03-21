/* import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import styled from 'styled-components';
const useStyles = styled({
    root: {
      flexGrow: 1,
    },
    topDiv: {
        height: "64px",
    },
  });

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    const classes = useStyles();

    if (isAuthenticated) {
        return (
            <div className={classes.root}>
                <div className={classes.topDiv} />
                <div style={{ padding:'10px' }}>
                    <img src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    {JSON.stringify(user,null,2)}
                </div>
            </div>
        )  
    } else {
        return (
            <div className={classes.root}>
                <div className={classes.topDiv} />
                <div style={{ padding:'10px' }}>
                    <h2>Please Login</h2>
                </div>
            </div>
        )
    }

    
}

export default Profile

*/
