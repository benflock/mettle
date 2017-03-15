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

  _navigate(playerData, component, planetData) {
    this.props.navigator.push({
      component: component,
      passProps: {
        playerData: playerData,
        planetData: planetData,
      }
    })
  }


  render() {
    let playerData = {
      cargo: this.state.cargo,
      round: this.state.round,
      credits: this.state.credits
    }

    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Travel to a planet</Text>
        <MainButton title="Gar" navHandler={ () => this._navigate(playerData, ShopLayout, planets.gar) }  />
        <MainButton title="Terra Epsilon" navHandler={ () => this._navigate(playerData, ShopLayout, planets.terraEpsilon) }  />
        <MainButton title="Niflhogg" navHandler={ () => this._navigate(playerData, ShopLayout, planets.niflhogg) }  />
        <MainButton title="Station Corbino" navHandler={ () => this._navigate(playerData, ShopLayout, planets.stationCorbino) }  />
        <MainButton title="Retheon" navHandler={ () => this._navigate(playerData, ShopLayout, planets.retheon) }  />
        <MainButton title="Desodrox Outpost" navHandler={ () => this._navigate(playerData, ShopLayout, planets.desodroxOutpost) }  />
        <MainButton title="Azaz" navHandler={ () => this._navigate(playerData, ShopLayout, planets.azaz) }  />
        <MainButton title="Zorvos" navHandler={ () => this._navigate(playerData, ShopLayout, planets.zorvos) }  />
      </View>
    )
  }
}


let planets = {
  gar: {
    name: 'Gar',
    imgSrc: require('../art_assets/planets/planet02.gif'),
  },
  terraEpsilon: {
    name: 'Tera Epsilon',
    imgSrc: require('../art_assets/planets/planet04.gif')
  },
  desodroxOutpost: {
    name: 'Desodrox Outpost',
    imgSrc: require('../art_assets/planets/planet06.gif')
  },
  niflhogg: {
    name: 'Niflhogg',
    imgSrc: require('../art_assets/planets/planet05.gif')
  },
  retheon: {
    name: 'Retheon',
    imgSrc: require('../art_assets/planets/planet01.gif')
  },
  stationCorbino: {
    name: 'Station Corbino',
    imgSrc: require('../art_assets/planets/station.gif')
  },
  azaz: {
    name: 'Azaz',
    imgSrc: require('../art_assets/planets/planet03.gif')
  },
  zorvos: {
    name: 'Zorvos',
    imgSrc: require('../art_assets/planets/planet08.gif')
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
