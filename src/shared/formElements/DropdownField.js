import React from "react";

export default class DropdownField extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="col-3 pull-left">
          <label className="form-label" htmlFor="input-example-4">Type</label>
        </div>
        <div className="col-6 pull-left">
          <select className="form-select">
            <option>Choose an option</option>
            <option>Cell</option>
            <option>Skype</option>
            <option>Hipchat</option>
          </select>
        </div>
      </div>
    );
  }
}
