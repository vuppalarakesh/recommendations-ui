import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'

export default class Footer extends React.Component {

  render() {
    return (
      <footer className="bg-gray">
        <section id="copyright" className="grid-footer container grid-960">
          <p>2017 Liaison International, Inc</p>
          <ul className="navbar-nav navbar-right">
            <li className="nav-item active">
              <a className="nav-link">Privacy Policy</a>
            </li>
            <li className="nav-item navbar-right">
              <a className="nav-link">FAQ</a>
            </li>
          </ul>
        </section>
      </footer>
    );
  }
}
