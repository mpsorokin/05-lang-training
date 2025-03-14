import React from 'react';
import { Link, useMatch } from "react-router-dom";

function Speaking() {
  const match = useMatch('/english/ielts/speaking/*');
  const goBackButton = <div className="custom_go_back"><Link to="/english/ielts">Go Back</Link></div>;

  const localNav = (
    <div className="english_nav">
      <ul>
        <li>
          <Link to={`${match.pathname}/v1_list`}>Task 2 - List</Link>
        </li>
        <li>
          <Link to={`${match.pathname}/v1_random`}>Task 2 - Random</Link>
        </li>
        <li>
          <Link to={`${match.pathname}/v2_list`}>Task 3 - List</Link>
        </li>
        <li>
          <Link to={`${match.pathname}/v2_random`}>Task 3 - Random</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      {goBackButton}
      {localNav}
    </>
  );
}

export default Speaking;