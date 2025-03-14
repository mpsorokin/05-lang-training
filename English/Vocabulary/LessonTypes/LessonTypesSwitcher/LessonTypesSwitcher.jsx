import React from 'react';
import { Link, useParams } from 'react-router-dom';

import LangCards from "../../../../framework/LangCards/LangCards.jsx";
import Lesson from "../../Lesson/Lesson.jsx";
import WordsWriting from "../../../../framework/WordsWriting/WordsWriting.jsx";

// Import vocabulary data
import vocabData from '../../../../data_source/vocabulary_data';

const LessonTypesSwitcher = () => {
  const { courseId, unitId, lessonType } = useParams();

  const getLessonData = (courseId, unitId) => {
    const course = vocabData.courses.find(course => course.url === courseId);
    if (!course) return null;

    const lesson = course.lessons.find(lesson => lesson.url === unitId);
    return lesson || null;
  };

  const preparedWords = getLessonData(courseId, unitId);

  if (!preparedWords) {
    return <div>Lesson not found</div>;
  }

  const backLink = `/english/vocabulary/${courseId}/${unitId}`;
  const goBackButton = <div className="custom_go_back"><Link to={backLink}>Go Back</Link></div>;

  const cardsTask = <LangCards words={preparedWords.words} />;
  const multipleChoice = <Lesson words={preparedWords.words} courseId={courseId} unitId={unitId} />;
  const writingTask = <WordsWriting courseId={courseId} lesson={unitId} words={preparedWords.words} />;

  let renderedComponent;
  switch (lessonType) {
    case 'cards':
      renderedComponent = cardsTask;
      break;
    case 'multiple':
      renderedComponent = multipleChoice;
      break;
    case 'writing':
      renderedComponent = writingTask;
      break;
    default:
      renderedComponent = <div>Lesson type not found</div>;
  }

  return (
    <div>
      {goBackButton}
      {renderedComponent}
    </div>
  );
};

export default LessonTypesSwitcher;
