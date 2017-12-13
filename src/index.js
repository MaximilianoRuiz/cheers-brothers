// Dependencies
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import * as firebase from 'firebase';

//Routes
import AppRoutes from './routes';

// Assets
import './index.css';

var config = {
    apiKey: "AIzaSyDg_tctjtf7AsC_pNWPOCM96zImm3lI3mo",
    authDomain: "cheers-brothers.firebaseapp.com",
    databaseURL: "https://cheers-brothers.firebaseio.com",
    projectId: "cheers-brothers",
    storageBucket: "cheers-brothers.appspot.com",
    messagingSenderId: "652554925891"
};
firebase.initializeApp(config);

render(
    <Router>
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);

