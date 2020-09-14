import React, { useEffect, useRef } from 'react';
import { Vibration } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import setIntervals from '../redux/actions/intervals';
import DisplayCountdown from './DisplayCountdown';

const Countdown = () => {
  const { vibrate } = Vibration;

  const intervals = useSelector((state) => state.intervals);
  const latestPreset = useSelector((state) => state.latestPreset);
  const isCountingDown = useSelector((state) => state.isCountingDown);
  const dispatch = useDispatch();

  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        if (savedCallback.current) {
          savedCallback.current();
        }
      };
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  useInterval(() => {
    if (isCountingDown) {
      if (intervals.sec > 0) {
        dispatch(setIntervals({ ...intervals, sec: intervals.sec - 1 }));
      } else if (intervals.min > 0 && intervals.sec === 0) {
        dispatch(
          setIntervals({ ...intervals, min: intervals.min - 1, sec: 59 })
        );
      } else if (
        intervals.rounds === 1 &&
        intervals.min === 0 &&
        intervals.sec === 0
      ) {
        dispatch(setIntervals({ ...intervals, rest: 0, rounds: 0 }));
      } else if (
        intervals.rounds > 0 &&
        intervals.min === 0 &&
        intervals.sec === 0 &&
        intervals.rest > 1
      ) {
        dispatch(setIntervals({ ...intervals, rest: intervals.rest - 1 }));
      } else if (intervals.rest === 1) {
        vibrate(500);
        dispatch(
          setIntervals({
            min: latestPreset.min,
            sec: latestPreset.sec,
            rest: latestPreset.rest,
            rounds: intervals.rounds - 1,
          })
        );
      }
    }
  }, 1000);

  return <DisplayCountdown />;
};

export default Countdown;
