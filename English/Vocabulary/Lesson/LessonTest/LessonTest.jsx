import React, { Component } from 'react';
import './LessonTest.css';
import ProgressBar from '../../../../framework/ProgressBar/ProgressBar.jsx';
import img_avatar from './img_avatar.png';

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

  componentDidMount() {
    this.setState({ rightAnswer: this.props.currentFinalTest[0].rightAnswer });
    this.handleStartTest();
  }

  handleStartTest = () => {
    this.setState({ isTestStarted: true });
  };

  setDefaultStateBeforeNextQuestion = () => {
    this.setState({
      clickedAnswer: '1',
      isGreenRightAnswer: false,
      showRightAnswer: false,
      wrongAnswer: '1',
      isContinueButton: false,
    });
  };

  handleNextQuestion = () => {
    this.setDefaultStateBeforeNextQuestion();
    const newQuestion = this.state.currentQuestion + 1;
    const questionsLength = this.props.currentFinalTest.length;

    if (newQuestion < questionsLength) {
      this.setState({ currentQuestion: newQuestion });
    } else {
      this.setState({ isTestStarted: false, isTestCompleted: true });
      this.pushResultLocalStorage();
    }
  };

  pushToWrongAnswers = (item) => {
    this.setState((prevState) => ({
      wrongAnswers: [...prevState.wrongAnswers, item],
    }));
  };

  pushResultLocalStorage = () => {
    const storage = { result: [] };
    let getLocalStorage = JSON.parse(localStorage.getItem('languageTest')) || storage;
    const currentDate = Date.now().toString();
    const successRate = (this.state.rightAnswers * 100) / (this.state.rightAnswers + this.state.wrongAnswers.length);
    const { courseId, lessonId } = this.props;
    const lessonType = 'Multiple choice';

    const testResult = {
      date: currentDate,
      course: courseId,
      lesson: lessonId,
      typeLesson: lessonType,
      success: successRate,
      wrongAnswers: this.state.wrongAnswers,
    };

    getLocalStorage.result.push(testResult);
    localStorage.setItem('languageTest', JSON.stringify(getLocalStorage));
  };

  checkCurrentQuestionAnswer = (question) => {
    this.setState({ clickedAnswer: question });
  };

  checkButtonQuestion = () => {
    const rightAnswer = this.props.currentFinalTest[this.state.currentQuestion].rightAnswer;
    this.setState({ isContinueButton: true, isGreenRightAnswer: true });

    if (this.state.clickedAnswer === rightAnswer) {
      this.setState((prevState) => ({ rightAnswers: prevState.rightAnswers + 1, isContinueButtonDisabled: true }));
      setTimeout(() => {
        this.handleNextQuestion();
        this.setState({ isContinueButtonDisabled: false });
      }, 500);
    } else {
      this.setState({ wrongAnswer: this.state.clickedAnswer });
      this.pushToWrongAnswers(rightAnswer);
    }
  };

  goBack = () => window.history.back();

  render() {
    const currentQuestion = this.props.currentFinalTest[this.state.currentQuestion];
    const currentVariants = currentQuestion.variants;
    const rightAnswer = currentQuestion.rightAnswer;

    // Show results
    const renderSummary = (
      <div>
        <p>You completed a test!</p>
        <p>
          You have scored: {this.state.rightAnswers} of {this.props.currentFinalTest.length}
        </p>
      </div>
    );

    const showCorrectAnswer = this.state.showRightAnswer ? (
      <React.Fragment>
        <p>Right: {currentQuestion.rightAnswer}</p>
      </React.Fragment>
    ) : (
      ''
    );

    const checkButtonClass = this.state.clickedAnswer !== '1' ? 'check_active' : 'check_inactive';
    const checkButton = (
      <button
        className={`btn ${checkButtonClass}`}
        onClick={this.checkButtonQuestion}
        disabled={this.state.clickedAnswer === '1'}
      >
        Check
      </button>
    );

    const continueButton = (
      <div>
        <button
          className={'btn check_active'}
          onClick={this.handleNextQuestion}
          disabled={this.state.isContinueButtonDisabled}
        >
          Continue
        </button>
      </div>
    );

    const checkOrContinue = this.state.isContinueButton ? continueButton : checkButton;

    const showVariants = (
      <div className="questionVariantsContainer">
        {currentVariants.map((singleQuestion) => {
          const additionalClass =
            this.state.wrongAnswer === singleQuestion
              ? 'wrong_answer'
              : this.state.isContinueButton && this.state.clickedAnswer === singleQuestion ||
              this.state.isContinueButton && rightAnswer === singleQuestion
                ? 'right_answer'
                : this.state.clickedAnswer === singleQuestion
                  ? 'selected_button'
                  : 'blank';

          return (
            <button
              className={`btn ${additionalClass}`}
              onClick={() => this.checkCurrentQuestionAnswer(singleQuestion)}
            >
              {singleQuestion}
            </button>
          );
        })}
        {checkOrContinue}
      </div>
    );

    const questionContainer = (
      <div className="question_container">
        <div className="question_container_box">
          <p>{currentQuestion.question}</p>
        </div>
        <div className="question_container_heads">
          <img src={img_avatar} alt="" />
        </div>
      </div>
    );

    // Render Single Question
    const renderedQuestion = (
      <div>
        {questionContainer}
        {showCorrectAnswer}
        {!this.state.showRightAnswer && showVariants}
      </div>
    );

    const localProgressBar = (
      <ProgressBar
        itemsLength={this.props.currentFinalTest.length}
        currentItem={this.state.currentQuestion}
        pushedBack={this.goBack}
      />
    );

    // Control all test state
    const showTest = this.state.isTestStarted ? (
      <div>
        {localProgressBar}
        <p className="single_test_heading">Choose the right answer</p>
        {renderedQuestion}
      </div>
    ) : this.state.isTestCompleted ? (
      renderSummary
    ) : (
      <>
        {this.props.testInfo}
        <button onClick={this.handleStartTest} className="btn success">
          Start test now
        </button>
      </>
    );

    return <div className="TestActive">{showTest}</div>;
  }
}

export default LessonTest;
