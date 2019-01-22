import {Paper, Grid, Button, AppBar, TextField, Typography, Toolbar, IconButton } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import React, { Component } from 'react';
import Router from 'next/router';


//Whatever is passed in from the header check and provide links as followed
const styles = {
    root:{
        width: '100%',
        position: 'fixed',
    },
    grow:{
        flexGrow: 1,
    },
    header:{
        padding: 0,
        margin: 0,
        color: 'white',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
  },
};



class dailyAppBar extends Component{
    constructor(props){
        super(props);
        this.goHome = this.goHome.bind(this);
        this.goAbout = this.goAbout.bind(this);
    }

    goHome(){
        Router.push('/');
    }

    goAbout(){
        Router.push('/about');
    }
    render(){
        const classes = this.props.classes;
        return(
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        </IconButton>
                        <Typography variant='h6' color='inherit' className={classes.grow}>
                            {this.props.name}
                        </Typography>
                        <Button color="inherit" onClick={this.goHome}>Home</Button>
                        <Button color="inherit" onClick={this.goAbout}>About</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(dailyAppBar);
