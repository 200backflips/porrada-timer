import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';

const Button = ({ props }) => {
  const { buttonText, pressHandler } = props;

  const hapticFeedback = () => {
    const style = Haptics.ImpactFeedbackStyle.Heavy;
    Haptics.impactAsync(style);
  };

  return (
    <TouchableOpacity
      style={styles.button}
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
    width: 150,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#355eff'
  },
  buttonText: {
    fontSize: 25,
    textAlign: 'center',
    color: '#ffffff'
  }
});

export default Button;
