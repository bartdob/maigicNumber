import React from 'react';
import { View, StyleSheet, Text } from "react-native";


const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 20,
        backgroundColor: '#3074CB',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    headerTitle: {
        fontSize: 18,
        color: '#83A6D3',
    }



});

export default Header;