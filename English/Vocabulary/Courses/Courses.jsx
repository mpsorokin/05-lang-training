import React, { Component } from 'react';
import { Link, useParams } from "react-router-dom";

// Import Data file
import vocabData from '../../../data_source/vocabulary_data';

class Courses extends Component {
  state = {
    dynamicCourses: []
  };

  componentDidMount() {
    const { courseId } = this.props.params; // Получаем courseId из props
    const course = vocabData.courses.find(course => course.url === courseId);

    if (course) {
      this.setState({ dynamicCourses: course.lessons });
    }
  }

  render() {
    const currentPath = window.location.pathname; // Текущий путь

    return (
      <>
        <div className="custom_go_back">
          <Link to="/english/vocabulary">Go Back</Link>
        </div>
        {this.state.dynamicCourses.map(course => (
          <div className="lesson_list_item" key={course.id}>
            <Link to={`${currentPath}/${course.url}`}>{course.name}</Link>
            <p>{course.words.length} Words</p>
          </div>
        ))}
      </>
    );
  }
}

// Оборачиваем компонент для получения параметров маршрута
const withRouter = (Component) => {
  return (props) => {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
};

export default withRouter(Courses);
