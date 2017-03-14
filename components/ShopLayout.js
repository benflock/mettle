import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import InfoBar from './InfoBar';



export default class ShopLayout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.planet}>WELCOME TO {this.props.planet}!!!!</Text>
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
