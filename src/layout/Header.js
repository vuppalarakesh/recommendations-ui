import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import LogoImg from '../images/Logo.png';

export default class Header extends React.Component {

  render() {
    return (
          <header>
            <section className="section section-header bg-gray">
            <section className="grid-header container">
              <nav className="navbar">
                <section className="navbar-section">
                  <img className="lsn-logo-img-home"src={LogoImg}/>
                </section>
                <section className="navbar-section">
                  <ul className="navbar-nav navbar-right">
                    <li className="nav-item active">
                      <NavLink exact className="nav-link" to="/recommendation">Home</NavLink>
                    </li>
                    <li className="nav-item navbar-right">
                      <NavLink className="nav-link" to="/login">Logout</NavLink>
                    </li>
                  </ul>
                </section>
              </nav>
            </section>
          </section>
        </header>
    );
  }
}
