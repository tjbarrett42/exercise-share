import React from 'react';
import { Box, Typography } from '@material-ui/core';
import useStyles from './styles';

/* Typical footer component */
const Footer = () => {
    const classes = useStyles();
    return (
        <footer >
            <Box className={classes.footerBox} textAlign="center" >
                <Typography variant="subtitle1">
                    <p>
                        Timothy Barrett &copy; {new Date().getFullYear()}
                    </p>
                    <p>
                        <a href="https://github.com/tjbarrett42/exercise-share">Github Repo</a>
                    </p>
                </Typography>
            </Box>
        </footer>
    )
}

export default Footer;