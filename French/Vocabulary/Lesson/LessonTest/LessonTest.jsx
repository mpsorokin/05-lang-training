import React, { Component } from 'react';
import './LessonTest.css';

import ProgressBar from '../../../../framework/ProgressBar/ProgressBar.jsx';

import img_avatar from'./img_avatar.png';

class LessonTest extends Component {
  state = {
    wrongAnswers: [],
    clickedAnswer: '1',
    rightAnswer: '',
    wrongAnswer: '1',
    isTestStarted: false,
    isTestCompleted: false,
    currentQuestion: 0,
    rightAnswers: 0,
    showRightAnswer: false,
    isGreenRightAnswer: false,
    isContinueButton: false,
    isContinueButtonDisabled: false,
  };

  componentWillMount() {
    this.setState({rightAnswer: this.props.currentFinalTest[this.state.currentQuestion].rightAnswer})
  }

  componentDidMount() {
    this.handleStartTest();
  }

  handleStartTest = () => {
    this.setState({isTestStarted: true});
  };

  setDefaultStateBeforeNextQuestion = () => {
    this.setState({clickedAnswer: '1'});
    this.setState({isGreenRightAnswer: false});
    this.setState({showRightAnswer: false});
    this.setState({wrongAnswer: '1'});
    this.setState({isContinueButton: false});
  };

  handleNextQuestion = () => {
    this.setDefaultStateBeforeNextQuestion();

    let newQuestion = this.state.currentQuestion + 1;
    let questionsLength = this.props.currentFinalTest.length;
    if (newQuestion < questionsLength) {
      this.setState({currentQuestion:  newQuestion});
    } else {
      this.setState({isTestStarted: false});
      this.setState({isTestCompleted: true});
      this.pushResultLocalStorage();
    }
  };

  pushToWrongAnswers = (item) => {
    const joined = this.state.wrongAnswers.concat(item);
    this.setState({wrongAnswers: joined });
  };

  pushResultLocalStorage = () => {
    let storage = {result: []};

    let getLocalStorage = JSON.parse(localStorage.getItem('languageTest'));
    if (getLocalStorage === null) {
      getLocalStorage = storage;
    }

    const currentDate = Date.now().toString();
    const successRate = this.state.rightAnswers * 100 / (this.state.rightAnswers + this.state.wrongAnswers.length);
    const resultCourse = this.props.courseId;
    const resultLesson = this.props.lessonId;
    const lessonType = 'Multiple choice';

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

    localStorage.setItem('languageTest', JSON.stringify(getLocalStorage))

  };

  checkCurrentQuestionAnswer = (question, right) => {
    this.setState({clickedAnswer: question});
  };

  checkButtonQuestion = () => {
    const rightAnswer = this.props.currentFinalTest[this.state.currentQuestion].rightAnswer;
    this.setState({isContinueButton: true});
    this.setState({isGreenRightAnswer: true});
    if(this.state.clickedAnswer === rightAnswer) {
      let oldRightAnswers = this.state.rightAnswers;
      this.setState({rightAnswers: oldRightAnswers + 1});
      this.setState({isContinueButtonDisabled: true});
      setTimeout(() => {
        this.handleNextQuestion();
        this.setState({isContinueButtonDisabled: false});
      }, 500);
    } else  {
      this.setState({wrongAnswer: this.state.clickedAnswer});
      this.pushToWrongAnswers(rightAnswer);
    }
  };

  goBack = () => window.history.back();

  render() {
    const currentQuestion = this.props.currentFinalTest[this.state.currentQuestion];
    const currentVariants = currentQuestion.variants;
    const rightAnswer = currentQuestion.rightAnswer;

    // Show results
    const renderSummary = <div>
      <p>You completed a test!</p>
      <p>You have scored: {this.state.rightAnswers} of {this.props.currentFinalTest.length}</p>
    </div>;

    const showCorrectAnswer = this.state.showRightAnswer ?
      <React.Fragment>
        <p>Right : {currentQuestion.rightAnswer}</p>
      </React.Fragment>
      : '';

    const checkButtonClass = this.state.clickedAnswer !== '1' ? 'check_active' : 'check_inactive';

    const checkButton = <button
      className={`btn ${checkButtonClass}`}
      onClick={() => this.checkButtonQuestion()}
      disabled={this.state.clickedAnswer === '1'}
    >Check</button>;

    const continueButton = <div>
      <button
        className={'btn check_active'}
        onClick={() => this.handleNextQuestion()}
        disabled={this.state.isContinueButtonDisabled}
      >Continue</button>;
    </div>;

    const checkOrContinue = this.state.isContinueButton ? continueButton : checkButton;

    const showVariants = <div className="questionVariantsContainer">
      {currentVariants.map((singleQuestion) => {
        const additionalClass =  this.state.wrongAnswer === singleQuestion ? 'wrong_answer' :
          this.state.isContinueButton && this.state.clickedAnswer  === singleQuestion ||
          this.state.isContinueButton && this.props.currentFinalTest[this.state.currentQuestion].rightAnswer  === singleQuestion ? 'right_answer' :
                                  this.state.clickedAnswer === singleQuestion ? 'selected_button'
                                    : 'blank';

        return <button
          className={`btn ${additionalClass}`}
          onClick={() => this.checkCurrentQuestionAnswer(singleQuestion, rightAnswer)}>{singleQuestion}</button>
      })}
      {checkOrContinue}

    </div>;


    // If loader is active show loader, unless show variants
    const showVariantsWLoader =  showVariants;

    const questionContainer = <div className="question_container">
      <div className="question_container_box">
        <p>{currentQuestion.question}</p>
      </div>
      <div className="question_container_heads">
        <img src={img_avatar} alt=""/>
      </div>
    </div>;

    // Render Single Question
    const renderedQuestion = <div>
      {questionContainer}
      {/*{this.state.showRightAnswer ? showCorrectAnswer : ''}*/}
      {showCorrectAnswer}

      {/* Disable variants when right answer is shown */}
      {this.state.showRightAnswer ? '' : showVariantsWLoader}
    </div>;


    const localProgressBar = <ProgressBar
      itemsLength={this.props.currentFinalTest.length}
      currentItem={this.state.currentQuestion}
      pushedBack={() => this.goBack()}
    />;

    //  Control all test state
    const showTest = this.state.isTestStarted ?
      <div>
        {localProgressBar}
        <p className="single_test_heading">Choose the right answer</p>
        {renderedQuestion}
      </div>
      :
      this.state.isTestCompleted ? renderSummary :
        <React.Fragment>
          {this.props.testInfo}
          <button onClick={this.handleStartTest} className="btn success">Start test now</button>
        </React.Fragment>;

    return <div className="TestActive">
      {showTest}
    </div>;
  }
}

export default LessonTest;