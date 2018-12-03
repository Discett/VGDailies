import React, { Component } from 'react';
//this is going to save user's credentials
export const weblinks = {
    link: {
        getDailies:'http://127.0.0.1:8000/account/getUserDailies/',
        removeDailies:'http://127.0.0.1:8000/account/removeUserDaily/',
        addDailies:'http://127.0.0.1:8000/account/addUserDaily/',
        setDailyDate:'http://127.0.0.1:8000/account/setDailyDate/',
    },
};

export const weblinksContext = React.createContext(
    weblinks.link
);
