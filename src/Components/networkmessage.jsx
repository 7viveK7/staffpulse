import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NetworkErrorMessage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>Network Error: Unable to connect to the internet.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '90%',
        borderRadius: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    message: {
        color: 'white',
        fontSize: 16,
    },
});

export default NetworkErrorMessage;
