const isCountingDownReducer = (state = false, { type, payload }) => {
  switch (type) {
    case 'SET_IS_COUNTING_DOWN':
      return payload;
    default:
      return state;
  }
};

export default isCountingDownReducer;
