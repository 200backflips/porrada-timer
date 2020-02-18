import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>porrada timer</Text>
      <Text>[po’xada ˈtaɪ.mər]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: Constants.statusBarHeight,
    alignItems: 'center',
  },
  heading: {
    fontSize: 30
  }
});

export default Header;
