import React from 'react';

function TaskTwoList({ list }) {
  const singleList = list.map(item => (
    <div key={item.id}>
      <h3>Example #{item.id}</h3>
      <p>{item.task}</p>
    </div>
  ));

  return (
    <div className="ielts_writing_task_one_list">
      {singleList}
    </div>
  );
}

export default TaskTwoList;