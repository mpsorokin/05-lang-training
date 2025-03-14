import React from 'react';
import './TaskOneList.css';

function TaskOneList({ list }) {
  const singleList = list.map(item => (
    <div key={item.id}>
      <h3>Task #{item.id}</h3>
      <p>{item.question}</p>
      <ul>
        {item.milestones.map((milestone, index) => <li key={index}>{milestone}</li>)}
      </ul>
    </div>
  ));

  return (
    <div className="ielts_writing_task_one_list">
      {singleList}
    </div>
  );
}

export default TaskOneList;