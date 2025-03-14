import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Writing extends Component {
  state = {
    showMenu: true
  };

  render() {
    const goBackButton = <div className="custom_go_back"><Link to="/english/ielts">Go Back</Link></div>;

    const localNav = <div className="english_nav">
      <ul>
        <li>
          <Link to={`${this.props.match.url}/v1_list`}>Task 1 - List</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/v1_random`}>Task 1 - Random</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/v2_list`}>Task 2 - List</Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/v2_random`}>Task 2 - Random</Link>
        </li>
      </ul>
    </div>;
    return <React.Fragment>
      {goBackButton}
      {localNav}
    </React.Fragment>;
  }
}

export default Writing;