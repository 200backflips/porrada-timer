const initState = false;

const pickerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SET_PICKER':
      return payload;
    default:
      return state;
  }
};

export default pickerReducer;
