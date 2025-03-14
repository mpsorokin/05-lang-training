import React, { useState } from 'react';
import './SingleWriting.css';

const SingleWriting = ({ currentWord, onNextWord, onRightAnswer, onWrongAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isAnswerTrue, setIsAnswerTrue] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleWrongAnswer = () => {
    setShowLoader(false);
    onNextWord();
  };

  const getEscapedWord = (word) => {
    let indexOfBrace = word.indexOf('(');
    return indexOfBrace === -1 ? word : word.substring(0, indexOfBrace - 1);
  };

  const checkWord = () => {
    let rightAnswer = getEscapedWord(currentWord.english);
    setShowLoader(true);
    if (userAnswer.toLowerCase() === rightAnswer) {
      onRightAnswer();
      setIsAnswerTrue(true);
      setTimeout(() => handleWrongAnswer(), 500);
    } else {
      console.log('handle wrong answer');
      onWrongAnswer(currentWord.english);
      setIsAnswerTrue(false);
      setTimeout(() => handleWrongAnswer(), 4000);
    }
    setUserAnswer('');
  };

  return (
    <div className="single_writing_container">
      <h1>{currentWord.russian}</h1>
      {showLoader ? (
        <h2>{isAnswerTrue ? 'right answer' : `Right: ${getEscapedWord(currentWord.english)}`}</h2>
      ) : (
        <>
          <input value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} type="text" name="answer" />
          <div onClick={checkWord} className="submit_word_button">Submit</div>
        </>
      )}
    </div>
  );
};

export default SingleWriting;