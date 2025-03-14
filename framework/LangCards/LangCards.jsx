import React, { Component } from 'react';
import './LangCards.css';

import SingleCard from './SingleCard/SingleCard.jsx';
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

class LangCards extends Component {
  state = {
    currentWordId: 0,
    wordsNumber: 0,
    wordsHasFinished: false,
    preparedWords: []
  };

  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  prepareWords = () => {
    this.setState({preparedWords: this.shuffleArray(this.props.words)});
  };

  componentWillMount() {
    this.prepareWords();
    this.setState({wordsNumber: this.props.words.length});
  }

  repeatLesson = () => {
    this.prepareWords();
    this.setState({wordsHasFinished: false});
    return this.setState({currentWordId: 0});
  };

  nextWord = () => {
    let oldWord = this.state.currentWordId;
    if (oldWord === this.state.wordsNumber - 1) {
      return this.setState({wordsHasFinished: true});
    } else {
      return this.setState({currentWordId: oldWord + 1});
    }
  };

  goBack = () => window.history.back();

  render() {
    const currentCardId = this.state.currentWordId;
    const wordsAvailable = <React.Fragment>
      <ProgressBar
        itemsLength={this.state.wordsNumber}
        currentItem={this.state.currentWordId}
        pushedBack={() => this.goBack()}
      />

      {/*<h3>Word # {this.state.currentWordId + 1}</h3>*/}
      <SingleCard currentWord={this.state.preparedWords[currentCardId]} onNextWord={() => this.nextWord()}/>
    </React.Fragment>;

    const wordsUnavailable = <React.Fragment>
      <p>Words has finished</p>
      <div className="finished_words_button_container">
        <div onClick={this.goBack} className="button_go_back">Go Back</div>
        <div onClick={this.repeatLesson} className="button_repeat">Repeat lesson</div>
      </div>
    </React.Fragment>;

    const showContent = this.state.wordsHasFinished ? wordsUnavailable : wordsAvailable;

    return <React.Fragment>
      {showContent}
    </React.Fragment>;
  }
}

export default LangCards;