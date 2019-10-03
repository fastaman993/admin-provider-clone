import React, { Component } from "react";

export class UserCard extends Component {
  convertTimeStamp = timeStamp => {
    timeStamp.toString();
    return timeStamp.slice(0, 10);
  };
  render() {
    let data = this.props.dataUser;
    console.log(data);

    return (
      <div className="card card-user" style={{ overflow: "hidden" }}>
        <div className="content">
          <h4 className="title">
            Report
            <br />
            <small>Dummy Dulu</small>
            <br />
          </h4>
          <p className="description text-center">{this.props.report}</p>
        </div>
        <hr />
        <div
          className="text-center"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          <span>{this.convertTimeStamp(this.props.date)}</span>
        </div>
      </div>
    );
  }
}

export default UserCard;
