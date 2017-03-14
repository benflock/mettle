import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class TravelBar extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.TravelBar}>
        <Text style={styles.travel}>Swipe to go back</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  TravelBar: {
    flexDirection: 'row',
    alignSelf: 'baseline',
    backgroundColor: 'lightblue',
    height: 75,
    width: 380,
    justifyContent: 'center',
    alignItems: 'center',
  },
  travel: {
    fontSize: 20,
  }
})
