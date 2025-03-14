import React, { useState, useEffect } from 'react';
import './Vocabulary.css';
import { Link } from "react-router-dom";

// Import Data file
import vocabData from '../../data_source/vocabulary_data';

function Vocabulary() {
  const [vocabulary, setVocabulary] = useState({});

  useEffect(() => {
    setVocabulary(vocabData);
  }, []);

  if (!vocabulary.courses) return <p>Loading...</p>;

  const currentPath = window.location.pathname;

  const showCoursesList = vocabulary.courses.map((course) => {
    const wordsCount = course.lessons.reduce((acc, lesson) => acc + lesson.words.length, 0);
    return (
      <li key={course.id}>
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

export default Vocabulary;