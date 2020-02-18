const setIsCountingDown = boolean => {
	return {
		type: 'SET_IS_COUNTING_DOWN',
		payload: boolean
	};
};

export default setIsCountingDown;