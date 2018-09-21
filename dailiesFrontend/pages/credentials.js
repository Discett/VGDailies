import React, { Component } from 'react';
//this is going to save user's credentials
export const credentials = {
    user: {
        username:'',
        token:'',
    },
};

export const credentialsContext = React.createContext(
    credentials.user
);
