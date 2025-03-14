import React, { Component } from 'react';
import './WordsWriting.css';

import SingleWriting from './SingleWriting/SingleWriting.jsx';
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

class WordsWriting extends Component {
  state = {
    currentWordId: 0,
    wordsNumber: 0,
    rightAnswers: 0,
    wrongAnswers: [],
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

  pushToWrongAnswers = (item) => {
    let joined = this.state.wrongAnswers.concat(item);
    this.setState({wrongAnswers: joined });
  };

  pushResultLocalStorage = () => {
    let storage = {result: []};

    let getLocalStorage = JSON.parse(localStorage.getItem('languageTest'));
    if (getLocalStorage === null) {
      getLocalStorage = storage;
    }

    const currentDate = Date.now().toString();
    const successRate = this.state.rightAnswers * 100 / this.state.wordsNumber;
    const resultCourse = this.props.courseId;
    const resultLesson = this.props.lessonId;
    const lessonType = 'writing';

    let testResult = {
      date: currentDate,
      course: resultCourse,
      lesson: resultLesson,
      typeLesson: lessonType,
      success: successRate,
      wrongAnswers: this.state.wrongAnswers
    };

    let resultPath = 'result';

    getLocalStorage[resultPath].push(testResult);

    localStorage.setItem('languageTest', JSON.stringify(getLocalStorage));

    this.setState({wrongAnswers: []});
  };

  rightAnswered = () => {
    let oldWord = this.state.rightAnswers;
    this.setState({rightAnswers: oldWord + 1});
  };

  repeatLesson = () => {
    this.prepareWords();
    this.setState({wordsHasFinished: false});
    return this.setState({currentWordId: 0});
  };

  nextWord = () => {
    let oldWord = this.state.currentWordId;

    if (oldWord === this.state.wordsNumber - 1) {
      this.pushResultLocalStorage();
      return this.setState({wordsHasFinished: true});
    } else {
      return this.setState({currentWordId: oldWord + 1});
    }
  };

  componentWillMount() {
    this.prepareWords();
    this.setState({wordsNumber: this.props.words.length});
  }

  goBack = () => window.history.back();

  render() {
    const currentWord = this.state.preparedWords[this.state.currentWordId];

    const wordsAvailable = <React.Fragment>
      <ProgressBar
        itemsLength={this.state.wordsNumber}
        currentItem={this.state.currentWordId}
        pushedBack={() => this.goBack()}
      />
      {/*<h2>Word # {this.state.currentWordId + 1}</h2>*/}
      <SingleWriting
        currentWord={currentWord}
        onNextWord={() => this.nextWord()}
        onRightAnswer={() => this.rightAnswered()}
        onWrongAnswer={(item) => this.pushToWrongAnswers(item)}
      />
    </React.Fragment>;

    const wordsUnavailable = <React.Fragment>
      <p>Words has finished</p>
      <p>{this.state.rightAnswers} answers right</p>
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

export default WordsWriting;