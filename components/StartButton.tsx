import React, { useEffect } from 'react';
import Button from '../elements/Button';
import { useSelector, useDispatch } from 'react-redux';
import setIntervals from '../redux/actions/intervals';
import setIsCountingDown from '../redux/actions/isCountingDown';

const StartButton = () => {
  const intervals = useSelector(state => state.intervals);
  const latestPreset = useSelector(state => state.latestPreset);
  const isCountingDown = useSelector(state => state.isCountingDown);
  const dispatch = useDispatch();

  useEffect(() => {
    if (intervals.min === 0 && intervals.sec === 0 && intervals.rounds === 0) {
      dispatch(setIsCountingDown(false));
      setTimeout(() => {
        dispatch(setIntervals(latestPreset));
      }, 3000);
    }
  }, [intervals]);

  const buttonText = isCountingDown ? 'pause' : 'start';

  const toggleCountdown = () => {
    dispatch(setIsCountingDown(!isCountingDown));
  };

  return <Button props={{ buttonText, pressHandler: toggleCountdown }} />;
};

export default StartButton;
