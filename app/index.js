import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( <View style = { styles.container } >
        <Text > sterben has been working on a new app ;)......Wait for it! </Text> 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});