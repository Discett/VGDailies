import React, { Component } from 'react';
//import axios from 'axios';
import {credentials} from './credentials';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
//import dailydatastyles from './styles/dailydatastyles.css'

//DailyData: will contain the data for the user's dailies
//contains view that will load the information
//also a textbox, time in which the daily resets, and submit button

//TODO: eventually implement daylight savings
//TODO: switch statement per game since JSON's per game is case by case
//TODO: specific games would need their own class to display data in DailyDataBox



//TODO: what does setAppElement do?
//Modal.setAppElement('#root');

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

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

    constructor(){
        super();
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    openModal(){
        this.setState({modalIsOpen:true});
    }

    closeModal(){
        this.setState({modalIsOpen:false});
    }

    afterOpenModal(){
        this.subtitle.style.color = '#f00';
    }
//TODO: Modal submit needs to add to games in backend
    render(){
        let button;
        if(this.props.showAddButton){
            button = <button type="button" onClick={this.openModal}>Click to edit dailies</button>;
        }
        return(
            <div>
                <h1>{button}</h1>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.state.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Modify daily menu"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Add Game Daily</h2>
                      <button onClick={this.closeModal}>close</button>
                      <div>Please input daily name and time of reset</div>
                      <form>
                        <input />
                        <input type="time"/>
                        <button>submit</button>
                      </form>
                </Modal>
            </div>
        );
    }
}

AddDailyInformation.defaultProps = {
    showAddButton: true
};

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
                <AddDailyInformation showAddButton={this.props.showAddButton}/>
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
