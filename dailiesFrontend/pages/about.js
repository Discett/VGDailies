import {Paper, Grid, Button, AppBar, TextField, Typography, Toolbar} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import React, { Component } from 'react';
import DailyAppBar from './dailyAppBar.js';
import PropTypes from 'prop-types';

const styles = {
    root:{
        backgroundColor: 'white',
        margin: 0,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        padding: 0,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
        position: 'absolute',
    },
    aboutText: {
        margin: 200,
    },
};

class About extends Component {
    render(){
        return(
            <div className={this.props.classes.root}>
                <DailyAppBar name="About"/>
                <Grid container>
                    <Typography className={this.props.classes.aboutText} variant='h6'>
                        This website is created with React and Django. The primary goal is to create a space in which users
                        can add daily trackers to their favorite games. This website would track the users daily progression
                        in a game concerning "dailies" and resets accordingly. It is meant to remind playerswhen they have
                        completed their "daily" for their current game(s) to those who are forgetful. This is accomplished
                        in two different ways. First is to query the game in question with an API key supplied by the user,
                        this information is then parsed and the relevant information displayed. Secondly should the game not
                        have proper API support,the user then can create their own reminder and adjust the timer so that the
                        "dailies" will reset in accordance to the game server.

                        The main goal of this project was to learn the basics of Web Development primarily using updated
                        technologies available at this current time.
                    </Typography>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(About);
