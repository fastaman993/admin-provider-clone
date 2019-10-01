import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Category extends Component {
  render() {
    return (
      <div className="card card-stats">
        <div className="content">
          <Row>
            {/* <Col xs={5}>
              <div className="icon-big text-center icon-warning">
                {this.props.bigIcon}
              </div>
            </Col> */}
            <Col xs={7}>
              <div className="numbers">
                <p>{this.props.name}</p>
              </div>
            </Col>
          </Row>
          <div className="footer">
            <hr />
            <div className="stats">
              {this.props.subCategories.map((sub, index) => {
                return (
                  <Link to={`/page/item/${sub.id}`}>
                    <p style={{ color: "#919191" }}>{sub.name}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
