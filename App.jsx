import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";

// import routing components
import Home from './Home/Home.jsx';
import Results from "./Results/Results.jsx";

// English imports
import English from './English/English.jsx';
import Vocabulary from "./English/Vocabulary/Vocabulary.jsx";
import Courses from "./English/Vocabulary/Courses/Courses.jsx";
import LessonTypes from "./English/Vocabulary/LessonTypes/LessonTypes.jsx";
import LessonTypesSwitcher from "./English/Vocabulary/LessonTypes/LessonTypesSwitcher/LessonTypesSwitcher.jsx";
import IELTS from "./English/IELTS/IELTS.jsx";
import Writing from "./English/IELTS/Writing/Writing.jsx";
import WritingResolver from "./English/IELTS/Writing/WritingResolver/WritingResolver.jsx";
import Speaking from "./English/IELTS/Speaking/Speaking.jsx";
import SpeakingResolver from "./English/IELTS/Speaking/SpeakingResolver/SpeakingResolver.jsx";

// French imports
import French from './French/French.jsx';
import FrenchVocabulary from "./French/Vocabulary/Vocabulary.jsx";
import FrenchCourses from "./French/Vocabulary/Courses/Courses.jsx";
import FrenchLessonTypes from "./French/Vocabulary/LessonTypes/LessonTypes.jsx";
import FrenchLessonTypesSwitcher from "./French/Vocabulary/LessonTypes/LessonTypesSwitcher/LessonTypesSwitcher.jsx";

import Conjugation from './French/Conjugation/Conjugation.jsx';
import ConjugationSingleWord from './French/Conjugation/ConjugationSingleWord/ConjugationSingleWord.jsx';

class App extends Component {

  render() {

    const routingLinks = <ul className="navigation_top">
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>;

    const routingFunctions = <div>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* English Routes */}
        <Route path="/english" element={<English />} />
        <Route path="/english/ielts" element={<IELTS />} />
        <Route path="/english/ielts/writing" element={<Writing />} />
        <Route path="/english/ielts/speaking" element={<Speaking />} />
        <Route path="/english/ielts/writing/:course" element={<WritingResolver />} />
        <Route path="/english/ielts/speaking/:course" element={<SpeakingResolver />} />

        <Route path="/english/vocabulary" element={<Vocabulary />} />
        <Route path="/english/vocabulary/:courseId" element={<Courses />} />
        <Route path="/english/vocabulary/:courseId/:unitId" element={<LessonTypes />} />
        <Route path="/english/vocabulary/:courseId/:unitId/:lessonType" element={<LessonTypesSwitcher />} />

        {/* French Routes */}
        <Route path="/french" element={<French />} />
        <Route path="/french/vocabulary" element={<FrenchVocabulary />} />
        <Route path="/french/vocabulary/:courseId" element={<FrenchCourses />} />
        <Route path="/french/vocabulary/:courseId/:unitId" element={<FrenchLessonTypes />} />
        <Route path="/french/vocabulary/:courseId/:unitId/:lessonType" element={<FrenchLessonTypesSwitcher />} />

        <Route path="/french/conjugation" element={<Conjugation />} />
        <Route path="/french/conjugation/:wordId" element={<ConjugationSingleWord />} />

        {/* Results Routes */}
        <Route path="/results" element={<Results />} />
      </Routes>

    </div>;

    return (
      <div className="App">
        <Router>
          <React.Fragment>
            {routingLinks}
            {routingFunctions}
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
