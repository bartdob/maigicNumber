import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/Header';
import StartScreen from './screens/StartScreen';

function App() {
  return (
      <View style={styles.screen}>
        <Header title={"magicNumber"} />
        <StartScreen />
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App;
