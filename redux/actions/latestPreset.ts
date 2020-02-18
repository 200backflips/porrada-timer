const setLatestPreset = time => {
	return {
		type: 'SET_LATEST_PRESET',
		payload: time
	};
};

export default setLatestPreset;