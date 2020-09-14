import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../elements/Button';
import setIsCountingDown from '../redux/actions/isCountingDown';
import setIntervals from '../redux/actions/intervals';

const PresetButton = () => {
  const latestPreset = useSelector((state) => state.latestPreset);
  const dispatch = useDispatch();

  const buttonText = 'reset';

  const pressHandler = () => {
    dispatch(setIntervals(latestPreset));
    dispatch(setIsCountingDown(false));
  };

  return <Button {...{ buttonText, pressHandler }} />;
};

export default PresetButton;
