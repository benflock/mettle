import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class PlanetMap extends Component {

  constructor(props) {
    super(props)
  }

  _navigate(playerData, component) {
    this.props.navigator.push({
      component: component,
      passProps: {
        playerData: playerData
      }
    })
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.heading }>Map</Text>
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
   heading: {
  	fontSize:30,
    marginBottom:30,
    marginTop: 40,
  },
  score: {
    fontSize: 20,
  },
  button: {
  	height:60,
    width: 600,
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText: {
  	fontSize:20
  }
});
