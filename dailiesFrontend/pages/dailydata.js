import React, { Component } from 'react';
//import axios from 'axios';
import {credentials} from './credentials';
import ReactDOM from 'react-dom';

//DailyData: will contain the data for the user's dailies
//contains view that will load the information
//also a textbox, time in which the daily resets, and submit button


//TODO: eventually implement daylight savings
//TODO: switch statement per game since JSON's per game is case by case
//TODO: specific games would need their own class to display data in DailyDataBox


class DailyRow extends Component{
    render(){
        const data = this.props.data;
        const title = data.title;

        return(
            <tr>
                <td>{title}</td>
                <td>{data.time_to_reset}</td>
            </tr>
        );
    }
}

class AddDailyInformation extends Component {
    render(){
        return(
            <button type="button">Click to add daily</button>
        );
    }
}

class DailyInformation extends Component {
    render(){
        const rows = [];
        this.props.data.forEach((data)=>{
            rows.push(
                <DailyRow data={data} key={data.title}/>
            );
        })
        return(
            <table>
                <thread>
                    <tr>
                        <th>Title</th>
                        <th>Is completed</th>
                    </tr>
                </thread>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class DailyDataBox extends Component {
    render(){
        return(
            <div>
                <DailyInformation data={DATA} />
                <AddDailyInformation/>
            </div>
        );
    }
}

const DATA = [
    {title: 'Overwatch', date: new Date(), time_to_reset: 5, dailies_completed: false},
    {title: 'GW2', date: new Date(), time_to_reset: 5, dailies_completed: false},
    {title: 'TF2', date: new Date(), time_to_reset: 5, dailies_completed: false},
    {title: 'Dragalia', date: new Date(), time_to_reset: 5, dailies_completed: false},
    {title: 'Spooky\'s House', date: new Date(), time_to_reset: 5, dailies_completed: false}
];

export default DailyDataBox;
//if (typeof window !== 'undefined'){
//    ReactDOM.render(
//        <DailyInformation data={DATA} />,
//        document.getElementById('container')
//    );
//}
