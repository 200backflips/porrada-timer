const latestPresetReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'SET_LATEST_PRESET':
      return payload;
    default:
      return state;
  }
};

export default latestPresetReducer;
