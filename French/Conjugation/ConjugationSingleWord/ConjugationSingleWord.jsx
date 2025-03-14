import React, { Component } from 'react';
import './ConjugationSingleWord.css';
import { Link } from "react-router-dom";

import Collapsible from '../Collapsible/Collapsible.jsx';

// Import Data file
import conjugationData from '../../../data_source/french_conjugation';

class ConjugationSingleWord extends Component {
  state = {
    currentWord: {}
  };

  componentWillMount() {
    const currentWord = conjugationData.words.filter(word => +word.id === +this.props.match.params.wordId)[0];
    this.setState({currentWord});
  };

  render() {
    const goBackButton = <div className="custom_go_back"><Link to="/french/conjugation">Go Back</Link></div>;
    const currentWord = this.state.currentWord;

    const indicatif = currentWord.indicatif.map(singleWord => {
      let localContent = <ul>
        {singleWord.words.map(item => <li>{item}</li>)}
      </ul>;
      return <Collapsible title={singleWord.name} content={localContent} />
    });

    const subjonctif = currentWord.subjonctif.map(singleWord => {
      let localContent = <ul>
        {singleWord.words.map(item => <li>{item}</li>)}
      </ul>;
      return <Collapsible title={singleWord.name} content={localContent} />
    });

    const conditionnel = currentWord.conditionnel.map(singleWord => {
      let localContent = <ul>
        {singleWord.words.map(item => <li>{item}</li>)}
      </ul>;
      return <Collapsible title={singleWord.name} content={localContent} />
    });

    const participe = currentWord.participe.map(singleWord => {
      let localContent = <ul>
        {singleWord.words.map(item => <li>{item}</li>)}
      </ul>;
      return <Collapsible title={singleWord.name} content={localContent} />
    });

    const imperatif = currentWord.imperatif.map(singleWord => {
      let localContent = <ul>
        {singleWord.words.map(item => <li>{item}</li>)}
      </ul>;
      return <Collapsible title={singleWord.name} content={localContent} />
    });

    const infinitif = currentWord.infinitif.map(singleWord => {
      let localContent = <ul>
        {singleWord.words.map(item => <li>{item}</li>)}
      </ul>;
      return <Collapsible title={singleWord.name} content={localContent} />
    });

    return <div className="conjugation_single_word_container">
      {goBackButton}
      <h2>{currentWord.infinitive}</h2>
      <h3>Participe Présent: {currentWord.participePresent}</h3>
      <h3>Participe Passé: {currentWord.participePasse}</h3>
      <div className="conjugation_block">
        <p>INDICATIF</p>
        {indicatif}
      </div>
      <div className="conjugation_block">
        <p>SUBJONCTIF</p>
        {subjonctif}
      </div>
      <div className="conjugation_block">
        <p>CONDITIONNEL</p>
        {conditionnel}
      </div>
      <div className="conjugation_block">
        <p>PARTICIPE</p>
        {participe}
      </div>
      <div className="conjugation_block">
        <p>IMPÉRATIF</p>
        {imperatif}
      </div>
      <div className="conjugation_block">
        <p>INFINITIF</p>
        {infinitif}
      </div>
    </div>;
  }
}

export default ConjugationSingleWord;