const initState = false;

const isCountingDownReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_IS_COUNTING_DOWN':
      return payload;
    default:
      return state;
  }
};

export default isCountingDownReducer;