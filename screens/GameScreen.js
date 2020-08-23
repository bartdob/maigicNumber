import React, {useState, useRef, useEffect } from 'react';
import {View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandom = (min, max, exclude) => {
    min = Math.ceil(min);
    max= Math.floor(max);

    const randomNumber = Math.floor(Math.random() * (max-min)) + min;
    if(randomNumber === exclude) {
        return generateRandom(min, max, exclude);
    }else{
        return randomNumber;
    }

} 


const GameScreen = props => {
   const [currentGuess, setCurrentGuess]  = useState(generateRandom(1, 100, props.userChoice));

   const [roundsG, setRoundsG] = useState(0);
   const currentLow = useRef(1);
   const currentHight = useRef(100);

   const {userChoice, onGameOver} = props;

   useEffect(()=>{
       if(currentGuess === userChoice){
           onGameOver(roundsG);
       }

   }, [currentGuess, userChoice, onGameOver]);

const nextGuesHandler = direction => {
    if(
    (direction === 'lower' && currentGuess < props.userChoice) || 
    (direction === 'greater' && currentGuess > props.userChoice)) {
        Alert.alert("wrong", "wrong" [
            { text: 'sorry', style: 'cancel'}]);
    return;
    }
    if (direction === 'lower'){
        currentHight.current = currentGuess;
    }else{
        currentLow.current = currentGuess;
    }
    const nextNumber = generateRandom(currentLow.current, currentHight.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRoundsG(curRounds => curRounds + 1);

}; 

   return (
       <View style={styles.screen}>
           <Text>Computer Number</Text>
           <NumberContainer>{currentGuess}</NumberContainer>
           <Card style={styles.ButtonContainer}>
               <Button title="Higher" onPress={nextGuesHandler.bind(this, 'greater')}></Button>
               <Button title="Lower" onPress={nextGuesHandler.bind(this, 'lower')}></Button>
           </Card>
       </View>
   )

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        width: 400,
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: 300,
        alignItems: 'center',
    }
});

export default GameScreen;