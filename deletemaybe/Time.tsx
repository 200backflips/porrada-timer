import React from 'react';
import { StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Countdown from '../components/Countdown';
import { Appearance } from 'react-native-appearance';
const darkMode = Appearance.getColorScheme() === 'dark';

const Time = () => {
  const intervals = useSelector(state => state.intervals);
  const isCountingDown = useSelector(state => state.isCountingDown);

  const display = isCountingDown ? (
    <Countdown />
  ) : (
    <Text style={styles.time}>
      {intervals.min > 9 ? intervals.min : '0' + intervals.min}:
      {intervals.sec > 9 ? intervals.sec : '0' + intervals.sec}
    </Text>
  );
  return (
    <TouchableOpacity style={styles.timeInput}>{display}</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  timeInput: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    padding: 30
  },
  time: {
    fontSize: 60,
    color: darkMode ? '#ffffff' : '#000000'
  }
});

export default Time;
