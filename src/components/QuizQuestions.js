import React, { useEffect, useState } from 'react';
import Card from './UI/Card';
import H3 from './UI/H3';
import { useSelector } from 'react-redux';
import Question from './Question';
const generateRandomNumber = (min = 1, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
let questionNumber = 1;
const QuizQuestions = () => {
  const { numberOfQuestions, operator, maxNumber } = useSelector(
    (state) => state.Quiz1Reducer.prereq
  );
  const [timer, setTimer] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  useEffect(() => {
    setTimer(true);
    generateTwoNumbers();
  }, []);
  const generateTwoNumbers = () => {
    setNum1(generateRandomNumber(1, maxNumber));
    setNum2(generateRandomNumber(1, maxNumber));
  };
  const setOnTimer = () => {
    if (questionNumber < numberOfQuestions) {
      setTimer(true);
      questionNumber = questionNumber + 1;
      console.log(questionNumber);
    } else {
      setTimer(false);
    }
  };
  const setOffTimer = () => {
    setTimer(false);
  };
  return (
    <Card>
      <H3>Quiz 1</H3>
      {timer && (
        <Question
          operator={operator}
          onTimeOut={generateTwoNumbers}
          num1={num1}
          num2={num2}
          setOn={setOnTimer}
          setOff={setOffTimer}
        />
      )}
    </Card>
  );
};

export default QuizQuestions;
