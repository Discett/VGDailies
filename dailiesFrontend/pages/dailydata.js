import React, { Component } from 'react';
//import axios from 'axios';
import {credentials} from './credentials';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {weblinks} from './weblinks';
import axios from 'axios';

//import dailydatastyles from './styles/dailydatastyles.css'

//DailyData: will contain the data for the user's dailies
//contains view that will load the information
//also a textbox, time in which the daily resets, and submit button

//TODO: eventually implement daylight savings
//TODO: switch statement per game since JSON's per game is case by case
//TODO: specific games would need their own class to display data in DailyDataBox

//TODO: add didReset to frontend
//TODO: reroute back to login when refreshed
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        height                : '500px',
        overflow              : 'auto'
      }
};

//Modal.setAppElement(el)

//needs to display that and handle delete button
//needs more css to move button to the right
class ModalRow extends Component {

    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e){
        console.log('Remove');
        axios({
            method: 'post',
            url: weblinks.link.removeDailies,
            data: {
                username:   credentials.user.username,
                token:      credentials.user.token,
                title:      this.props.data.title,
            },
        })
        .then(function (response){
            //update UI
            //forceupdate component
            this.props.updateRemove(this.props.data.title);
            console.log(response);
        }.bind(this))
        .catch(function (error){
            console.log(error);
        });
    }

    render(){
        const data = this.props.data;
        const title = data.title;
        return(
            <div>
                <h1>{title}</h1>
                <button onClick={this.handleRemove}>remove</button>
            </div>
        );
    }
}
//query database for info add to row and loop
class ModalContainer extends Component {
    state = {
        rows:[]
    }
    //this is before render
    componentDidMount(){
        this.setState({rows:this.props.data});
    }
    render(){
        const display = [];
        this.state.rows.forEach((row)=>{
            display.push(<ModalRow data={row.fields} key={row.fields.title} updateRemove={this.props.updateRemove}/>);
        });
        return(
            <div>{display}</div>
        );
    }
}

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
            modalIsOpen: false,
            title:'',
            time:'',
        };
        this.openModal          = this.openModal.bind(this);
        this.afterOpenModal     = this.afterOpenModal.bind(this);
        this.closeModal         = this.closeModal.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);
        this.handleTimeChange   = this.handleTimeChange.bind(this);
        this.handleTitleChange  = this.handleTitleChange.bind(this);
    };

    componentWillMount(){
        Modal.setAppElement('body');
    }

    openModal(){
        this.setState({modalIsOpen:true});
    }

    closeModal(){
        this.setState({modalIsOpen:false});
    }

    afterOpenModal(){
        this.subtitle.style.color = '#f00';
    }

    handleTimeChange(e){
        this.setState({time: e.target.value});
    }

    handleTitleChange(e){
        this.setState({title: e.target.value});
        console.log(this.state.title);
    }
    handleSubmit(e){
        console.log("info submitted");
        console.log(this.state.title);
        console.log(this.state.time);
        axios({
            method: 'post',
            url: weblinks.link.addDailies,
            data: {
                username:       credentials.user.username,
                token:          credentials.user.token,
                title:          this.state.title,
                resetTime:      this.state.time,
            },
        })
        .then(function (response){
            console.log('success');
            this.props.updateAdd(this.state.title,this.state.time);
            console.log(response);
        }.bind(this))
        .catch(function (error){
            console.log(error);
        });
        this.closeModal();
    }
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
                        <input type='text' name='title' onChange={this.handleTitleChange}/>
                        <input type="time" name='time'onChange={this.handleTimeChange}/>
                        <input type='submit' value='submit' onClick={this.handleSubmit}/>
                      <div>
                        <ModalContainer data={this.props.data} updateRemove={this.props.updateRemove}/>
                      </div>
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
        console.log("dailyInformation");
        //console.log(this.props.data);
        this.props.data.forEach((data)=>{
            rows.push(
                <DailyRow data={data.fields} key={data.fields.title}/>
            );
            console.log(data.fields.title);
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
    constructor(props){
        super(props);
        this.updateRemove = this.updateRemove.bind(this);
        this.updateAdd    = this.updateAdd.bind(this);
    }

    state = {
        dailyData:[]
    }

    componentDidMount(){
        axios({
            method: 'post',
            url: weblinks.link.getDailies,
            data: {
                username: credentials.user.username,
                token: credentials.user.token,
            },
        })
        .then(function (response){
            //okay reponse on accept and fail here
            //console.log(response);
            if(response.data != "incorrect username or password"){
                this.setState({dailyData:response.data});
            }
        }.bind(this))
        .catch(function (error){
            //if error do just clear fields and display mismatch user or password
            console.log(error);
        });
    }
    updateRemove(removed){
        var updateData = this.state.dailyData;
        for(let i = 0; i < updateData.length; i++){
            console.log(updateData[i].fields.title);
            if(removed == updateData[i].fields.title){
                updateData.splice(i,1)
                this.setState({dailyData: updateData});
            }
        }
    }

    updateAdd(title,time){
        var updateAddedDaily = {fields:{title:title,reset:null,resetTime:time}};
        this.state.dailyData.push(updateAddedDaily);
        this.setState({dailyData:this.state.dailyData})
    }

    render(){
        //console.log("token");
        //console.log(credentials.user.token);
        //console.log(this.state.dailyData);
        return(
            <div>
                <DailyInformation data={this.state.dailyData}/>
                <AddDailyInformation showAddButton={this.props.showAddButton} data={this.state.dailyData} updateRemove={this.updateRemove} updateAdd={this.updateAdd}/>
            </div>
        );
    }
}

export default DailyDataBox;
