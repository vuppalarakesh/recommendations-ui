import React from "react";

export default class InputField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="col-3 pull-left">
          <label className="form-label" htmlFor="input-example-4">{this.props.fieldNames.label}</label>
        </div>
        <div className="col-9 pull-left">
          <input className="form-input" type="text" id="input-example-4" placeholder={this.props.fieldNames.placeholder} />
        </div>
      </div>
    );
  }
}
