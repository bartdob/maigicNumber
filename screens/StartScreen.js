import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartScreen = props => {

    const [inputValue, setInputValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setInputValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setInputValue('');
        //setConfirmed(false);
    };

    const confirmedInputHandler = () => {
        const choosenNumber = parseInt(inputValue);
        if(isNaN(choosenNumber) || choosenNumber <=0 || choosenNumber > 99) {
            Alert.alert('Bad number', 'Choose number 1 to 99',
            [{ text: 'OK', style: 'destructive', onPress: resetInputHandler}]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setInputValue('');
        Keyboard.dismiss();
    };

    let confirmedLayout;

    if (confirmed) {
        confirmedLayout =
        <Card style={styles.cardContainer}>
                <Text > Your number is: </Text>
                <View> 
                </View>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
                
        </Card> 
        
    };

    return(
        <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss();}}>
            <View style={styles.screen}>
                <Text>START NEW GAME</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.title}> Select a number </Text>
                    <Input style={styles.input} 
                    blurOnSubmit 
                    autoCapitalize='none' 
                    autoCorrect={false} 
                    keyboardType='number-pad' 
                    maxLength={2}
                    onChangeText={numberInputHandler}    
                    value={inputValue}
                    />
                    
                    <View style={styles.buttonContainer}>
                        <Button title="Reset" onPress={resetInputHandler} color="#CA2C1F"/>
                        <Button title="Confirm" onPress={confirmedInputHandler} color="#7ECD05"/>
                    </View>
                </Card>
                <View>

                </View>
                {confirmedLayout}
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        marginVertical: 5,
    },
    inputContainer: {
        alignItems: 'center',
        width: 300,
        maxWidth: '80%',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 5,
        borderBottomColor: 'black',
        alignItems: 'center',
    },
    input: {
        width: 60,
        height: 35,
        textAlign: 'center',
    },
    cardContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
    textNumber: {
        color: 'purple',
        fontSize: 18,
        borderColor: 'hotpink',
        borderRadius: 10,
        borderWidth: 2,
        padding: 12,
    },
    buttonGame: {
        marginTop: 10,
    }

});

export default StartScreen;

