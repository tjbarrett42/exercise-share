import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';
import GithubIcon from '@material-ui/icons/GitHub';

/* Typical footer component */
const Footer = () => {
    const classes = useStyles();
    return (
        <footer >
            <Box className={classes.footerBox} textAlign="center" >
                <Typography variant="subtitle1">
                    <p>
                        Timothy Barrett &copy; {new Date().getFullYear()} <sp/>
                    </p>
                    <p>
                        <GithubIcon className={classes.clickableIcon} onClick={(e) => window.open("https://github.com/tjbarrett42/exercise-share", '_blank')}/>

                    </p>
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer;