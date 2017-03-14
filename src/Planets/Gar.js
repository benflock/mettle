import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import InfoBar from '../InfoBar';
import TravelBar from '../TravelBar';



export default class Gar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.planet}>WELCOME TO GAR!!!!</Text>
        <TravelBar />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  planet: {
   fontSize:30,
   marginBottom:30,
   marginTop: 40,
 }
})
