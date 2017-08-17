import React from "react";

export default class CheckboxField extends React.Component {
  render() {
    return (
          <div className="form-group">
            <div className="col-3 pull-left">
              <label className="form-label" htmlFor="input-example-4">{this.props.title}</label>
            </div>
            <div className="col-6 pull-left">
              <input type="checkbox"/>
              <i className="form-icon"></i> {this.props.checkboxLabel}
            </div>
          </div>
    );
  }
}
