const Quiz2Reducer = (
  state = {
    prereq2: {},
    questionsAsked2: [],
    totalScore2: 0,
    quiz2Configure: { timer2: false },
  },
  action
) => {
  switch (action.type) {
    case 'SET_PREREQUISITES2':
      return {
        ...state,
        prereq2: action.payload,
      };
    case 'SET_QUESTION_ARRAY2':
      let newQuestion = action.payload;
      let newPoint = action.payload.isCorrect ? 10 : 0;
      let newTotalScore = state.totalScore2 + newPoint;
      console.log(
        'inside reducer',
        newQuestion,
        ' your score=',
        newPoint,
        ' new total= ',
        newTotalScore
      );
      let newQuestionArray = state.questionsAsked2.concat(newQuestion);
      console.log('inside reducer', newQuestionArray);
      return {
        prereq: state.prereq2,
        questionsAsked2: newQuestionArray,
        totalScore2: newTotalScore,
        quiz2Configure: state.quiz2Configure,
      };
    case 'GET_QUESTION_ARRAY2':
      return state.questionsAsked2;

    case 'SET_ON_TIMER2':
      return {
        ...state,
        quiz2Configure: {
          timer2: true,
        },
      };
    case 'SET_OFF_TIMER2':
      return {
        ...state,
        quiz2Configure: {
          timer2: false,
        },
      };
    case 'GET_TIMER2':
      return state.quiz2Configure.timer2;
    case 'RESET2':
      return { prereq2: {}, questionsAsked2: [], totalScore2: 0 };
    default:
      return state;
  }
};
export default Quiz2Reducer;
