import React, { Component } from 'react';

class TaskOneList extends Component {
  render() {
    const singleList = this.props.list.map(item => {
      return <div>
        <h3>Task #{item.id}</h3>
        <h4>Topic: {item.topic}</h4>
        <ul>
          {item.questions.map(question => <li>{question}</li>)}
        </ul>
      </div>
    });
    return <div className="ielts_writing_task_one_list">
      {singleList}
    </div>;
  }
}

export default TaskOneList;