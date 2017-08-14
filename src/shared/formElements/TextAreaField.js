import React from "react";

export default class TextareaField extends React.Component {
  render() {
    return (
      <div className="form-group">
          <div className="col-3 pull-left">
            <label className="form-label" htmlFor="input-example-4">Test RadioField</label>
          </div>
          <div className="col-6 pull-left">
            <textarea className="form-input" id="input-example-3" placeholder="Textarea" rows="3"></textarea>
            </div>
        </div>
    );
  }
}
