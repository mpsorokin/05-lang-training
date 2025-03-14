import React from 'react';
import './French.css';
import { Link, useMatch } from "react-router-dom";

function French() {
  const match = useMatch('/french/*');

  const localNav = (
    <div className="english_nav">
      <ul>
        <li>
          <Link to={`${match.pathname}/vocabulary`}> Vocabulary </Link>
        </li>
        <li>
          <Link to={`${match.pathname}/conjugation`}> Conjugation </Link>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <h3>French</h3>
      {localNav}
    </div>
  );
}

export default French;