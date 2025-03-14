import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './English.css';

class English extends Component {
  render() {
    const currentPath = window.location.pathname;

    return (
      <div>
        <h3>English</h3>
        <div className="english_nav">
          <ul>
            <li>
              <Link to={`${currentPath}/ielts`}>IELTS</Link>
            </li>
            <li>
              <Link to={`${currentPath}/vocabulary`}>Vocabulary</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default English;
