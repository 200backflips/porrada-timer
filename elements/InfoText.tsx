import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const InfoText = () => {
  const intervals = useSelector(state => state.intervals);
  const latestPreset = useSelector(state => state.latestPreset);
  
  return (
    <View style={styles.infoView}>
      <Text style={styles.infoText}>{latestPreset.min} min rounds</Text>
      <Text style={styles.infoText}>{latestPreset.rest} sec rest</Text>
      <Text style={styles.infoText}>
        {intervals.rounds} round{intervals.rounds > 1 && 's'} left of{' '}
        {latestPreset.rounds}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoView: {
    alignItems: 'center'
  },
  infoText: {
    marginBottom: 10,
    fontSize: 17
  }
});

export default InfoText;
