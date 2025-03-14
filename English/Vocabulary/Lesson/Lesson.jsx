import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import LessonTest from './LessonTest/LessonTest.jsx';

class Lesson extends Component {
  state = {
    lesson: {
      id: 1,
      name: "Unit Demo",
      words: [
        { id: 1, english: "book", russian: "книга" },
        { id: 2, english: "table", russian: "стол" },
        { id: 3, english: "car", russian: "машина" },
        { id: 4, english: "street", russian: "улица" },
        { id: 5, english: "laptop", russian: "ноутбук" }
      ]
    },
    finalTestArray: []
  };

  componentDidMount() {
    this.generateNewTest(this.state.lesson.words);
  }

  shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  getFourRandomVariants(words, currentId) {
    const filteredWords = words.filter(word => word.id !== currentId);
    const randomVariants = this.shuffleArray(filteredWords).slice(0, 3);
    return this.shuffleArray([...randomVariants, words.find(word => word.id === currentId)]);
  }

  generateNewTest = (wordsPassed) => {
    const finalGeneratedArray = wordsPassed.map(word => {
      const variants = this.getFourRandomVariants(wordsPassed, word.id).map(w => w.english);
      return {
        question: word.russian,
        variants,
        rightAnswer: word.english
      };
    });

    this.setState({ finalTestArray: this.shuffleArray(finalGeneratedArray) });
  };

  render() {
    return (
      <div>
        <LessonTest
          courseId={this.props.courseId}
          lessonId={this.props.unitId}
          testInfo={
            <div>
              <p>{this.state.lesson.name}</p>
              <p>Total questions: {this.state.lesson.words.length}</p>
            </div>
          }
          currentFinalTest={this.state.finalTestArray}
        />
      </div>
    );
  }
}

// HOC для получения параметров URL
const withRouter = (Component) => {
  return (props) => {
    const params = useParams();
    return <Component {...props} courseId={params.courseId} unitId={params.unitId} />;
  };
};

export default withRouter(Lesson);
