import React, { Component } from 'react';
import axios from 'axios';
import './login.css'



class Login extends Component {

    URL = {
        url: 'http://127.0.0.1:8000/login/',
    };

    state = {
        userSubmittedUsername: '',
        userSubmittedPassword: '',
    }

    handleChangeUser = event => {
        this.setState({userSubmittedUsername: event.target.value});
    }

    handleChangePassword = event => {
        this.setState({userSubmittedPassword: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.URL.url);
        axios.post(this.URL.url, {
            userSubmittedUsername: this.state.userSubmittedUsername,
            userSubmittedPassword: this.state.userSubmittedPassword
        })
        .then(function (response){
            //okay reponse on accept and fail here
            console.log(response);
        })
        .then(function (error){
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
