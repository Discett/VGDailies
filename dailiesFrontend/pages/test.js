import React, { Component } from 'react';
import axios from 'axios';
import {credentials} from './credentials';
import ReactDOM from 'react-dom';

const GW2DAILYURL = "https://api.guildwars2.com/v2/achievements/daily";
const GW2ACHIEVEMENTURL = "https://api.guildwars2.com/v2/achievements?ids=";

class GWFractalRow extends Component {
    render(){
        const data = this.props.data;
        const title = data.name;
        return(
            <p>{title}</p>
        );
    }
}

class GWFractals extends Component {
    state = {
        stringID: "",
        rows:[]
    }
    getTitles(e){
        const rows = [];
        e.forEach((data)=>{
            this.state.stringID += (data.id + ',');
        })
        axios.get(GW2ACHIEVEMENTURL + this.state.stringID)
        .then(res =>{
            res.data.forEach((data)=>{
                rows.push(<GWFractalRow data={data}/>);
            });
            //setState also rerenders UI
            this.setState({rows});
        });
    }
    render(){
        this.getTitles(this.props.data);
        return(
            <h1>{this.state.rows}</h1>
        );
    }
}

class JStest extends Component {
    state = {
        fractalData: []
    }
    componentDidMount(){
        axios.get(GW2DAILYURL)
        .then(res => {
            console.log(res);
            const fractalData = res.data.fractals;
            this.setState({fractalData});
        });
    }
    render(){
        return(
            <div>
                <h1>This is a test</h1>
                <GWFractals data={this.state.fractalData}/>
            </div>
        );
    }
}

export default JStest;
