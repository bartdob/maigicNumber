import React from 'react';
import { View, StyleSheet, Text } from "react-native";


const Card = props => {
    return(
       <View style={{...styles.card, ...props.style}}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 5,
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        elevation: 5,
        padding: 20,
        borderRadius: 5,
    }
});

export default Card;