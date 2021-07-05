import React from 'react';
import style from '../sass/Quiz.module.scss';
import Select from './Controls/Select';
import Button from './Controls/Button';
import { useRef } from 'react';
import Card from './UI/Card';
import H3 from './UI/H3';

import { useDispatch } from 'react-redux';

const Quiz = ({ name, onStart }) => {
  const dispatch = useDispatch();
  const numOfQuestRef = useRef();
  const operatorRef = useRef();
  const maxNumRef = useRef();

  const clickHandler = () => {
    // console.log(numOfQuestRef.current.value);
    // dispatch({
    //   type: 'SET_PREREQUISITES',
    //   payload: {
    //     numberOfQuestions: numOfQuestRef.current.value,
    //     operator: operatorRef.current.value,
    //     maxNumber: maxNumRef.current.value,
    //   },
    // });
    onStart({
      prerequisites: {
        numberOfQuestions: numOfQuestRef.current.value,
        operator: operatorRef.current.value,
        maxNumber: maxNumRef.current.value,
      },
    });
  };

  return (
    <Card>
      <H3>{name}</H3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={style.formControl}>
          <Select
            id="maximunQuestions"
            label="Select number of questions"
            name="maxNumQues"
            values={[5, 10, 15, 20]}
            ref_={numOfQuestRef}
          />
        </div>
        <div className={style.formControl}>
          <Select
            id="operator"
            label="Select the operator"
            name="operator"
            values={['+', '-', '*', '/']}
            ref_={operatorRef}
          />
        </div>
        <div className={style.formControl}>
          <Select
            id="maxNum"
            label="Select the maximum number"
            name="maxNum"
            values={[5, 10, 15, 20, 25, 30]}
            ref_={maxNumRef}
          />
        </div>
        <div className={style.btn}>
          <Button onClickBtn={clickHandler}>Start Quiz!</Button>
        </div>
      </form>
    </Card>
  );
};

export default Quiz;
