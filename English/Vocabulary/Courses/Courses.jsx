import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

// Import Data file
import vocabData from '../../../data_source/vocabulary_data';

function Courses() {
  const { courseId } = useParams();
  const [dynamicCourses, setDynamicCourses] = useState([]);

  useEffect(() => {
    const course = vocabData.courses.find(c => c.url === courseId);
    if (course) {
      setDynamicCourses(course.lessons);
    }
  }, [courseId]);

  return (
    <>
      <div className="custom_go_back">
        <Link to="/english/vocabulary">Go Back</Link>
      </div>
      {dynamicCourses.map(course => (
        <div className="lesson_list_item" key={course.id}>
          <Link to={`/english/vocabulary/${courseId}/${course.url}`}>{course.name}</Link>
          <p>{course.words.length} Words</p>
        </div>
      ))}
    </>
  );
}

export default Courses;