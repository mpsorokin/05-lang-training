import React, { Component } from 'react';
import './Conjugation.css';

import { Link } from "react-router-dom";

// Import Data file
import conjugationData from '../../data_source/french_conjugation';

class Conjugation extends Component {
  state = {
    conjugation: {}
  };

  componentWillMount() {
    this.setState({conjugation: conjugationData})
  }

  render() {
    const conjugation_list = this.state.conjugation.words;

    const showWordsList = conjugation_list.map(word => {

      return <li key={word.id}>
          <Link to={`${this.props.match.url}/${word.id}`}>{word.infinitive}</Link>
        </li>;
    });

    const localNav = <div className="english_nav">
      <ul>
        {showWordsList}
      </ul>
    </div>;

    return  <div className="vocabulary_container">
      <h2>Conjugation</h2>
      {localNav}
    </div>;
  }
}

export default Conjugation;