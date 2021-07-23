const Quiz1Reducer = (
  state = {
    prereq: {},
    questionsAsked: [],
    totalScore: 0,
    quiz1Configure: { timer1: false },
  },
  action
) => {
  switch (action.type) {
    case 'SET_PREREQUISITES':
      return {
        ...state,
        prereq: action.payload,
      };
    case 'SET_QUESTION_ARRAY':
      let newQuestion = action.payload;
      let newPoint = action.payload.isCorrect ? 10 : 0;
      let newTotalScore = state.totalScore + newPoint;
      console.log(
        'inside reducer',
        newQuestion,
        ' your score=',
        newPoint,
        ' new total= ',
        newTotalScore
      );
      let newQuestionArray = state.questionsAsked.concat(newQuestion);
      console.log('inside reducer', newQuestionArray);
      return {
        prereq: state.prereq,
        questionsAsked: newQuestionArray,
        totalScore: newTotalScore,
        quiz1Configure: state.quiz1Configure,
      };
    case 'GET_QUESTION_ARRAY':
      return state.questionsAsked;

    case 'SET_ON_TIMER1':
      return {
        ...state,
        quiz1Configure: {
          timer1: true,
        },
      };
    case 'SET_OFF_TIMER1':
      return {
        ...state,
        quiz1Configure: {
          timer1: false,
        },
      };
    case 'GET_TIMER1':
      return state.quiz1Configure.timer1;
    case 'RESET':
      return { prereq: {}, questionsAsked: [], totalScore: 0 };
    default:
      return state;
  }
};
export default Quiz1Reducer;
