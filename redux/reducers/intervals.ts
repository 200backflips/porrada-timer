const initState = {};

const intervalsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_INTERVALS':
      return payload;
    default:
      return state;
  }
};

export default intervalsReducer;
