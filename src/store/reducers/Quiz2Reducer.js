const Quiz2Reducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PREREQUISITES':
      return {
        prereq: action.payload,
      };
    default:
      return state;
  }
};
export default Quiz2Reducer;
