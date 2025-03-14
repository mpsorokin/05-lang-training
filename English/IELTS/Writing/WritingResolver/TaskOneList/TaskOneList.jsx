import React, { Component } from 'react';
import './TaskOneList.css';

class TaskOneList extends Component {
  render() {
    const singleList = this.props.list.map(item => {
      return <div>
        <h3>Task #{item.id}</h3>
        <p>{item.question}</p>
        <ul>
          {item.milestones.map(milestone => <li>{milestone}</li>)}
        </ul>
      </div>
    });
    return <div className="ielts_writing_task_one_list">
      {singleList}
    </div>;
  }
}

export default TaskOneList;