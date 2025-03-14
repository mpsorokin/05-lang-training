import React, { useCallback } from 'react';
import './ProgressBar.css';

function ProgressBar({ itemsLength, currentItem, pushedBack }) {

  const pushBackButton = useCallback(() => {
    pushedBack();
  }, [pushedBack]);

  const computedWidth = `${(currentItem / itemsLength) * 100}%`;
  const statsContent = `${currentItem}/${itemsLength}`;

  return (
    <div className="progress_container">
      <div onClick={pushBackButton} className="progress_close_button">X</div>
      <div className="progress_bar_container">
        <div
          className="progress_bar"
          style={{ width: computedWidth }}
        ></div>
      </div>
      <div className="progress_stats">{statsContent}</div>
    </div>
  );
}

export default ProgressBar;