
import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import RequestCard from "./RequestCard"
import '../styles/dashboard.less'


@connect((store) => {
  return {
    users: store.user.user,
    userFetched: store.user.fetched,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }


  render() {
    let users = this.props.users;

    return (
      <div className="row">

          <div className="col-md-3">
              <p className="lead">View</p>

                <fieldset className="form-group">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" />
                          Expanded
                        </label>
                        <label className="form-check-label">
                            <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2" />
                            Collapsed
                          </label>
                      </div>
                </fieldset>
              </div>
          <div className="col-md-9">
            <div>
              {users.map((user, index) => (
                <RequestCard userInfo={user} key={index} />
              ))}
            </div>
          </div>
      </div>
      )
  }
}
