import React, { useCallback } from 'react';
import './Results.css';

function Results() {

  const localizeDate = useCallback((timestamp) => {
    const outputDate = new Date(+timestamp);
    return `${outputDate.getDate()}/${outputDate.getMonth() + 1}/${outputDate.getFullYear()}  ${outputDate.getHours()}:${outputDate.getMinutes()}`;
  }, []);

  const localData = JSON.parse(localStorage.getItem('languageTest')) || { result: [] };

  const tableRows = localData.result.map((row, index) => (
    <tr key={index}>
      <td>{row.course}</td>
      <td>{row.lesson}</td>
      <td>{row.typeLesson}</td>
      <td className="success_rate_td">{row.success.toFixed(2)} %</td>
      <td className="wrong_answers">
        {row.wrongAnswers.map((span, index2) => (
          <span key={index2} className="table_wrong_answers">{span}</span>
        ))}
      </td>
      <td className="table_date">{localizeDate(row.date)}</td>
    </tr>
  ));

  const resultsTable = (
    <>
      <table>
        <thead>
        <tr>
          <th>Course</th>
          <th>Lesson</th>
          <th>Type</th>
          <th>Success</th>
          <th>Wrong answers</th>
          <th>Date</th>
        </tr>
        </thead>
        <tbody>
        {tableRows}
        </tbody>
      </table>
    </>
  );

  return (
    <div className="results_container">
      <h3>My results</h3>
      {resultsTable}
    </div>
  );
}

export default Results;