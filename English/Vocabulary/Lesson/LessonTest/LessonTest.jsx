import React, {useState, useCallback, useEffect} from 'react';
import './LessonTest.css';
import ProgressBar from '../../../../framework/ProgressBar/ProgressBar.jsx';
import img_avatar from './img_avatar.png';

function LessonTest({ courseId, lessonId, testInfo, currentFinalTest }) {
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [clickedAnswer, setClickedAnswer] = useState('1');
  const [rightAnswer, setRightAnswer] = useState('');
  const [wrongAnswer, setWrongAnswer] = useState('1');
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const [isGreenRightAnswer, setIsGreenRightAnswer] = useState(false);
  const [isContinueButton, setIsContinueButton] = useState(false);
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] = useState(false);

  useEffect(() => {
    setRightAnswer(currentFinalTest[0]?.rightAnswer || '');
  }, [currentFinalTest]);


  const handleStartTest = useCallback(() => {
    setIsTestStarted(true);
  }, []);

  const setDefaultStateBeforeNextQuestion = useCallback(() => {
    setClickedAnswer('1');
    setIsGreenRightAnswer(false);
    setShowRightAnswer(false);
    setWrongAnswer('1');
    setIsContinueButton(false);
  }, []);

  const handleNextQuestion = useCallback(() => {
    setDefaultStateBeforeNextQuestion();
    const newQuestion = currentQuestion + 1;
    const questionsLength = currentFinalTest.length;

    if (newQuestion < questionsLength) {
      setCurrentQuestion(newQuestion);
    } else {
      setIsTestStarted(false);
      setIsTestCompleted(true);
      pushResultLocalStorage();
    }
  }, [currentQuestion, currentFinalTest.length, setDefaultStateBeforeNextQuestion]);

  const pushToWrongAnswers = useCallback((item) => {
    setWrongAnswers(prevWrongAnswers => [...prevWrongAnswers, item]);
  }, []);

  const pushResultLocalStorage = useCallback(() => {
    const storage = { result: [] };
    let getLocalStorage = JSON.parse(localStorage.getItem('languageTest')) || storage;
    const currentDate = Date.now().toString();
    const successRate = (rightAnswers * 100) / (rightAnswers + wrongAnswers.length);
    const lessonType = 'Multiple choice';

    const testResult = {
      date: currentDate,
      course: courseId,
      lesson: lessonId,
      typeLesson: lessonType,
      success: successRate,
      wrongAnswers: wrongAnswers,
    };

    getLocalStorage.result.push(testResult);
    localStorage.setItem('languageTest', JSON.stringify(getLocalStorage));
  }, [courseId, lessonId, rightAnswers, wrongAnswers]);

  const checkCurrentQuestionAnswer = useCallback((question) => {
    setClickedAnswer(question);
  }, []);

  const checkButtonQuestion = useCallback(() => {
    const rightAnswerValue = currentFinalTest[currentQuestion].rightAnswer;
    setIsContinueButton(true);
    setIsGreenRightAnswer(true);

    if (clickedAnswer === rightAnswerValue) {
      setRightAnswers(prevRightAnswers => prevRightAnswers + 1);
      setIsContinueButtonDisabled(true);
      setTimeout(() => {
        handleNextQuestion();
        setIsContinueButtonDisabled(false);
      }, 500);
    } else {
      setWrongAnswer(clickedAnswer);
      pushToWrongAnswers(rightAnswerValue);
    }
  }, [clickedAnswer, currentFinalTest, currentQuestion, handleNextQuestion, pushToWrongAnswers]);


  const goBack = useCallback(() => window.history.back(), []);

  const item = currentFinalTest[currentQuestion];
  const currentVariants = item?.variants || [];
  const correctAnswer = item?.rightAnswer;

  const renderSummary = (
    <div>
      <p>You completed a test!</p>
      <p>
        You have scored: {rightAnswers} of {currentFinalTest.length}
      </p>
    </div>
  );

  const showCorrectAnswer = showRightAnswer ? (
    <React.Fragment>
      <p>Right: {item.rightAnswer}</p>
    </React.Fragment>
  ) : null;

  const checkButtonClass = clickedAnswer !== '1' ? 'check_active' : 'check_inactive';
  const checkButton = (
    <button
      className={`btn ${checkButtonClass}`}
      onClick={checkButtonQuestion}
      disabled={clickedAnswer === '1'}
    >
      Check
    </button>
  );

  const continueButton = (
    <div>
      <button
        className={'btn check_active'}
        onClick={handleNextQuestion}
        disabled={isContinueButtonDisabled}
      >
        Continue
      </button>
    </div>
  );

  const checkOrContinue = isContinueButton ? continueButton : checkButton;

  const showVariants = (
    <div className="questionVariantsContainer">
      {currentVariants.map((singleQuestion) => {
        const additionalClass =
          wrongAnswer === singleQuestion
            ? 'wrong_answer'
            : isContinueButton && (clickedAnswer === singleQuestion || correctAnswer === singleQuestion)
              ? 'right_answer'
              : clickedAnswer === singleQuestion
                ? 'selected_button'
                : 'blank';

        return (
          <button
            key={singleQuestion}
            className={`btn ${additionalClass}`}
            onClick={() => checkCurrentQuestionAnswer(singleQuestion)}
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
        <p>{item?.question}</p>
      </div>
      <div className="question_container_heads">
        <img src={img_avatar} alt="" />
      </div>
    </div>
  );

  const renderedQuestion = (
    <div>
      {questionContainer}
      {showCorrectAnswer}
      {!showRightAnswer && showVariants}
    </div>
  );

  const localProgressBar = (
    <ProgressBar
      itemsLength={currentFinalTest.length}
      currentItem={currentQuestion}
      pushedBack={goBack}
    />
  );

  const showTest = isTestStarted ? (
    <div>
      {localProgressBar}
      <p className="single_test_heading">Choose the right answer</p>
      {renderedQuestion}
    </div>
  ) : isTestCompleted ? (
    renderSummary
  ) : (
    <>
      {testInfo}
      <button onClick={handleStartTest} className="btn success">
        Start test now
      </button>
    </>
  );

  return <div className="TestActive">
    {showTest}
  </div>;
}

export default LessonTest;