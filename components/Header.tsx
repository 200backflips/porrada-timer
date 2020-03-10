import React from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { Appearance } from 'react-native-appearance';
const darkMode = Appearance.getColorScheme() === 'dark';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.heading}>porrada timer</Text>
      <Text style={styles.phonetic}>[po’xada ˈtaɪ.mər]</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 590,
    marginTop: Constants.statusBarHeight,
    padding: 5,
    alignItems: 'center'
  },
  heading: {
    fontSize: 30,
    color: darkMode ? '#ffffff' : '#000000'
  },
  phonetic: {
    color: darkMode ? '#ffffff' : '#000000'
  }
});

export default Header;
