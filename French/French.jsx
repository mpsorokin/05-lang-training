import React, { Component } from 'react';
import './French.css';
import { Link } from "react-router-dom";

class French extends Component {
  render() {
    const localNav = <div className="english_nav">
      <ul>
        <li>
          <Link to={`${this.props.match.url}/vocabulary`}> Vocabulary </Link>
        </li>
        <li>
          <Link to={`${this.props.match.url}/conjugation`}> Conjugation </Link>
        </li>
      </ul>
    </div>;

    return <div>
      <h3>French</h3>
      {localNav}
    </div>;

  }
}

export default French;