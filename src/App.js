import React, { useState } from 'react';
import Quiz from './components/Quiz';
import style from './sass/App.module.scss';
import QuizQuestions from './components/QuizQuestions';
function App() {
  const [startQuiz1, setStartQuiz1] = useState(false);
  const [startQuiz2, setStartQuiz2] = useState(false);
  const startQuiz1Handler = () => {
    setStartQuiz1(true);
  };
  const startQuiz2Handler = () => {
    setStartQuiz2(true);
  };
  return (
    <div className={style.container}>
      <h1>Welcome to the duo quiz! </h1>
      <main>
        {!startQuiz1 ? (
          <Quiz onStart={startQuiz1Handler} name="Quiz 1" />
        ) : (
          <QuizQuestions />
        )}
        {!startQuiz2 ? (
          <Quiz name="Quiz 2" onStart={startQuiz2Handler} />
        ) : (
          <QuizQuestions />
        )}
      </main>
    </div>
  );
}

export default App;
