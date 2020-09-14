import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../elements/Button';
import setIsCountingDown from '../redux/actions/isCountingDown';
import setIntervals from '../redux/actions/intervals';
import setLatestPreset from '../redux/actions/latestPreset';
import setPicker from '../redux/actions/picker';
import presets from '../helpers/presets';

const PresetButton = () => {
  const picker = useSelector((state) => state.picker);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIntervals(presets[0]));
    dispatch(setLatestPreset(presets[0]));
  }, []);

  const buttonText = 'presets';

  const togglePicker = () => {
    dispatch(setIsCountingDown(false));
    dispatch(setPicker(!picker));
  };

  return <Button {...{ buttonText, pressHandler: togglePicker }} />;
};

export default PresetButton;
