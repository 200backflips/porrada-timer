const incrementCounter = count => {
  return {
    type: 'INCREMENT_COUNTER',
    payload: count
  };
};

export default incrementCounter;
