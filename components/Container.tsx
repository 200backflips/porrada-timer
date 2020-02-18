import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import setIntervals from '../redux/actions/intervals';
import setLatestPreset from '../redux/actions/latestPreset';
import setIsCountingDown from '../redux/actions/isCountingDown';
import Time from './Time';
import InfoText from '../elements/InfoText';
import StartButton from './StartButton';
import PresetButton from './PresetButton';
import presets from '../helpers/presets';

const Container = () => {
  const intervals = useSelector(state => state.intervals);
  const latestPreset = useSelector(state => state.latestPreset);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIntervals(presets[0]));
    dispatch(setLatestPreset(presets[0]));
  }, []);

  useEffect(() => {
    if (intervals.min === 0 && intervals.sec === 0 && intervals.rounds === 0) {
      dispatch(setIsCountingDown(false));
      setTimeout(() => {
        dispatch(setIntervals(latestPreset));
      }, 1000);

      // leave room for "time" soundbite
      // setTimeout(() => {
      //   dispatch(setIntervals(latestPreset));
      // }, 3000);
    }
  }, [intervals]);

  return (
    <View style={styles.container}>
      <InfoText />
      <Time />
      <View style={styles.buttonView}>
        <StartButton />
        <PresetButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 50
  },
  infoText: {
    marginBottom: 10,
    fontSize: 17
  },
  buttonView: {
    flexDirection: 'row'
  }
});

export default Container;
