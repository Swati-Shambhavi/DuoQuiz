import React, { useState } from 'react';
import Quiz from './components/Quiz';
import style from './sass/App.module.scss';
import QuizQuestions from './components/QuizQuestions';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const [startQuiz1, setStartQuiz1] = useState(false);
  const [startQuiz2, setStartQuiz2] = useState(false);
  const dispatch = useDispatch();

  const { prereq, questionsAsked, totalScore, quiz1Configure } = useSelector(
    (state) => state.Quiz1Reducer
  );

  const { timer1 } = quiz1Configure;

  const { prereq2, questionsAsked2, totalScore2, quiz2Configure } = useSelector(
    (state) => state.Quiz2Reducer
  );
  const { timer2 } = quiz2Configure;
  const setTimerQuiz1 = (value) => {
    if (value) {
      dispatch({
        type: 'SET_ON_TIMER1',
      });
    } else {
      dispatch({
        type: 'SET_OFF_TIMER1',
      });
    }
  };

  const setTimerQuiz2 = (value) => {
    if (value) {
      dispatch({
        type: 'SET_ON_TIMER2',
      });
    } else {
      dispatch({
        type: 'SET_OFF_TIMER2',
      });
    }
  };

  const startQuiz1Handler = (prerequisite_payload) => {
    dispatch({
      type: 'SET_PREREQUISITES',
      payload: prerequisite_payload.prerequisites,
    });
    setStartQuiz1(true);
  };
  const startQuiz2Handler = (prerequisite_payload) => {
    dispatch({
      type: 'SET_PREREQUISITES2',
      payload: prerequisite_payload.prerequisites,
    });
    setStartQuiz2(true);
  };
  return (
    <div className={style.container}>
      <h1>Welcome to the duo quiz! </h1>
      <main>
        {!startQuiz1 ? (
          <Quiz onStart={startQuiz1Handler} name="Quiz 1" />
        ) : (
          <QuizQuestions
            name="Quiz 1"
            prereq={prereq}
            totalScore={totalScore}
            questionsAsked={questionsAsked}
            timer={timer1}
            setTimer={setTimerQuiz1}
          />
        )}
        {/* {!startQuiz2 ? (
          <Quiz name="Quiz 2" onStart={startQuiz2Handler} />
        ) : (
          <QuizQuestions
            name="Quiz 2"
            prereq={prereq2}
            totalScore={totalScore2}
            questionsAsked={questionsAsked2}
            timer={timer2}
            setTimer={setTimerQuiz2}
          />
        )} */}
      </main>
    </div>
  );
}

export default App;
