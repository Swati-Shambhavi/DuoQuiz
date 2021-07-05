import React, { useEffect,useState } from 'react';
import style from '../sass/Question.module.scss';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

let askedQuestion2 = {
  operand1: 0,
  operand2: 0,
  operator: '+',
  correctAnswer: 0,
  enteredAnswer: 0,

};

const Question = ({
  num1,
  num2,
  onTimeOut,
  setOff,
  setOn,
  operator,
  yourScore,
  qNo,
    
}) => {
  const answerRef = useRef();
  const num1Str = num1 + '';
  const num2Str = num2 + '';
  let hasDispatched = false;
  const dispatch = useDispatch();
  let timeout = '';
  const [timer,setTimer]=useState('')
  useEffect(() => {
    setTimer(setTimeout(() => {
      setOff();
    
    }, 3000))

    return () => {
      clearTimeout(timer);
      onTimeOut();
      setOn();
      if (!hasDispatched) {
        const correctAnswer = eval(`${num1Str} ${operator} ${num2Str}`);
        askedQuestion2 = {
          operand1: num1,
          operand2: num2,
          operator: operator,
          correctAnswer: correctAnswer,
          enteredAnswer: 'none',
          isCorrect: false,
        };
        dispatch({
          type: 'SET_QUESTION_ARRAY',
          payload: askedQuestion2,
        });
      }
     
    };
  }, [setTimer]);

  const setQuestionHandler = () => {
    const enteredAnswer = answerRef.current.value;
    const correctAnswer = eval(`${num1Str} ${operator} ${num2Str}`);
    const answerIsCorrect =
      parseInt(enteredAnswer) === correctAnswer ? true : false;
    askedQuestion2 = {
      operand1: num1,
      operand2: num2,
      operator: operator,
      correctAnswer: correctAnswer,
      enteredAnswer: enteredAnswer,
      isCorrect: answerIsCorrect,
    };
    if (!hasDispatched) {
      dispatch({
        type: 'SET_QUESTION_ARRAY',
        payload: askedQuestion2,
      });
    }
    hasDispatched = true;
    clearTimeout(timer);
    onTimeOut();
    setOn();
    
  };
  return (
    <div className={style.questionContainer}>
      <h4>Q. {qNo}</h4>
      <div className={style.questionBlock}>
        <span className={style.operand}>{num1}</span>
        <span className={style.operator}>{operator}</span>
        <span className={style.operand}>{num2}</span>
        <span className={style.operator}>=</span>
        <span>
          <input type="text" ref={answerRef} placeholder="?" />
        </span>
      </div>
      <div className={style.scoreBlock}>
        <span>
          <button onClick={setQuestionHandler}>Next</button>
        </span>
        <span className={style.score}>
          <span>Score:</span>
          <span>{yourScore}</span>
        </span>
      </div>
    </div>
  );
};

export default Question;
