import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Appearance } from 'react-native-appearance';
const darkMode = Appearance.getColorScheme() === 'dark';

const Button = ({ props }) => {
  const { buttonText, pressHandler } = props;

  return (
    <TouchableOpacity style={styles.buttons} onPress={pressHandler}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttons: {
    width: 110,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)'
  }
});

export default Button;
