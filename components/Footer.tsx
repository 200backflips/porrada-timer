import React from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';

const Footer = () => {
  return (
    <Text style={styles.footer}>
      'porrada' is a noun meaning 'beating' in portuguese. u will often hear
      jiujitsu practicioners refer to their training sessions as 'porradas'.
      different academies will have different levels of rough housing and
      cardiovascularly taxing training methods. u might find urself in an all
      out brawl with ur training partner at times. this has given birth to the
      expression 'everyday porrada'.
    </Text>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: Dimensions.get('window').width - 40
  }
});

export default Footer;
