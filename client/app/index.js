import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import Routes from './routes';

const config = {
    apiKey: "AIzaSyCyjwM6Ml4E815riIVSlJhP3zoqwLI4n3Y",
    authDomain: "virtuoso-12e7f.firebaseapp.com",
    databaseURL: "https://virtuoso-12e7f.firebaseio.com",
    storageBucket: "virtuoso-12e7f.appspot.com",
    messagingSenderId: "469833865469"
};
const app = firebase.initializeApp(config);
const database = app.database();
const storage = app.storage();
console.log("Initialized Firebase App");

ReactDOM.render(
    <Routes />,
    document.getElementById('app')
);


