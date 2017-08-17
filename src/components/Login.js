import React from "react";

import InputField from "../shared/formElements/InputField";
import LoginHeader from "../layout/LoginHeader";
import Footer from "../layout/Footer";
import { Route } from 'react-router-dom'


export default class Login extends React.Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password:'',
      disabled:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    const userInfo = this.state;
    userInfo[propertyName] = event.target.value;
    this.setState({ userInfo });
  }

  handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			username: this.state.username,
      password: this.state.password
		};
		console.log('Send this in a POST request:', formPayload);
	}

  render() {
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
                    <form role="form" className="login-form" onSubmit={this.handleFormSubmit}>
                      <div className="login-container-border">
                        <p><b>Log in to view a list of all your recommendation requests:</b></p>

                          <InputField
                  					inputType={'text'}
                  					title={'Username'}
                  					name={'name'}
                  					controlFunc={this.handleChange.bind(this, 'username')}
                  					content={this.state.ownerName}
                  					placeholder={'Username'}
                            required={true}/>

                          <InputField
                  					inputType={'password'}
                  					title={'Password'}
                  					name={'password'}
                  					controlFunc={this.handleChange.bind(this, 'password')}
                  					content={this.state.ownerName}
                  					placeholder={'*******'}
                            required={true}/>

                          <Route render={({ history}) => (
                            <button type="submit"
                              disabled={!this.state.username || !this.state.password}
                              onClick={() => { history.push('/recommendation') }}
                              className="lsn-primary-button lsn-expanded">Log In</button>
                          )} />
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
                            type="submit"
                            className="lsn-secondary-button lsn-expanded"
                            onClick={() => { history.push('/createAccount') }}>
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
