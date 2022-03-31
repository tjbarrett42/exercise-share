import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core';
import weight from '../../images/weight.png';
import decode from 'jwt-decode';
import AboutDialog from '../Dialog/AboutDialog';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const [ openAbout, setOpenAbout ] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const logout = () => {
        dispatch( { type: 'LOGOUT'});

        navigate('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);
      
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          }

        setUser(JSON.parse(localStorage.getItem('profile')));

    }, [location]);

    const handleClickAbout = () => setOpenAbout((prevClickAbout) => !prevClickAbout);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div to="/" className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h3" align="center">ExerciseShare</Typography>
                <img className={classes.image} src={weight} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                        <Button variant="contained" className={classes.login} color="primary" onClick={handleClickAbout}>About</Button>
                    </div>
                ) : (
                    <div className={classes.profile}>
                        <Button component={Link} className={classes.login} to="/auth" variant="contained" color="primary">Sign In</Button>
                        <Button variant="contained" className={classes.login} color="primary" onClick={handleClickAbout}>About</Button>
                    </div>
                )}
            </Toolbar>
            <AboutDialog open={openAbout} onClose={handleClickAbout}/>
        </AppBar>
    );
}

export default Navbar