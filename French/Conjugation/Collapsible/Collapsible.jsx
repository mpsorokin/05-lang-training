import React, { useState, useCallback } from 'react';
import './Collapsible.css';

function Collapsible({ title, content }) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleContent = useCallback(() => {
    setIsOpened(prevState => !prevState);
  }, []);

  const displayContent = isOpened ? (
    <div className="collapsible-content">
      {content || 'default content'}
    </div>
  ) : null;

  return (
    <div className="collapsible-container">
      <button onClick={toggleContent} className="collapsible-button">{title || 'Open Section 1'}</button>
      {displayContent}
    </div>
  );
}

export default Collapsible;