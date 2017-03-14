import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import InfoBar from './InfoBar';
import ShopLayout from './ShopLayout';
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

  _navigate(playerData, component, planetName) {
    this.props.navigator.push({
      component: component,
      passProps: {
        playerData: playerData,
        planet: planetName,
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
        <MainButton title="Gar" navHandler={ () => this._navigate(playerData, ShopLayout, 'GAR') }  />
        <MainButton title="Terra Epsilon" navHandler={ () => this._navigate(playerData, ShopLayout, 'TERRA EPSILON') }  />
        <MainButton title="Niflhogg" navHandler={ () => this._navigate(playerData, ShopLayout, 'NIFLHOGG') }  />
        <MainButton title="Station Corbino" navHandler={ () => this._navigate(playerData, ShopLayout, 'STATION CORBINO') }  />
        <MainButton title="Retheon" navHandler={ () => this._navigate(playerData, ShopLayout, 'RETHEON') }  />
        <MainButton title="Desodrox Outpost" navHandler={ () => this._navigate(playerData, ShopLayout, 'DESODROX OUTPOST') }  />
        <MainButton title="Azaz" navHandler={ () => this._navigate(playerData, ShopLayout, 'AZAZ') }  />
        <MainButton title="Zorvos" navHandler={ () => this._navigate(playerData, ShopLayout, 'ZORVOS') }  />
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
