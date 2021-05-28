import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Routes from './Routes';
import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBszDdcE7Tpkzl0iyi4XFSEcRgt615n_Ks",
    authDomain: "crm-app-4377c.firebaseapp.com",
    databaseURL: "https://crm-app-4377c.firebaseio.com",
    projectId: "crm-app-4377c",
    storageBucket: "",
    messagingSenderId: "420363067630",
    appId: "1:420363067630:web:ef4f954625334a2dddd3ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function App() {
    return (
        <Router>
            <div className="container-fluid">
                <Navbar />
                <Routes />
            </div>
        </Router>
    );
}

export default App;
