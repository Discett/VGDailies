import React, { Component } from 'react';
//import axios from 'axios';
import {credentials} from './credentials';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {weblinks} from './weblinks';
import axios from 'axios';
import {withStyles} from '@material-ui/core/styles'
import {Dialog,Typography,Grid,Button,Input,Paper,Table,TableRow,TableCell,TableHead,TableBody} from '@material-ui/core/';

//import dailydatastyles from './styles/dailydatastyles.css'

//DailyData: will contain the data for the user's dailies
//contains view that will load the information
//also a textbox, time in which the daily resets, and submit button

//TODO: eventually implement daylight savings
//TODO: switch statement per game since JSON's per game is case by case
//TODO: specific games would need their own class to display data in DailyDataBox

//TODO: reroute back to login when refreshed
//TODO: UI can still add duplicates when adding daily. Server is does not
const styles = {
    root: {
        position: 'absolute',
    },
    modalWindow: {
        height:'500px',
        width: '500px',
        margin: 'auto',
        overflow: 'auto',
        position: 'absolute',
        top: '10vh',
        left: '50vh',
        right: '50vh',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: '#3f51b5',
        backgroundColor: 'white',
    },
    closeButton: {
        color: 'black',
        fontWeight: 'bold',
        float:'right',
    },
    modalFooter:{
        paddingBottom: 50,
    },
    submitButton:{
        marginTop: 10,
    },
}

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
        const classes = this.props.classes;
        const data = this.props.data;
        const title = data.title;
        return(
            <div>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Typography variant='subtitle1'>{title}</Typography>
                    <Button size='small' onClick={this.handleRemove}>remove</Button>
                </Grid>
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
        const classes = this.props.classes;
        const display = [];
        this.state.rows.forEach((row)=>{
            display.push(<ModalRow data={row.fields} key={row.fields.title} updateRemove={this.props.updateRemove} classes={classes}/>);
        });
        return(
            <div>{display}</div>
        );
    }
}

class DailyRow extends Component{
    constructor(props){
        super(props);
        this.showFinishDaily = this.showFinishDaily.bind(this);
        this.setFinishDaily  = this.setFinishDaily.bind(this);
        this.hasDailyReset   = this.hasDailyReset.bind(this);
    }

    setFinishDaily(){
        console.log('setFinishDaily');
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate()+1);
        const dateFormat = tomorrow.getFullYear() + '-' + (tomorrow.getMonth()+1) + '-' + tomorrow.getDate();
        axios({
            method: 'post',
            url: weblinks.link.setDailyDate,
            data: {
                username:       credentials.user.username,
                token:          credentials.user.token,
                title:          this.props.data.title,
                reset:          dateFormat,
            },
        })
        .then(function (response){
            this.props.updateTime(this.props.data.title,dateFormat);
            console.log('success');

        }.bind(this))
        .catch(function (error){
            console.log(error);
        });
    }
//TODO: update UI
    hasDailyReset(){
        const UTCstringmodifier = 'T' + this.props.data.resetTime;
        console.log('hasDailyReset');
        var resetDate = new Date();
        resetDate.setTime(Date.parse(this.props.data.reset + UTCstringmodifier));
        console.log('reset date');
        console.log(Date.parse(resetDate));
        if(Date.now() > Date.parse(this.props.data.reset + UTCstringmodifier)){
            console.log("day has past");
            return true;
        }
        return false;
    }

    showFinishDaily(){
        console.log(this.props.data);
        //this needs to also check if the reset is yesterday
        if(this.props.data.reset == null || this.hasDailyReset()){
            return <Button variant="outlined"onClick={this.setFinishDaily}>not complete</Button>
        }
        return <Button>Completed</Button>
    }
    render(){
        const data = this.props.data;
        const title = data.title;

        return(
            <TableRow>
                <TableCell>{title}</TableCell>
                <TableCell align="right">{this.showFinishDaily()}</TableCell>
            </TableRow>
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
        const classes = this.props.classes;
        let button;
        if(this.props.showAddButton){
            button = <Button type="button" onClick={this.openModal} variant='contained'>Click to edit dailies</Button>;
        }
        return(
            <div>
                <h1>{button}</h1>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.state.afterOpenModal}
                    onRequestClose={this.closeModal}
                    className={classes.modalWindow}
                    contentLabel="Modify daily menu"
                >
                    <Button color='inherit'size='small'
                    variant='flat' onClick={this.closeModal}
                    className={classes.closeButton}>Close</Button>
                    <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    >
                        <Typography variant='h3' ref={subtitle => this.subtitle = subtitle}>Add Game Daily</Typography>
                        <Typography variant='caption'>Please input daily name and time of reset</Typography>
                        <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        >
                            <Input type='text' name='title'onChange={this.handleTitleChange}/>
                            <Input type="time" name='time'onChange={this.handleTimeChange}/>
                        </Grid>
                        <Button variant='contained'color='inherit'
                        className={classes.submitButton} size='small'
                        type='submit'onClick={this.handleSubmit}>
                        Submit
                        </Button>
                      <div className={classes.modalFooter}>
                        <ModalContainer data={this.props.data} updateRemove={this.props.updateRemove} classes={classes}/>
                      </div>
                  </Grid>
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
                <DailyRow data={data.fields} key={data.fields.title} updateTime={this.props.updateTime}/>
            );
            console.log(data.fields.title);
        })
        return(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>

        );
    }
}

class DailyDataBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            dailyData:[],
            intervalId: null,
        }
        this.updateRemove = this.updateRemove.bind(this);
        this.updateAdd    = this.updateAdd.bind(this);
        this.updateTime   = this.updateTime.bind(this);
        this.intervalTick = this.intervalTick.bind(this);
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
        setInterval(this.intervalTick, 5000);
    }

    intervalTick(){
        this.setState({ intervalId: Date.now() });
    }

    componentWillUnmount(){
        clearInterval(this.state.intervalId)
    }

    updateRemove(removed){
        const updateData = this.state.dailyData;
        for(let i = 0; i < updateData.length; i++){
            console.log(updateData[i].fields.title);
            if(removed == updateData[i].fields.title){
                updateData.splice(i,1)
                this.setState({dailyData: updateData});
            }
        }
    }

    updateAdd(title,time){
        const updateAddedDaily = {fields:{title:title,reset:null,resetTime:time}};
        this.state.dailyData.push(updateAddedDaily);
        this.setState({dailyData:this.state.dailyData})
    }

    updateTime(title,date){
        console.log(this.state.dailyData);
        const updateData = this.state.dailyData;
        for(let i = 0; i < updateData.length; i++){
            console.log(updateData[i].fields.title);
            if(title == updateData[i].fields.title){
                updateData[i].fields.reset = date;
                this.setState({dailyData: updateData});
            }
        }
    }

    render(){
        console.log("token");
        //console.log(credentials.user.token);
        //console.log(this.state.dailyData);
        return(
            <div>
                <DailyInformation data={this.state.dailyData} updateTime={this.updateTime}/>
                <AddDailyInformation showAddButton={this.props.showAddButton} data={this.state.dailyData}
                 updateRemove={this.updateRemove} updateAdd={this.updateAdd} classes={this.props.classes}/>
            </div>
        );
    }
}

export default withStyles(styles)(DailyDataBox);
