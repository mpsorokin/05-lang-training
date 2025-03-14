import React from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';

function LessonTypes() {
  const { courseId, unitId } = useParams();
  const location = useLocation();

  const backLink = `/english/vocabulary/${courseId}`;
  const baseUrl = `/english/vocabulary/${courseId}/${unitId}`;


  return (
    <div>
      <div className="custom_go_back">
        <Link to={backLink}>Go Back</Link>
      </div>

      <div className="english_nav">
        <ul>
          <li>
            <Link to={`${baseUrl}/cards`}>Cards training</Link>
          </li>
          <li>
            <Link to={`${baseUrl}/multiple`}>Multiple choice</Link>
          </li>
          <li>
            <Link to={`${baseUrl}/writing`}>Writing training</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LessonTypes;