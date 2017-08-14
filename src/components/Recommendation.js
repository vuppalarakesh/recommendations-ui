import React from "react";

import InputField from "../shared/formElements/InputField";
import '../styles/dashboard.less'

export default class Login extends React.Component {

  render() {

    var inputs = [{
      label: "Username",
      placeholder: "georgefreeny@gmail.com"
    },{
      label: "Password",
      placeholder: "*******"
    }];
    return (
      <div className="forms-container column col-12 col-sm-12">
        <div id="sidebar" className="docs-sidebar column col-3 col-sm-12">
          <ul className="docs-nav nav nav-vertical">
            <li className="nav-item">
              <a href="index.html#introduction">Getting started</a>
            </li>
            <li className="nav-item active">
              <a href="elements.html">Elements</a>
              <ul className="nav">
                <li className="nav-item">
                  <a href="elements.html#typography">Typography</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="docs-content column col-9 col-sm-12">
          <section id="typography" className="container">
            <header className="text-center"><h3><a href="#typography" className="anchor" aria-hidden="true">#</a>Typography</h3></header>
          </section>
        </div>
      </div>
      );
  }
}
