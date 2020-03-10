import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Appearance } from 'react-native-appearance';
const darkMode = Appearance.getColorScheme() === 'dark';

const DisplayCountdown = () => {
  const intervals = useSelector(state => state.intervals);

  const display =
    intervals.min === 0 &&
    intervals.sec === 0 &&
    intervals.rest > 0 &&
    intervals.rounds > 1 ? (
      <Text style={styles.countdown}>{intervals.rest}</Text>
    ) : (
      <Text style={styles.countdown}>
        {intervals.min > 9 ? intervals.min : '0' + intervals.min}:
        {intervals.sec > 9 ? intervals.sec : '0' + intervals.sec}
      </Text>
    );

  return display;
};

const styles = StyleSheet.create({
  countdown: {
    padding: 35,
    fontSize: 100,
    color: darkMode ? '#ffffff' : '#000000'
  }
});

export default DisplayCountdown;
