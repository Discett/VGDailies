import React, { Component } from 'react';
import axios from 'axios';
import {credentials} from './credentials';
import DailyDataBox from './dailydata';

class DailyTrackerMainPage extends Component {

    render(){
        return(
            <div>
                <h1>This is the DailyTrackerMainPage</h1>
                <DailyDataBox></DailyDataBox>
            </div>
        );
    }
}


export default DailyTrackerMainPage;
