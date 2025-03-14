import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home_container">
        <h2>Choose your language</h2>
        <div className="english_nav">
          <ul>
            <li>
              <Link to="/english">English</Link>
            </li>
            <li>
              <Link to="/french">French</Link>
            </li>
          </ul>
        </div>
        <h3>
          <Link to="/results">Results</Link>
        </h3>
      </div>
    );
  }
}

export default Home;
