import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import { Provider } from "react-redux"
import './App.css';
import '../node_modules/spectre.css/dist/spectre.css';
//import Dashboard from "./co;mponents/Dashboard";
import CreateAccount from "./components/CreateAccount";
import Recommendation from "./components/Recommendation";
import Login from "./components/Login";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export const routes = (
  <div className="App">
    <Route exact path="/" component={Login}/>
    <Route exact path="/createAccount" component={CreateAccount}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/recommendation" component={Recommendation}/>
  </div>
);
