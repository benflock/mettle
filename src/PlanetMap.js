import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import InfoBar from './InfoBar';
import Gar from './Planets/Gar';
import MainButton from './MainButton'

export default class PlanetMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cargo: 98,
      round: 1,
      credits: 100
    }
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
    var playerData = {
      cargo: this.state.cargo,
      round: this.state.round,
      credits: this.state.credits
    }
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Travel to a planet</Text>
        <MainButton title="Gar" navHandler={ () => this._navigate(playerData, Gar) }  />
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
