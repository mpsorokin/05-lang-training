import React, { Component } from 'react';
import { Link } from "react-router-dom";

import TaskOneList from './TaskOneList/TaskOneList.jsx';
import TaskOneRandom from './TaskOneRandom/TaskOneRandom.jsx';
import TaskTwoList from './TaskTwoList/TaskTwoList.jsx';
import TaskTwoRandom from './TaskTwoRandom/TaskTwoRandom.jsx';

// Import Data file
import englishIelts from '../../../../data_source/english_ielts_data';

class WritingResolver extends Component {
  render() {
    const testOneList = englishIelts.writing.task_1;
    const testTwoList = englishIelts.writing.task_2;

    const taskType = this.props.match.params.course;

    const taskOneList = <TaskOneList list={testOneList} />;
    const taskOneRandom = <TaskOneRandom list={testOneList} />;

    const taskTwoList = <TaskTwoList list={testTwoList} />;
    const taskTwoRandom = <TaskTwoRandom list={testTwoList} />;

    let renderedComponent = '';
    switch (taskType) {
      case 'v1_list':
        renderedComponent = taskOneList;
        break;
      case 'v1_random':
        renderedComponent = taskOneRandom;
        break;
      case 'v2_list':
        renderedComponent = taskTwoList;
        break;
      case 'v2_random':
        renderedComponent = taskTwoRandom;
        break;
      default:
        renderedComponent = "Not found";
    }

    const goBackButton = <div className="custom_go_back"><Link to="/english/ielts/writing">Go Back</Link></div>;
    return <div>
      {goBackButton}
      {/*{this.props.match.params.course}*/}
      {renderedComponent}
    </div>;
  }
}

export default WritingResolver;