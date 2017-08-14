import React from "react";

import InputField from "../shared/formElements/InputField";
import LoginHeader from "../layout/LoginHeader";
import Footer from "../layout/Footer";
import { Route } from 'react-router-dom'


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
      <div>
      <LoginHeader/>

      <div className="container">
            <div className="row">
                <div className="col-sm-12 col-sm-offset-2 text">
                    <h1>Welcome</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-offset-3 form-box">
                	<div className="form-top">
                		<div className="form-top-right">
                		</div>
                    </div>
                    <div className="form-bottom">
                    <form role="form" className="login-form">
                      <div className="login-container-border">
                        <p><b>Log in to view a list of all your recommendation requests:</b></p>
                          {inputs.map((input, index) => (
                            <InputField fieldNames={input} key={index}/>
                          ))}
                        <button type="submit" className="lsn-primary-button lsn-expanded">Log In</button>
                        <div className="col-sm-12 forgot-password-links">
                          <a href="#" className="col-sm-6">Forgot Password</a>
                          <a href="#" className="col-sm-6 pull-right">Need Help?</a>
                        </div>
                        <p className="bold">OR</p>
                        <div>
                          <p className="bold"><b>Create an account:</b></p>
                          <p className="bold">If this is your first time using this service, please create to access your recommendation requests</p>
                        </div>
                        <Route render={({ history}) => (
                          <button
                            type="submit" className="lsn-secondary-button lsn-expanded"
                            onClick={() => { history.push('/createAccount') }}
                          >
                            Create Account
                          </button>
                        )} />
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}
