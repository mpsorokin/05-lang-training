import React from 'react';
import { Link } from "react-router-dom";

function IELTS() {
  const currentPath = window.location.pathname;

  return (
    <>
      <div className="custom_go_back">
        <Link to="/english">Go Back</Link>
      </div>
      <h3>Choose a module</h3>
      <div className="english_nav">
        <ul>
          <li>
            <Link to={`${currentPath}/writing`}>Writing</Link>
          </li>
          <li>
            <Link to={`${currentPath}/speaking`}>Speaking</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default IELTS;