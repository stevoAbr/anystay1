import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomeScreen from './screens/Home';
import Header from './components/Header';
// import ComingSoon from './screens/Coming_Soon';


function App() {
  return (
    <Router>
        <div className="App">
        <Header />
        <HomeScreen />
        
        </div>
    </Router>
    
  );
}

export default App;