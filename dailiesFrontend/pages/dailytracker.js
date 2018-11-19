import React, { Component } from 'react';
import axios from 'axios';
import {credentials} from './credentials';
import DailyDataBox from './dailydata';
import Link from 'next/link';


class DailyTrackerMainPage extends Component {

    render(){
        return(
            <div>
                <h1>This is the DailyTrackerMainPage</h1>
                <Link href={`/`}>
                    <a style={{ padding: 5 }}>Home</a>
                </Link>
                <DailyDataBox showAddButton={true}/>
            </div>
        );
    }
}


export default DailyTrackerMainPage;
