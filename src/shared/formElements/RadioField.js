import React from "react";

export default class RadioField extends React.Component {
  render() {
    return (
      <div className="form-group">
          <div className="col-3 pull-left">
            <label className="form-label" htmlFor="input-example-4">Test RadioField</label>
          </div>
          <div className="col-6 pull-left">
          <label className="form-radio">
            <input type="radio" name="gender" />
            <i className="form-icon"></i> Male
          </label>
          <label className="form-radio">
            <input type="radio" name="gender" checked />
            <i className="form-icon"></i> Female
          </label>
        </div>
      </div>
    );
  }
}
