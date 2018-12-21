import {Paper, Grid, Button, AppBar, TextField, Typography, Toolbar} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import React, { Component } from 'react';

//Whatever is passed in from the header check and provide links as followed
const styles = {
    header:{
        color: 'white',
    },
    menubutton:{
        color: 'blue',
        flexGrow: 1,
    },
};

class dailyAppBar extends Component{
    render(){
        return(
            <AppBar positon='static'>
                <Toolbar>
                    <Typography className={this.props.classes.header}>About Page</Typography>
                    <Button className={this.props.classes.menubutton}>TestButton1</Button>
                    <Button className={this.props.classes.menubutton}>TestButton2</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(dailyAppBar);
