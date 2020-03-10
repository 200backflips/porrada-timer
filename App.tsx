import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Appearance } from 'react-native-appearance';
const darkMode = Appearance.getColorScheme() === 'dark';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.app}>
        <Header />
        <Container />
        <Footer />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: darkMode ? '#151515' : '#ffffff',
    height: Dimensions.get('window').height
  }
});

export default App;
