import React, { useState } from 'react';
import { View, 
        StyleSheet, 
        Text, 
        Button, 
        TouchableWithoutFeedback, 
        Keyboard } from "react-native";
import Card from '../components/Card';
import Input from '../components/Input';

const StartScreen = props => {

    const [inputValue, setInputValue] = useState('');

    const numberInputHandler = inputText => {
        setInputValue(inputText.replace(/[^0-9]/g, ''));
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
                        <Button title="Reset" onPress={() => {}} color="#CA2C1F"/>
                        <Button title="Confirm" onPress={() => {}} color="#7ECD05"/>
                    </View>
                </Card>
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
    }
});

export default StartScreen;

