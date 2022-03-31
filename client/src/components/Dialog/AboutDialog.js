import React from 'react';
import { Button, DialogTitle, Dialog, Typography, DialogActions, DialogContent, DialogContentText } from '@material-ui/core';

/* Open dialog from app bar for more contact information*/
const AboutDialog = ({onClose, open}) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
            scroll={'paper'}

        >
            <DialogTitle>About</DialogTitle>
            <DialogContent >
                <DialogContentText
                    id="scroll-dialog-description"
                    tabIndex={-1}
                >
                    {/* <Typography variant="h5">
                        About ExerciseShare
                    </Typography> */}
                    <Typography variant="body1">
                        <p>
                            In ExerciseShare, users can share their favorite exercises as well as save new favorites they find from others. Users can also engage in conversation on exercises and learn from other users!
                        </p>
                        <p>
                            Additonally, each exercise page has an exercise recommendation panel, showing similar exercises to try.
                        </p>
                        <p>
                            This fullstack project utilizes MongoDB, Express, React, and Node.js.
                        </p>
                        
                    </Typography>

                </DialogContentText>
            </DialogContent>
            <DialogTitle>Contact</DialogTitle>
            <DialogContent >
                <DialogContentText
                    id="scroll-dialog-description"
                    tabIndex={-1}
                >
                    {/* <Typography variant="h5">
                        Email
                    </Typography> */}
                    <Typography variant="body1">
                        Questions or comments? Feel free to send me an email at timothy@jamesbarrett.us
                    </Typography>

                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Back</Button>
            </DialogActions>

        </Dialog>
    );
}

export default AboutDialog;