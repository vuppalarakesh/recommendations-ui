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
            <section className="grid-header container grid-960">
              <nav className="navbar">
                <section className="navbar-section">
                  <img className="lsn-logo-img"src={LogoImg}/>
                </section>
              </nav>
            </section>
          </section>
        </header>
    );
  }
}
