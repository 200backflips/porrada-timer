import React from 'react';
import Button from '../elements/Button';
import { useSelector, useDispatch } from 'react-redux';
import setIsCountingDown from '../redux/actions/isCountingDown';

const StartButton = () => {
  const isCountingDown = useSelector(state => state.isCountingDown);
  const dispatch = useDispatch();

  const buttonText = isCountingDown ? 'pause' : 'start';

  const pressHandler = () => {
    dispatch(setIsCountingDown(!isCountingDown));
  };

  return <Button props={{ buttonText, pressHandler }} />;
};

export default StartButton;
