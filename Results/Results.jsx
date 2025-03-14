import React, { Component } from 'react';
import './Results.css';

class Results extends Component {

  localizeDate = (timestamp) => {
    let outputDate = new Date(+timestamp);
    let parsed = `${outputDate.getDate()}/${outputDate.getMonth() + 1}/${outputDate.getFullYear()}  ${outputDate.getHours()}:${outputDate.getMinutes()}`;
    return parsed;
  };

  render() {
    const localData = JSON.parse(localStorage.getItem('languageTest'));

    const tableRows = localData.result.map(row => {
      return <tr>
        <td>{row.course}</td>
        <td>{row.lesson}</td>
        <td>{row.typeLesson}</td>
        <td className="success_rate_td">{row.success.toFixed(2)} %</td>
        <td className="wrong_answers">{row.wrongAnswers.map(span => <span className="table_wrong_answers">{span}</span>)}</td>
        <td className="table_date">{this.localizeDate(row.date)}</td>
      </tr>
    });
    const resultsTable = <React.Fragment>
      <table>
        <tr>
          <th>Course</th>
          <th>Lesson</th>
          <th>Type</th>
          <th>Success</th>
          <th>Wrong answers</th>
          <th>Date</th>
        </tr>
        {tableRows}
      </table>
    </React.Fragment>;

    return <div className="results_container">
      <h3>My results</h3>
      {resultsTable}
    </div>;
  }
}

export default Results;