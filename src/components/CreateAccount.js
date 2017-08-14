import React from "react";

import InputField from "../shared/formElements/InputField";
import CheckboxField from "../shared/formElements/CheckboxField";
import DropdownField from "../shared/formElements/DropdownField";
import RadioField from "../shared/formElements/RadioField";
import TextAreaField from "../shared/formElements/TextAreaField";
import Header from "../layout/Header";

export default class CreateAccount extends React.Component {

  render() {
    var accountInfo = [{
      label: "Primary Email/Username",
      placeholder: "georgefreeny@gmail.com"
    },{
      label: "Password",
      placeholder: "*******"
    },{
      label: "Confirm Password",
      placeholder: "*******"
    }];
    var basicInfo = [{
      label: "Title",
      placeholder: ""
    },{
      label: "First Name",
      placeholder: ""
    },{
      label: "Last Name",
      placeholder: ""
    },{
      label: "Suffix",
      placeholder: ""
    }];
    var professionalInfo = [{
      label: "Occupation",
      placeholder: ""
    },{
      label: "Organization",
      placeholder: ""
    },{
      label: "Job Title",
      placeholder: ""
    },{
      label: "Phone Number",
      placeholder: ""
    }];
    var checkboxes = [{
      label: "Terms of Use",
      checkboxLabel: "I agree to the Terms of Use"
    }];

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
                            {accountInfo.map((input, index) => (
                              <InputField fieldNames={input} key={index}/>
                            ))}
                            {checkboxes.map((checkbox, index) => (
                              <CheckboxField fieldNames={checkbox} key={index}/>
                            ))}
                            <h5 className="lsn-question-block-heading">Basic Information</h5>
                              {basicInfo.map((input, index) => (
                                <InputField fieldNames={input} key={index}/>
                              ))}
                              <h5 className="lsn-question-block-heading">Professional Information</h5>
                                {professionalInfo.map((input, index) => (
                                  <InputField fieldNames={input} key={index}/>
                                ))}
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
