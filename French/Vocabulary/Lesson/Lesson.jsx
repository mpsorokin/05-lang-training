import React, { Component } from 'react';
import LessonTest from './LessonTest/LessonTest.jsx';

class Lesson extends Component {
  state = {
    lesson: {
      "id": 1,
      "name": "Unit Demo",
      "words": [
        {"id": 1, "english": "book", "russian": "книга"},
        {"id": 2, "english": "table", "russian": "стол"},
        {"id": 3, "english": "car", "russian": "машина"},
        {"id": 4, "english": "street", "russian": "улица"},
        {"id": 5, "english": "laptop", "russian": "ноутбук"}]
    },
    routeNavigation: {
      unitIdProp: '',
      courseIdProp: ''
    },
    dynamicLesson: {}
  };

  componentWillMount() {
    this.setState({routeNavigation: {
        unitIdProp: this.props.unitId,
        courseIdProp: this.props.courseId
      }});

    this.setState({dynamicLesson: this.props.words});
    this.generateNewTest(this.state.lesson.words);
    setTimeout(() => this.generateNewTest(this.state.dynamicLesson), 5);
  }

  shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getFourRandomVariants(words, currentId) {
    let excludeIteration = currentId;
    let output = [];
    output.push(excludeIteration);

    while(output.length < 4) {
      let variant = Math.ceil(Math.random() * words.length);
      if (!output.includes(variant) ) {
        output.push(variant);
      }
    }
    return this.shuffleArray(output);
  }

  generateNewTest = (wordsPassed) => {
    let localWords = wordsPassed;

    localWords = localWords.map(word => {
      let variantsIndexes = this.getFourRandomVariants(localWords, word.id);
      let decodedIndexes = variantsIndexes.map((index) => {
        let foundObject = localWords.filter(arrayIndex => arrayIndex['id'] === index);
        return foundObject[0].english;
      });
      return {
        question: word.russian,
        variants: decodedIndexes,
        rightAnswer: word.english
      }
    });
    let finalGeneratedArray = this.shuffleArray(localWords);
    /*console.log('localWords');
    console.log(finalGeneratedArray);*/
    this.setState({finalTestArray: finalGeneratedArray});
  };

  render() {
    const testInfo = <div>
      <p>{this.state.dynamicLesson.name}</p>
      <p>Total questions: {this.state.dynamicLesson.length} </p>
    </div>;

    return <div>
      <LessonTest
        courseId={this.props.courseId}
        lessonId={this.props.unitId}
        testInfo={testInfo}
        currentFinalTest={this.state.finalTestArray} />
    </div>;
  }
}

export default Lesson;