import React from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';
import { useSelector } from 'react-redux';
import PresetPicker from '../elements/PresetPicker';
import { Appearance } from 'react-native-appearance';
const darkMode = Appearance.getColorScheme() === 'dark';

const Footer = () => {
  const picker = useSelector(state => state.picker);

  return (
    <View style={styles.footer}>
      <Text style={styles.footerParagraph}>
        'porrada' is a noun meaning 'beating' in portuguese. u will often hear
        jiujitsu practicioners refer to their training sessions as 'porradas'.
        different academies will have different levels of rough housing and
        cardiovascularly taxing training methods. u might find urself in an all
        out brawl with ur training partner at times. this has given birth to the
        expression 'everyday porrada'.
      </Text>
      {picker && <PresetPicker />}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: Dimensions.get('window').width
  },
  footerParagraph: {
    paddingRight: 20,
    paddingLeft: 20,
    color: darkMode ? '#ffffff' : '#000000'
  }
});

export default Footer;
