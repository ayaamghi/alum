import React from 'react';

import './fonts.css';
import './NavBar.css';

import logo from './images/logo.png';

import { 
  AppBar, Toolbar, makeStyles, IconButton, Typography, Drawer,
  CssBaseline, List, ListItem, ListItemIcon, ListItemText, Grid, useScrollTrigger, Slide
} from '@material-ui/core';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import { Link as RouterLink } from 'react-router-dom';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';

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
            <IconButton id="drawer-button" onClick={toggleDrawer("right", false)}>
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
              <IconButton id="menuButton" edge="end" color="inherit"
                onClick={toggleDrawer("right", true)}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
            
          </AppBar>
        </Slide>

        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {content}
        </Drawer>
        
      </div>
  );
}

export default NavBar;