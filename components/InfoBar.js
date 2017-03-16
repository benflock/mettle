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
        <View style={[styles.boxLeft, styles.box]}>
          <Text style={styles.font}>Credits</Text>
          <Text style={styles.font}>{this.props.credits}</Text>
        </View>
        <View style={[styles.boxMiddle, styles.box]}>
          <Text style={styles.font}>Round</Text>
          <Text style={styles.font}>{this.props.round}</Text>
        </View>
        <View style={[styles.boxRight, styles.box]}>
          <Text style={styles.font}>Cargo</Text>
          <Text style={styles.font}>{this.props.cargo}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  InfoBar: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-between'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 20
  },
  boxRight: {
    width: 125,
    height: 75,
    borderLeftWidth: 2
  },
  boxLeft: {
    width: 125,
    height: 75,
    borderRightWidth: 2
  },
  boxMiddle: {
    width: 125,
    height: 75,
  }
})
