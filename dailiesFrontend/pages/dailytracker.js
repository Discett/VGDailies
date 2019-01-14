import React, { Component } from 'react';
import axios from 'axios';
import {credentials} from './credentials';
import DailyDataBox from './dailydata';
import Link from 'next/link';
import DailyAppBar from './dailyAppBar.js';
import {withStyles} from '@material-ui/core/styles';

const styles = {
        root:{
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            position: 'absolute',
        },
    }

class DailyTrackerMainPage extends Component {
    render(){
        const classes = this.props.classes;
        return(
            <div className={classes.root}>
                <DailyAppBar name='Daily Tracker'/>
                <h1>This is the DailyTrackerMainPage</h1>
                <DailyDataBox showAddButton={true}/>
            </div>
        );
    }
}


export default withStyles(styles)(DailyTrackerMainPage);
