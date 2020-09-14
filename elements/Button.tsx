import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { impactAsync, ImpactFeedbackStyle } from 'expo-haptics';

const Button = ({ buttonText, pressHandler, buttonColor = '#355eff' }) => {
  const hapticFeedback = () => impactAsync(ImpactFeedbackStyle.Heavy);

  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: buttonColor }}
      onPress={hapticFeedback}
      onPressOut={pressHandler}
      activeOpacity={1}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default Button;
