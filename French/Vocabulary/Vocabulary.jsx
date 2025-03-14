import React, { useState, useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';

// Import Data file
import frenchVocabData from '../../data_source/french_vocabulary_data';

const FrenchVocabulary = () => {
  const [vocabulary, setVocabulary] = useState({});
  const match = useMatch('/french/*');

  useEffect(() => {
    setVocabulary(frenchVocabData);
  }, []);

  const coursesList = vocabulary.courses?.map(course => {
    const courseWordsArray = course.lessons.map(lesson => lesson.words.length);
    const wordsCount = courseWordsArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
      <li key={course.url}>
        <Link to={`${match.url}/${course.url}`}>{course.name}</Link>
        <p>{wordsCount} words</p>
      </li>
    );
  });

  return (
    <div className="vocabulary_container">
      <h2>French Vocabulary</h2>
      <div className="english_nav">
        <ul>
          {coursesList}
        </ul>
      </div>
    </div>
  );
};

export default FrenchVocabulary;
