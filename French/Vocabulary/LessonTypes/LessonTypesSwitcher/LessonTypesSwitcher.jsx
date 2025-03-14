import React, { Component } from 'react';
import { Link } from "react-router-dom";

import LangCards from "../../../../framework/LangCards/LangCards.jsx";
import Lesson from "../../Lesson/Lesson.jsx";
import WordsWriting from "../../../../framework/WordsWriting/WordsWriting.jsx";

// Import vocabulary data
import vocabData from '../../../../data_source/french_vocabulary_data';

class LessonTypesSwitcher extends Component {
  getLessonData = (courseId, unitId) => {
    const preparedWords = vocabData.courses
      .filter(course => course.url === courseId)[0].lessons
      .filter(lesson => lesson.url === unitId)[0];
    
    return preparedWords;
  };

  render() {
    const courseId = this.props.match.params.courseId;
    const unitId = this.props.match.params.unitId;
    const lessonType = this.props.match.params.lessonType;

    const backLink = `/english/vocabulary/${courseId}/${unitId}`;
    const goBackButton = <div className="custom_go_back"><Link to={backLink}>Go Back</Link></div>;

    const preparedWords = this.getLessonData(courseId, unitId);

    const cardsTask = <LangCards words={preparedWords.words} />;
    const multipleChoice = <Lesson words={preparedWords.words} courseId={courseId} unitId={unitId} />;
    const writingTask = <WordsWriting courseId={courseId} lesson={unitId} words={preparedWords.words} />;

    let renderedComponent = '';
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
        renderedComponent = "Not found";
    }
    return <div>
      {/*{goBackButton}*/}
      {renderedComponent}
    </div>;
  }
}

export default LessonTypesSwitcher;
