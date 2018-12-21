import React, { Component } from 'react';
import axios from 'axios';
import {credentials} from './credentials';
import Link from 'next/link';
import Router from 'next/router';
import {weblinks} from './weblinks';
import {Paper, Grid, Button, AppBar, TextField, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root:{
        backgroundColor: 'gray',
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
    paperBackground: {
        backgroundColor: 'white',
        padding: 50,
    }
}

/*
const loginStyle = {
    WebkitTransition: 'all',
    msTransition: 'all',
    height: '100%',
    width: '100%',
    margin: -8,
    position: 'absolute',
    backgroundColor: 'Gray',
};

const formStyle = {
    WebkitTransition: 'all',
    msTransition: 'all',
    //top: '50%',
    display: 'block',
    //left:'50%',
    //margin: '-70px 0 0 -170px',
    margin: '50px auto',
    position: 'absolute',
    backgroundColor: 'White',
};
*/
const strings = {
    EnterUserName: 'Username:',
    EnterPassword: 'Password:',
    LoginHeader: 'Login Page',
    Submit: 'Submit',
}

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            userSubmittedUsername: '',
            userSubmittedPassword: '',
        };
        this.handleChangeUser     = this.handleChangeUser.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit         = this.handleSubmit.bind(this);
    }
    //Listener, whenever username is changed update the state
    handleChangeUser(e){
        this.setState({userSubmittedUsername: e.target.value});
    }
    //Listener, whenever password is changed update the state
    handleChangePassword(e){
        this.setState({userSubmittedPassword: e.target.value});
    }
    //Is called when form is submitted
    handleSubmit(e){
        //required to prevent default behavior required for CORS
        e.preventDefault();
        console.log(this.url);
        //set the username, token is only set if successfully logged in
        <credentialsContext>
            {credentials.user.username = this.state.userSubmittedUsername}
        </credentialsContext>
        //query database recieves a response of token or incorrect username/password
        axios({
            method: 'post',
            url: weblinks.link.loginUrl,
            data: {
                userSubmittedUsername: this.state.userSubmittedUsername,
                userSubmittedPassword: this.state.userSubmittedPassword,
            },
            headers: {'Accept': 'token'}
        })
        .then(function (response){
            //okay reponse on accept and fail here
            console.log(response);
            if(response.data != "incorrect username or password"){
                <credentialsContext>
                    {credentials.user.token = response.data}
                </credentialsContext>
                Router.push('/dailytracker')
            }
        })
        .catch(function (error){
            //if error do just clear fields and display mismatch user or password
            console.log(error);
        });
    }

    render(){

        return(
            <Grid container className={this.props.classes.root}>
                <Grid container direction = 'column' alignItems='flex-start' justify='space-between'>
                    <AppBar> {strings.LoginHeader} </AppBar>
                </Grid>

                <Grid
                    container justify='center'alignItems='center'direction='column' position='static'style={{minHeight: '80vh'}} >
                    <Paper className={this.props.classes.paperBackground}>
                        <form onSubmit={this.handleSubmit}>
                            <Typography color='textSecondary'>{strings.EnterUserName}</Typography>
                            <TextField name='username' onChange={this.handleChangeUser} label={strings.Username}/>
                            <Typography color='textSecondary'>{strings.EnterPassword}</Typography>
                            <TextField name='password' type='password' onChange={this.handleChangePassword}/>
                            <Button type='submit' color='primary' variant='text' size='large'>{strings.Submit}</Button>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(Login);
