import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import LessonTest from './LessonTest/LessonTest.jsx';

function Lesson() {
  const { courseId, unitId } = useParams();
  const [finalTestArray, setFinalTestArray] = useState([]);
  const lesson = {
    id: 1,
    name: "Unit Demo",
    words: [
      { id: 1, english: "book", russian: "книга" },
      { id: 2, english: "table", russian: "стол" },
      { id: 3, english: "car", russian: "машина" },
      { id: 4, english: "street", "russian": "улица" },
      { id: 5, english: "laptop", "russian": "ноутбук" }
    ]
  };

  const shuffleArray = useCallback((array) => {
    return [...array].sort(() => Math.random() - 0.5);
  }, []);

  const getFourRandomVariants = useCallback((words, currentId) => {
    const filteredWords = words.filter(word => word.id !== currentId);
    const randomVariants = shuffleArray(filteredWords).slice(0, 3);
    return shuffleArray([...randomVariants, words.find(word => word.id === currentId)]);
  }, [shuffleArray]);

  const generateNewTest = useCallback((wordsPassed) => {
    const finalGeneratedArray = wordsPassed.map(word => {
      const variants = getFourRandomVariants(wordsPassed, word.id).map(w => w.english);
      return {
        question: word.russian,
        variants,
        rightAnswer: word.english
      };
    });
    setFinalTestArray(shuffleArray(finalGeneratedArray));
  }, [shuffleArray, getFourRandomVariants]);


  useEffect(() => {
    generateNewTest(lesson.words);
  }, [generateNewTest]);


  return (
    <div>
      <LessonTest
        courseId={courseId}
        lessonId={unitId}
        testInfo={
          <div>
            <p>{lesson.name}</p>
            <p>Total questions: {lesson.words.length}</p>
          </div>
        }
        currentFinalTest={finalTestArray}
      />
    </div>
  );
}

export default Lesson;