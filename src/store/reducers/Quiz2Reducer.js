const Quiz2Reducer = (
  state = { prereq: {}, questionsAsked: [], totalScore: 0 },
  action
) => {
  switch (action.type) {
    case 'SET_PREREQUISITES2':
      return {
        ...state,
        prereq: action.payload,
      };
    case 'SET_QUESTION_ARRAY2':
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
      };
    case 'GET_QUESTION_ARRAY2':
      return state.questionsAsked;
    case 'RESET2':
      return { prereq: {}, questionsAsked: [], totalScore: 0 };
    default:
      return state;
  }
};
export default Quiz2Reducer;
