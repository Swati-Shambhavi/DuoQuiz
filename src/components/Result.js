import React from 'react';
import style from '../sass/Result.module.scss';

const Result = ({ questionAsked, qNo }) => {
  const enteredAnswerClass = questionAsked.isCorrect ? 'correct' : 'wrong';

  return (
    <div class={style.resultContainer}>
      <div className={style.questionPart}>
        <span>Q.{qNo} </span>
        <span>{questionAsked.operand1}</span>
        <span>{questionAsked.operator}</span>
        <span>{questionAsked.operand2}</span>
        <span>=</span>
        <h4 className={`${style[enteredAnswerClass]} ${style.answer}`}>
          {questionAsked.enteredAnswer}
        </h4>
        <h4>{questionAsked.correctAnswer}</h4>
      </div>
    </div>
  );
};

export default Result;
