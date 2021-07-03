const Quiz1Reducer = (state = { prereq: {} }, action) => {
  switch (action.type) {
    case 'SET_PREREQUISITES':
      return {
        prereq: action.payload,
      };
    default:
      return state;
  }
};
export default Quiz1Reducer;
