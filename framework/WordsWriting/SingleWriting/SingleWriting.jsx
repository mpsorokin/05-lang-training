import React, { Component } from 'react';
import './SingleWriting.css';

class SingleWriting extends Component {
  state = {
    userAnswer: '',
    isAnswerTrue: false,
    showLoader: false,
  };

  handleWrongAnswer = () => {
    this.setState({showLoader: false});
    this.props.onNextWord();
  };


  getEscapedWord = (word) => {
    let escapedWord = '';
    let indexOfBrace = word.indexOf('(');
    if (indexOfBrace == -1) {
      return word;
    } else {
      return word.substring(0, indexOfBrace - 1);
    }
  };

  checkWord = () => {
    let rightAnswer = this.getEscapedWord(this.props.currentWord.english);
    this.setState({showLoader: true});
    if (this.state.userAnswer.toLowerCase() == rightAnswer) {
      // console.log('right answer');
      this.props.onRightAnswer();
      this.setState({isAnswerTrue: true});
      setTimeout(() => this.handleWrongAnswer() , 500);
    } else {
      console.log('handle wrong answer');
      this.props.onWrongAnswer(this.props.currentWord.english);
      this.setState({isAnswerTrue: false});
      setTimeout(() => this.handleWrongAnswer() , 4000);
    }
    this.setState({userAnswer: ''});
  };

  handleInputChange = (event) => {
    this.setState({userAnswer: event.target.value});
  };

  render() {
    const wordRussian = this.props.currentWord.russian;

    const renderedForm = <React.Fragment>
      {/*<label htmlFor="answer"> Your answer</label>*/}
      <input value={this.state.userAnswer} onChange={this.handleInputChange} type="text" name="answer" />
      <div onClick={this.checkWord} className="submit_word_button">Submit</div>
    </React.Fragment>;

    const loaderContent = this.state.isAnswerTrue ? 'right answer' : `Right : ${this.getEscapedWord(this.props.currentWord.english)}`;

    const loader = <div>{loaderContent}</div>;

    const renderContent = this.state.showLoader ? <h2>{loader}</h2> : renderedForm;

    return  <div className="single_writing_container">
      <h1>{wordRussian}</h1>
      {renderContent}
    </div>;
  }
}

export default SingleWriting;