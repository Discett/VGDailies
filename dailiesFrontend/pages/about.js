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
                        This website is created with React and Django. The primary goal is to create a website in which users
                        can track 'dailies' of their favorite games. These 'dailies' are goals given to players to complete and resets every 24 hours.
                        Daily Tracker allows users to make a check list of which games they have done their 'dailies' in.
                        This is accomplished in two different ways. First is to query the game in question with an API key supplied by the user(should the game's api allow for this),
                        this information is then parsed and the relevant information displayed. Secondly should the game not
                        have proper API support,the user then can create their own reminder and adjust the timer so that the
                        "dailies" will reset in accordance to the game server.

                        While DailyTracker can query specific game API's, each game has their own API calls and thus would need to be implemented on a game by game basis.
                        As of this current moment DailyTracker does not track any specific game, but future implementations should be able to.
                    </Typography>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(About);
