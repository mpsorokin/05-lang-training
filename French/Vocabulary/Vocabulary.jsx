import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Import Data file
import frenchVocabData from '../../data_source/french_vocabulary_data';

class FrenchVocabulary extends Component {
  state = {
    vocabulary: {}
  };

  componentWillMount() {
    this.setState({vocabulary: frenchVocabData})
  }

  render() {
    const courses_list = this.state.vocabulary.courses;

    const showCoursesList = courses_list.map(course => {
      const courseWordsArray = course.lessons.map(lesson => lesson.words.length);
      const wordsCount = courseWordsArray.reduce((accumulator, currentValue) => accumulator + currentValue);
      return <li>
        <Link to={`${this.props.match.url}/${course.url}`}>{course.name}</Link>
        <p>{wordsCount} words</p>
      </li>
    });

    const localNav = <div className="english_nav">
      <ul>
        {showCoursesList}
      </ul>
    </div>;

    return <div className="vocabulary_container">
      <h2>French Vocabulary</h2>
      {localNav}
    </div>;
  }
}

export default FrenchVocabulary;