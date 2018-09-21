import React, { Component } from 'react';
import axios from 'axios';
import {credentials} from './credentials';


class Login extends Component {
    // we can put URL into credentials, probably should do this if app gets more complex
    url = 'http://127.0.0.1:8000/account/login/';

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
            url: this.url,
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
            }
        })
        .catch(function (error){
            //if error do just clear fields and display mismatch user or password
            console.log(error);
        });
    }

    render(){
        return(
            <div>
                <form className='auth_form' onSubmit={this.handleSubmit}>
                    Please enter your user name<br></br>
                    <input type='text' name='username' onChange={this.handleChangeUser}></input> <br></br>
                    Please enter your password<br></br>
                    <input type='password' name='password' onChange={this.handleChangePassword}></input>
                    <input type='submit' value='submit'></input>
                </form>
            </div>
        );
    }
}

export default Login;
