import React, { useEffect, useState } from 'react';
import style from '../sass/Question.module.scss';
const Question = ({ num1, num2, onTimeOut, setOff, setOn, operator }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setOff();
    }, 2000);
    return () => {
      clearTimeout(timeout);
      onTimeOut();
      setOn();
    };
  });
  return (
    <div className={style.questionContainer}>
      <div className={style.questionBlock}>
        <span className={style.operand}>{num1}</span>
        <span className={style.operator}>{operator}</span>
        <span className={style.operand}>{num2}</span>
        <span className={style.operator}>=</span>
        <span>
          <input type="text" />
        </span>
      </div>
      <div className={style.scoreBlock}>
        <span>
          <button>Next</button>
        </span>
        <span className={style.score}>
          <span>Score:</span>
          <span>70</span>
        </span>
      </div>
    </div>
  );
};

export default Question;
