import React, { useState, useCallback } from 'react';
import './SingleCard.css';

function SingleCard({ currentWord, onNextWord }) {
  const [showForeign, setShowForeign] = useState(false);

  const rotateCard = useCallback(() => {
    setShowForeign(prevState => !prevState);
  }, []);

  const nextCard = useCallback(() => {
    setShowForeign(false);
    onNextWord();
  }, [onNextWord]);

  const cardContent = showForeign ? (
    <h3>{currentWord ? currentWord.english : ''}</h3>
  ) : (
    <h3>{currentWord ? currentWord.russian : ''}</h3>
  );

  return (
    <div className="single_card_container">
      <div className="card_container">
        {cardContent}
      </div>
      <div className="button_container">
        <div onClick={rotateCard} className="button_rotate">Rotate</div>
        <div onClick={nextCard} className="button_next">Next</div>
      </div>
    </div>
  );
}

export default SingleCard;