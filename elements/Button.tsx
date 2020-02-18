import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

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
    width: 100,
    padding: 8,
    margin: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)'
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)'
  }
});

export default Button;
