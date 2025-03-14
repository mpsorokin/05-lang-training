import React, { useState, useEffect } from 'react';
import './Conjugation.css';
import { Link } from "react-router-dom";

// Import Data file
import conjugationData from '../../data_source/french_conjugation';

function Conjugation() {
  const [conjugation, setConjugation] = useState({});

  useEffect(() => {
    setConjugation(conjugationData);
  }, []);

  const conjugation_list = conjugation.words || [];

  const showWordsList = conjugation_list.map(word => (
    <li key={word.id}>
      <Link to={`/french/conjugation/${word.id}`}>{word.infinitive}</Link>
    </li>
  ));

  const localNav = (
    <div className="english_nav">
      <ul>
        {showWordsList}
      </ul>
    </div>
  );

  return (
    <div className="vocabulary_container">
      <h2>Conjugation</h2>
      {localNav}
    </div>
  );
}

export default Conjugation;