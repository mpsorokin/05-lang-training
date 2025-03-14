import React from 'react';

function TaskOneList({ list }) {
  const singleList = list.map(item => (
    <div key={item.id}>
      <h3>Task #{item.id}</h3>
      <h4>Topic: {item.topic}</h4>
      <ul>
        {item.questions.map((question, index) => <li key={index}>{question}</li>)}
      </ul>
    </div>
  ));

  return <div className="ielts_writing_task_one_list">
    {singleList}
  </div>;
}

export default TaskOneList;