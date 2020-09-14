const counterReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case 'INCREMENT_COUNTER':
      return payload;
    default:
      return state;
  }
};

export default counterReducer;
