const initState = 1;

const counterReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'INCREMENT_COUNTER':
      return payload;
    default:
      return state;
  }
};

export default counterReducer;
