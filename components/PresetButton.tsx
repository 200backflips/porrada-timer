import React from 'react';
import Button from '../elements/Button';
import { useDispatch, useSelector } from 'react-redux';
import setIntervals from '../redux/actions/intervals';
import setLatestPreset from '../redux/actions/latestPreset';
import setIsCountingDown from '../redux/actions/isCountingDown';
import incrementCounter from '../redux/actions/counter';
import presets from '../helpers/presets';

const PresetButton = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const buttonText = 'presets';

  const pressHandler = () => {
    dispatch(setIsCountingDown(false));
    if (counter < presets.length - 1) {
      dispatch(incrementCounter(counter + 1));
    } else {
      dispatch(incrementCounter(0));
    }
    dispatch(setIntervals(presets[counter]));
    dispatch(setLatestPreset(presets[counter]));
  };

  return <Button props={{ buttonText, pressHandler }} />;
};

export default PresetButton;
