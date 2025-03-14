import React, { Component } from 'react';
import { Link } from "react-router-dom";

class LessonTypes extends Component {
  render() {
    const courseId = this.props.match.params.courseId;
    const backLink = `/french/vocabulary/${courseId}`;
    const goBackButton = <div className="custom_go_back"><Link to={backLink}>Go Back</Link></div>;

    const baseUrl = this.props.match.url;

    const localNav = <div className="english_nav">
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
    </div>;

    return <div>
      {goBackButton}
      {localNav}
    </div>;
  }
}

export default LessonTypes;