import React, { Component } from 'react';
import './App.css';
import '../node_modules/spectre.css/dist/spectre.css';
import * as firebase from 'firebase';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store"
import {routes} from "./routes"


var config = {
    apiKey: "AIzaSyChGyfsfoKti0gvDncoW3M0Xyn737vHarc",
    authDomain: "react-app-c5b38.firebaseapp.com",
    databaseURL: "https://react-app-c5b38.firebaseio.com",
    projectId: "react-app-c5b38",
    storageBucket: "",
    messagingSenderId: "1025139129666"
  };
  firebase.initializeApp(config);


class App extends Component {

  constructor(){
    super();
    this.state = {
      speed: 10
    };
  }

  componentWillMount(){
    const rootRef = firebase.database().ref().child('react');
    const speedRef = rootRef.child('speed');
    speedRef.on('value', snap => {
      this.setState({
        speed: ""
      });
    });
  }

  render() {
    return (
      <Provider store={store}>
          <Router>
            {routes}
          </Router>
        </Provider>
    );
  }
}

export default App;
