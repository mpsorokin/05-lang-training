import React, { useState, useEffect, useCallback } from 'react';

function TaskOneRandom({ list }) {
  const [randomIndex, setRandomIndex] = useState(0);

  const generateRandomIndex = useCallback((listLen) => {
    setRandomIndex(Math.floor(Math.random() * listLen));
  }, []);

  useEffect(() => {
    generateRandomIndex(list.length);
  }, [generateRandomIndex, list.length]);


  const item = list[randomIndex];

  const renderTask = (
    <div>
      <h3>Task #{item.id}</h3>
      <p>{item.question}</p>
      <ul>
        {item.milestones.map((milestone, index) => <li key={index}>{milestone}</li>)}
      </ul>
    </div>
  );

  const generateButton = (
    <button
      className={'btn check_active'}
      onClick={() => generateRandomIndex(list.length)}
    >Generate new</button>
  );

  return (
    <div className="ielts_writing_task_one_list">
      {renderTask}
      {generateButton}
    </div>
  );
}

export default TaskOneRandom;