import React, { Component } from 'react';

class TaskTwoRandom extends Component {
  state = {
    randomIndex: 0,
  };

  componentWillMount() {
    this.setState({randomIndex: this.generateRandomIndex(this.props.list.length)})
  }

  generateRandomIndex = (listLen) => {
    let generatedId = Math.ceil(Math.random() * listLen) - 1;
    this.setState({randomIndex: generatedId});
    return Math.floor(Math.random() * listLen);
  };

  render() {
    const item = this.props.list[this.state.randomIndex];

    const renderTask = <div>
      <h3>Example #{item.id}</h3>
      <p>{item.task}</p>
    </div>;

    const generateButton = <button
      className={'btn check_active'}
      onClick={() => this.generateRandomIndex(this.props.list.length)}
    >Generate new</button>;

    return <div className="ielts_writing_task_one_list">
      {renderTask}
      {generateButton}
    </div>;
  }
}

export default TaskTwoRandom;