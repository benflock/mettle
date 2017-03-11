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
        <Text style={{ fontFamily: 'Iowan Old Style', color: 'cyan', fontSize: 60, }}>Mettle</Text>

        <View style={[styles.border, styles.box]}>
          <TouchableHighlight onPress={onButtonPress}>
            <Text style={{ fontFamily: 'Helvetica', color: 'cyan', textAlign: 'center', padding: 8, fontSize: 18}}>Button</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.line_break}></View>
        <View style={[styles.border, styles.box]}>
          <Button
            onPress={onButtonPress}
            title="CONTINUE"
            color="cyan"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
        <View style={styles.line_break}></View>
        <View style={[styles.border, styles.box]}>
          <Button
            onPress={onButtonPress}
            title="SCORES"
            color="cyan"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
        <View style={styles.line_break}></View>
        <View style={[styles.border, styles.box]}>
          <Button
            onPress={onButtonPress}
            title="LOGIN"
            color="cyan"
            fontFamily="Times"
            accessibilityLabel="Learn more about this purple button"
            />
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
    // fontFamily: 'Futura'
  },
  border: {
    borderWidth: 4,
    borderColor: 'cyan',
  },
  box: {
    height: 45,
    width: 240,
  },
  button: {
    color: 'cyan',
  },
  line_break: {
    height: 40,
  }
});

AppRegistry.registerComponent('mettle', () => mettle);
