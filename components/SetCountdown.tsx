import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const SetCountdown = ({ props }) => {
  const { time, setTime } = props;

  const setMinutes = value => setTime({ ...time, min: +value });
  const setRounds = value => setTime({ ...time, rounds: +value });
  const setRest = value => setTime({ ...time, rest: +value });

  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputs}
        keyboardType={'number-pad'}
        onChangeText={setMinutes}
        />
      <TextInput
        style={styles.inputs}
        keyboardType={'number-pad'}
        onChangeText={setRounds}
        />
      <TextInput
        style={styles.inputs}
        keyboardType={'number-pad'}
        onChangeText={setRest}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    flexDirection: 'row',
  },
  inputs: {
    padding: 14,
    borderWidth: 1,
    color: 'rgba(0,0,0,0.5)',
    borderColor: 'rgba(0,0,0,0.3)'
  }
});

export default SetCountdown;
