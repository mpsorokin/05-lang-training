import React, { useState, useEffect } from 'react';
import './WordsWriting.css';

import SingleWriting from './SingleWriting/SingleWriting.jsx';
import ProgressBar from '../ProgressBar/ProgressBar.jsx';

const WordsWriting = ({ words, courseId, lessonId }) => {
  const [currentWordId, setCurrentWordId] = useState(0);
  const [wordsNumber, setWordsNumber] = useState(words.length);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [wordsHasFinished, setWordsHasFinished] = useState(false);
  const [preparedWords, setPreparedWords] = useState([]);

  useEffect(() => {
    setPreparedWords(shuffleArray(words));
  }, [words]);

    return array;
  }

  prepareWords = () => {
    this.setState({preparedWords: this.shuffleArray(this.props.words)});
  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
  };

  const pushToWrongAnswers = (item) => {
    setWrongAnswers((prev) => [...prev, item]);
  };

  const pushResultLocalStorage = () => {
    const currentDate = Date.now().toString();
    const successRate = (rightAnswers * 100) / wordsNumber;
    const lessonType = 'writing';

    const testResult = {
      date: currentDate,
      course: courseId,
      lesson: lessonId,
      typeLesson: lessonType,
      success: successRate,
      wrongAnswers: wrongAnswers,
    };

    let storage = JSON.parse(localStorage.getItem('languageTest')) || { result: [] };
    storage.result.push(testResult);
    localStorage.setItem('languageTest', JSON.stringify(storage));
    setWrongAnswers([]);
  };

  const rightAnswered = () => {
    setRightAnswers((prev) => prev + 1);
  };

  const repeatLesson = () => {
    setPreparedWords(shuffleArray(words));
    setWordsHasFinished(false);
    setCurrentWordId(0);
  };

  const nextWord = () => {
    if (currentWordId === wordsNumber - 1) {
      pushResultLocalStorage();
      setWordsHasFinished(true);
    } else {
      setCurrentWordId((prev) => prev + 1);
    }
  };

  const goBack = () => window.history.back();

  const currentWord = preparedWords[currentWordId];

  return (
    <>
      {wordsHasFinished ? (
        <>
          <p>Words have finished</p>
          <p>{rightAnswers} answers right</p>
          <div className="finished_words_button_container">
            <div onClick={goBack} className="button_go_back">Go Back</div>
            <div onClick={repeatLesson} className="button_repeat">Repeat lesson</div>
          </div>
        </>
      ) : (
        <>
          <ProgressBar itemsLength={wordsNumber} currentItem={currentWordId} pushedBack={goBack} />
          <SingleWriting
            currentWord={currentWord}
            onNextWord={nextWord}
            onRightAnswer={rightAnswered}
            onWrongAnswer={pushToWrongAnswers}
          />
        </>
      )}
    </>
  );
};

export default WordsWriting;