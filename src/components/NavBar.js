/*
import React from 'react';

import './fonts.css';
import './NavBar.css';


import logo from './images/logo.png';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  CssBaseline,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  useScrollTrigger,
  Slide,
} from '@mui/material';

import makeStyles from '@mui/styles/makeStyles';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { Link as RouterLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import EventIcon from '@mui/icons-material/Event';

const useStyles = makeStyles(() => ({
  link: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const trigger = useScrollTrigger();

  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => () => {
    setState({ ...state, [anchor]: open });
  };

  const content = (
    <div className="menu-content">
      <div id="drawertop">
        <Grid container id="container">
          <Grid item xs={12} align="right">
            <IconButton id="drawer-button" onClick={toggleDrawer("right", false)} size="large">
              <CloseIcon />
            </IconButton> 
          </Grid>
        </Grid>
      </div>
      <List id="list">
        <RouterLink to="/" onClick={toggleDrawer("right", false)} exact style={{ textDecoration: 'none' }}>
          <ListItem 
            divider 
            button
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText disableTypography="true" id="drawer-list-font" primary="Home" />
          </ListItem>
        </RouterLink>

        <RouterLink to="/about" onClick={toggleDrawer("right", false)} style={{ textDecoration: 'none' }}>
          <ListItem 
            divider 
            button
          >
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText disableTypography="true" id="drawer-list-font" primary="About" />
          </ListItem>
        </RouterLink>

        <RouterLink to="/alumni-spotlight" onClick={toggleDrawer("right", false)} style={{ textDecoration: 'none' }}>
          <ListItem 
            divider 
            button
          >
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText disableTypography="true" id="drawer-list-font" primary="Alumni Spotlight" />
          </ListItem>
        </RouterLink>

        <RouterLink to="/alumni-news" onClick={toggleDrawer("right", false)} style={{ textDecoration: 'none' }}>
          <ListItem 
            divider 
            button
          >
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText disableTypography="true" id="drawer-list-font" primary="Alumni News" />
          </ListItem>
        </RouterLink>

        <RouterLink to="/share-your-news" onClick={toggleDrawer("right", false)} style={{ textDecoration: 'none' }}> 
          <ListItem 
            divider 
            button
          >
            <ListItemIcon>
              <ArrowRightIcon />
            </ListItemIcon>
            <ListItemText disableTypography="true" id="drawer-list-font" primary="Share Your News" />
          </ListItem>
        </RouterLink>
        
        <RouterLink to="/event-calendar" onClick={toggleDrawer("right", false)} style={{ textDecoration: 'none' }}> 
          <ListItem 
            divider 
            button
          >
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText disableTypography="true" id="drawer-list-font" primary="Event Calendar" />
          </ListItem>
        </RouterLink>


      </List>
    </div>
  );

  return (
      <div>     
        <CssBaseline />
        <AppBar id="appbar">
            <img src={logo} alt="logo" id="toolbar-image"/>
        </AppBar>
        <Slide appear={false} direction="down" in={!trigger}>
          <AppBar position="fixed" id="appbar">   
            <Toolbar id="toolbar">
              <RouterLink to="/" exact style={{ textDecoration: 'none' }} className={classes.link}>
                <Typography 
                  variant="h6" 
                  id="titlefont"
                  align="left"
                  noWrap>
                  ECG Alumni Association
                </Typography>
              </RouterLink>
              </Toolbar> {/*delete this tool bar  if you want to add back the hamburger menu*/

            /*  <IconButton id="menuButton" edge="end" color="inherit"
                onClick={toggleDrawer("right", true)}>
            <MenuIcon /> -
              </IconButton>
            </Toolbar>
            */
           /*
  }
          </AppBar>
        </Slide>

        
      </div>
  );
}

export default NavBar;

//top nav drawer

/*
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {content}
        </Drawer>

*/
