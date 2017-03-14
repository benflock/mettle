import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class InfoBar extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.InfoBar}>
        <View style={styles.boxLeft}>
          <Text>Credits:{this.props.credits}</Text>
        </View>
        <View style={styles.boxMiddle}>
          <Text>Round:{this.props.round}</Text>
        </View>
        <View style={styles.boxRight}>
          <Text>Cargo:{this.props.cargo}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  InfoBar: {
    flexDirection: 'row',
    backgroundColor: 'lightblue',
    marginTop: 24
  },
  boxRight: {
    width: 125,
    height: 75,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  boxLeft: {
    width: 125,
    height: 75,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  boxMiddle: {
    width: 125,
    height: 75,
    borderWidth: 2
  }
})
