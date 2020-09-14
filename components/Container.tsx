import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import InfoText from '../elements/InfoText';
import Countdown from './Countdown';
import StartButton from './StartButton';
import ResetButton from './ResetButton';
import PresetButton from './PresetButton';
import { Appearance } from 'react-native-appearance';
const darkMode = Appearance.getColorScheme() === 'dark';

const Container = () => {
  return (
    <View style={styles.container}>
      <InfoText />
      <Countdown />
      <View style={styles.buttonView}>
        <StartButton />
        <ResetButton />
        <PresetButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 260,
  },
  buttonView: {
    flexDirection: 'row',
  },
});

export default Container;
