const pickerReducer = (state = false, { type, payload }) => {
  switch (type) {
    case 'SET_PICKER':
      return payload;
    default:
      return state;
  }
};

export default pickerReducer;
