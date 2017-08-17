import React from "react";

import InputField from "../shared/formElements/InputField";
import CheckboxField from "../shared/formElements/CheckboxField";
import DropdownField from "../shared/formElements/DropdownField";
import RadioField from "../shared/formElements/RadioField";
import TextAreaField from "../shared/formElements/TextAreaField";
import Header from "../layout/Header";

export default class CreateAccount extends React.Component {
  constructor(){
    super();
    this.state = {
       questionBlocks:[
          {
             id:'accountinfo',
             data:{
               username:'',
               password:'',
               confirmPassword:'',
               terms:'',
             }
           },{
             id:'basicInfo',
             data:{
               title:'',
               firstName:'',
               lastName:'',
               suffix:'',
             }
           },{
             id:'professionalInfo',
             data:{
               occupation:'',
               organization:'',
               jobTitle:'',
               phone:'',
             }
           }
       ]
     }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(propertyName, event) {
    const userInfo = this.state;
    userInfo[propertyName] = event.target.value;
    this.setState({ userInfo });
  }

  render() {
    return (
      <div>
        <Header/>
      <form className="form-horizontal">
        <div className="container">
              <div className="row">
                  <div className="col-sm-12 col-sm-offset-2 text">
                      <h1>Create an account</h1>
                  </div>
              </div>
              <div className="row">
                  <div className="col-sm-6 col-sm-offset-3 form-box">
                  	<div className="form-top">
                  		<div className="form-top-right">
                        <form role="form" className="login-form">
                          <div className="forms-container-border">
                            <h5 className="lsn-question-block-heading">Account Information</h5>
                              <InputField
                                inputType={'text'}
                                title={'Username'}
                                name={'name'}
                                controlFunc={this.handleChange.bind(this, 'username')}
                                content={this.state.ownerName}
                                placeholder={'georgefreeny@gmail.com'}
                                required={true}/>

                              <InputField
                      					inputType={'password'}
                      					title={'Password'}
                      					name={'password'}
                      					controlFunc={this.handleChange.bind(this, 'password')}
                      					content={this.state.ownerName}
                      					placeholder={'*******'}
                                required={true}/>

                              <InputField
                      					inputType={'password'}
                      					title={'Confirm Password'}
                      					name={'confirmPassword'}
                      					controlFunc={this.handleChange.bind(this, 'confirmPassword')}
                      					content={this.state.ownerName}
                      					placeholder={'*******'}
                                required={true}/>

                              <CheckboxField
                                title={'Terms of Use'}
                                checkboxLabel={'I agree to the Terms of Use'}
                                controlFunc={this.handleChange.bind(this, 'confirmPassword')}
                                content={this.state.ownerName}
                                required={true}
                                />
                            <h5 className="lsn-question-block-heading">Basic Information</h5>
                              <InputField
                                inputType={'text'}
                                title={'Username'}
                                name={'name'}
                                controlFunc={this.handleChange.bind(this, 'username')}
                                content={this.state.ownerName}
                                placeholder={'georgefreeny@gmail.com'}
                                required={true}/>

                              <InputField
                                inputType={'text'}
                                title={'First Name'}
                                name={'firstName'}
                                controlFunc={this.handleChange.bind(this, 'firstName')}
                                content={this.state.firstName}
                                placeholder={'George'}
                                required={true}/>

                                <InputField
                                  inputType={'text'}
                                  title={'Last Name'}
                                  name={'lastName'}
                                  controlFunc={this.handleChange.bind(this, 'lastName')}
                                  content={this.state.lastName}
                                  placeholder={'Freeny'}
                                  required={true}/>

                                <InputField
                                  inputType={'text'}
                                  title={'Suffix'}
                                  name={'suffix'}
                                  controlFunc={this.handleChange.bind(this, 'suffix')}
                                  content={this.state.suffix}
                                  placeholder={'Mr.'}
                                  required={true}/>

                            <h5 className="lsn-question-block-heading">Professional Information</h5>
                              <InputField
                                inputType={'text'}
                                title={'Occupation'}
                                name={'occupation'}
                                controlFunc={this.handleChange.bind(this, 'occupation')}
                                content={this.state.occupation}
                                placeholder={'Software Engineer'}
                                required={true}/>

                              <InputField
                                inputType={'text'}
                                title={'Organization'}
                                name={'organization'}
                                controlFunc={this.handleChange.bind(this, 'organization')}
                                content={this.state.organization}
                                placeholder={'Liaison'}
                                required={true}/>

                              <InputField
                                inputType={'text'}
                                title={'Job Title'}
                                name={'jobTitle'}
                                controlFunc={this.handleChange.bind(this, 'jobTitle')}
                                content={this.state.suffix}
                                placeholder={''}
                                required={true}/>

                            <DropdownField />
                              <button type="submit" className="lsn-primary-button lsn-medium-button">Create Account</button>
                          </div>
                        </form>
                      </div>
                      </div>
                      <div className="form-bottom">
                    </div>
                  </div>
              </div>

          </div>
      </form>
      </div>
    );
  }
}
