import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Import Data file
import frenchVocabData from '../../../data_source/french_vocabulary_data';

class FrenchCourses extends Component {
  state = {
    dynamicCourses: []
  };

  componentWillMount() {
    const currentLessons = frenchVocabData.courses.filter(course => course.url === this.props.match.params.courseId)[0].lessons;
    this.setState({dynamicCourses: currentLessons});
  };

  render() {
    const goBackButton = <div className="custom_go_back"><Link to="/french/vocabulary">Go Back</Link></div>;

    const renderDynamicList = <React.Fragment>
      {this.state.dynamicCourses.map(course => <div className="lesson_list_item" key={course.id}>
        <Link to={`${this.props.match.url}/${course.url}`}> {course.name} </Link>
        <p>{course.words.length} Words</p>
      </div> )}
    </React.Fragment>;

    return <React.Fragment>
      {goBackButton}
      {/*<h2>Courses</h2>*/}
      {renderDynamicList}
    </React.Fragment>;
  }
}

export default FrenchCourses;