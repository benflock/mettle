/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  Alert,
  View,
  TouchableHighlight
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class mettle extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mettle</Text>
          <View style={styles.line_break}></View>
          <View style={styles.line_break}></View>
        <View style={[styles.border, styles.box]}>
          <TouchableHighlight onPress={onButtonPress}>
            <Text style={styles.button}>New</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.line_break}></View>
          <View style={[styles.border, styles.box]}>
            <TouchableHighlight onPress={onButtonPress}>
              <Text style={styles.button}>Continue</Text>
            </TouchableHighlight>
          </View>
        <View style={styles.line_break}></View>
          <View style={[styles.border, styles.box]}>
            <TouchableHighlight onPress={onButtonPress}>
              <Text style={styles.button}>Scores</Text>
            </TouchableHighlight>
          </View>
        <View style={styles.line_break}></View>
          <View style={[styles.border, styles.box]}>
            <TouchableHighlight onPress={onButtonPress}>
              <Text style={styles.button}>Login</Text>
            </TouchableHighlight>
          </View>
        <View style={styles.line_break}></View>
          <View style={[styles.border, styles.box]}>
            <TouchableHighlight onPress={onButtonPress}>
              <Text style={styles.button}>How to play</Text>
              </TouchableHighlight>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  border: {
    borderWidth: 3,
    borderColor: 'cyan',
  },
  box: {
    height: 45,
    width: 300,
  },
  title: {
    color: 'cyan',
    fontSize: 80,
    alignItems: 'flex-start'
  },
  button: {
    color: 'cyan',
    textAlign: 'center',
    padding: 8,
    fontSize: 18
  },
  line_break: {
    height: 40,
  }
});

AppRegistry.registerComponent('mettle', () => mettle);
