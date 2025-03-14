import React, { Component } from 'react';

class TaskTwoList extends Component {
  render() {
    const singleList = this.props.list.map(item => {
      return <div>
        <h3>Task #{item.id}</h3>
        <p>{item.question}</p>
      </div>
    });
    return <div className="ielts_writing_task_one_list">
      {singleList}
    </div>;
  }
}

export default TaskTwoList;