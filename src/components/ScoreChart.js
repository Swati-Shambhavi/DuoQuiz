import React from 'react';
import Card from './UI/Card';
import Result from './Result.js';
import { useDispatch } from 'react-redux';

const ScoreChart = ({ questionsAsked, totalScore }) => {
  const dispatch = useDispatch();
  const resetQuizHandler = () => {
    dispatch({
      type: 'RESET',
    });
  };
  return (
    <div>
      <h5
        style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '1rem',
          textDecoration: 'underline',
        }}
      >
        All questions and their answers
      </h5>
      {questionsAsked.map((questionAsked, index) => (
        <Result questionAsked={questionAsked} key={index} qNo={index + 1} />
      ))}
      <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>
        Your Score= {totalScore}
      </h3>
      {/* <button onClick={resetQuizHandler}>Retake!</button> */}
    </div>
  );
};

export default ScoreChart;
