import React from "react";


export default class RequestCard extends React.Component {

  render() {
    const user = this.props.userInfo;
    return (
      <div className="thumbnail letters-candidate-container-border">
          <div className="caption-full letters-student-tag">
              <h5>{user.name}</h5>
          </div>
          <div className="col-lg-12 letter-data-widget">
            <ul className="col-md-5 pull-left">
              <li><strong>Email:</strong> {user.email}</li>
              <li><strong>Organization:</strong> {user.organization}</li>
              <li><strong>Program:</strong> {user.program}</li>
            </ul>
            <ul className="col-md-3 pull-left">
              <li>{user.type}</li>
              <li>{user.programStatus}</li>
            </ul>
            <ul className="col-md-4 pull-left">
              <li><strong>Requested:</strong> {user.requestedDate}</li>
              <li><strong>CompletedBy:</strong> {user.completedDate}</li>
            </ul>
          </div>
        </div>
    );
  }
}
