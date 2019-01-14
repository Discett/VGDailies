import React, { Component } from 'react';
import Link from 'next/link';
import {credentials} from './credentials';
import {Typography, Paper, Button, Grid} from '@material-ui/core';
import Router from 'next/router';
import {withStyles} from '@material-ui/core/styles';

//needs to check if user is already logged in
const styles = {
    root:{
        padding: 0,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        margin: 0,
        position: 'absolute',
        backgroundColor: 'gray',
    },
    header:{
        position: 'absolute',
        top: '20vh',
    },
}

class Index extends Component {
    constructor(props){
        super(props);
        this.goLogin = this.goLogin.bind(this);
        this.goAbout = this.goAbout.bind(this);
    }
    goLogin(){
        Router.push('/login');
    }
    goAbout(){
        Router.push('/about');
    }
    render(){
        console.log("token");
        console.log(credentials.user.token);
        const classes = this.props.classes;
        return(
            <div className={classes.root}>
            <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
            className={classes.header}
            >
                <Typography variant='h1' align='center'>Welcome to Daily Tracker</Typography>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                <Button onClick={this.goLogin}>Login</Button>
                <Button onClick={this.goAbout}>About Page</Button>
                </Grid>
            </Grid>
                <Link href={`/dailytracker`}>
                    <a style={{ padding: 5 }}>Test Daily Tracker</a>
                </Link>
            </div>
        )
    }
}

export default withStyles(styles)(Index);
