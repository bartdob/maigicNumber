import React, { useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/Header';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

function App() {
  const [userNumber, setUserNumber] = useState();
  const [rounds, setRounds] = useState(0);

  const newGameHandler = () => {
    setRounds(0);
    setUserNumber(null);
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setRounds(0);
  }

  const gameOverHandler = numOfRounds => {
    setRounds(numOfRounds);
  }

  let content = <StartScreen onStartGame={startGameHandler}/>;

  if(userNumber && rounds <=0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (rounds >0) {
    content = <GameOver roundsNumber={rounds} userNumber={userNumber} onRestart={newGameHandler}/>
  }

  return (
      <View style={styles.screen}>
        <Header title={"magicNumber"} />
        {content}
      </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

export default App;
