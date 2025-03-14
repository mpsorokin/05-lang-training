import React, { useState, useCallback, useEffect } from 'react';
import './LangCards.css';

import SingleCard from './SingleCard/SingleCard.jsx';
import ProgressBar from "../ProgressBar/ProgressBar.jsx";

function LangCards({ words }) {
  const [currentWordId, setCurrentWordId] = useState(0);
  const [wordsNumber, setWordsNumber] = useState(0);
  const [wordsHasFinished, setWordsHasFinished] = useState(false);
  const [preparedWords, setPreparedWords] = useState([]);

  const shuffleArray = useCallback((array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }, []);

  const prepareWords = useCallback(() => {
    setPreparedWords(shuffleArray(words));
  }, [shuffleArray, words]);

  useEffect(() => {
    prepareWords();
    setWordsNumber(words.length);
  }, [prepareWords, words.length]);

  const repeatLesson = useCallback(() => {
    prepareWords();
    setWordsHasFinished(false);
    setCurrentWordId(0);
  }, [prepareWords]);

  const nextWord = useCallback(() => {
    if (currentWordId === wordsNumber - 1) {
      setWordsHasFinished(true);
    } else {
      setCurrentWordId(currentWordId + 1);
    }
  }, [currentWordId, wordsNumber]);

  const goBack = useCallback(() => window.history.back(), []);

  const currentCardId = currentWordId;

  const wordsAvailable = (
    <>
      <ProgressBar
        itemsLength={wordsNumber}
        currentItem={currentWordId}
        pushedBack={goBack}
      />
      <SingleCard currentWord={preparedWords[currentCardId]} onNextWord={nextWord} />
    </>
  );

  const wordsUnavailable = (
    <>
      <p>Words has finished</p>
      <div className="finished_words_button_container">
        <div onClick={goBack} className="button_go_back">Go Back</div>
        <div onClick={repeatLesson} className="button_repeat">Repeat lesson</div>
      </div>
    </>
  );

  const showContent = wordsHasFinished ? wordsUnavailable : wordsAvailable;

  return (
    <>
      {showContent}
    </>
  );
}

export default LangCards;