import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

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
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
