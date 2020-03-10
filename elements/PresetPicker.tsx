import React from 'react';
import { StyleSheet, View, Picker } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import setIntervals from '../redux/actions/intervals';
import setLatestPreset from '../redux/actions/latestPreset';
import presets from '../helpers/presets';

import { Appearance } from 'react-native-appearance';
const darkMode = Appearance.getColorScheme() === 'dark';

const PresetPicker = () => {
  const latestPreset = useSelector(state => state.latestPreset);
  const dispatch = useDispatch();

  const setPresets = (value, index) => {
    dispatch(setIntervals(presets[index]));
    dispatch(setLatestPreset(presets[index]));
  };

  return (
    <View>
      <Picker
        selectedValue={latestPreset.name}
        style={styles.picker}
        itemStyle={styles.pickerItem}
        onValueChange={setPresets}
      >
        {presets.map(preset => (
          <Picker.Item
            key={preset.name}
            label={preset.name}
            value={preset.name}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 136,
    backgroundColor: darkMode ? '#151515' : '#ffffff'
  },
  pickerItem: {
    color: darkMode ? '#ffffff' : '#000000'
  }
});

export default PresetPicker;
