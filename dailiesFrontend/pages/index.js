import React, { Component } from 'react';
import Link from 'next/link';
import {credentials} from './credentials';

//needs to check if user is already logged in

class Index extends Component {
    render(){
        console.log("token");
        console.log(credentials.user.token);
        return(
            <div>
                <h1>Welcome to Daily Tracker</h1>
                <Link href={`/login`}>
                    <a style={{ padding: 5 }}>Log in</a>
                </Link>
                <Link href={`/about`}>
                    <a style={{ padding: 5 }}>About Page</a>
                </Link>
                <Link href={`/dailytracker`}>
                    <a style={{ padding: 5 }}>Test Daily Tracker</a>
                </Link>
            </div>
        )
    }
}

export default Index
