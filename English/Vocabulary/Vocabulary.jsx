import React, { Component } from 'react';
import './Vocabulary.css';
import { Link } from "react-router-dom";

// Import Data file
import vocabData from '../../data_source/vocabulary_data';

class Vocabulary extends Component {
  state = {
    vocabulary: {}
  };

  componentDidMount() {
    this.setState({ vocabulary: vocabData });
  }

  render() {
    const { vocabulary } = this.state;
    if (!vocabulary.courses) return <p>Loading...</p>; // Проверка на случай отсутствия данных

    const currentPath = window.location.pathname; // Получаем текущий путь

    const showCoursesList = vocabulary.courses.map((course, index) => {
      const wordsCount = course.lessons.reduce((acc, lesson) => acc + lesson.words.length, 0);
      return (
        <li key={index}>
          <Link to={`${currentPath}/${course.url}`}>{course.name}</Link>
          <p>{wordsCount} words</p>
        </li>
      );
    });

    return (
      <div className="vocabulary_container">
        <h2>English Vocabulary</h2>
        <div className="english_nav">
          <ul>
            {showCoursesList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Vocabulary;
