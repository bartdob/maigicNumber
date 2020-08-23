import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = props => {
    return(
        <View style={styles.screen}>
            <Text>Game Over man</Text>
            <Text>Rounds - {props.roundsNumber}</Text>
            <Text>The number was: {props.userNumber}</Text>
            <Button title="restart Game" onPress={props.onRestart}></Button>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOver;