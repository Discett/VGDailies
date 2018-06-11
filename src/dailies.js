import React, { Component } from 'react';
import './dailies.css'

class Dailies extends Component {
    render(){
        return(
            <form className='auth form'>
                Please enter your user name<br></br>
                <input type='text' name='username'></input> <br></br>
                Please enter your password<br></br>
                <input type='password' name='password'></input>
                <input type='submit' value='submit'></input>
            </form>
        );
    }
}

export default Dailies;
