/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends Component<{}> {
    render() {
        return (
            <View style={ styles.container }>
              <View style={ styles.box } />
              <View style={ styles.box } />
              <View style={ styles.box } />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 50,
        height: 50,
        backgroundColor: '#e76e63',
        margin: 10
    }
});

