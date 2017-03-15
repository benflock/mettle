import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Modal from 'react-native-simple-modal';
import InfoBar from './InfoBar';
import ShopLayout from './ShopLayout';
import PlanetButton from './PlanetButton'

export default class PlanetMap extends Component {

  constructor(props) {
    super(props)
    this.state = {}
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
        <TouchableOpacity onPress={() => this.setState({open: true})}>
          <Text>Open modal</Text>
        </TouchableOpacity>
            <Text style={styles.heading}>Travel to a planet</Text>
            <PlanetButton img={require('../art_assets/planets/planet02.gif')} title="Gar" navHandler={ () => this.setState({open: true}) }  />
            <PlanetButton img={require('../art_assets/planets/planet04.gif')} title="Terra Epsilon" navHandler={ () => this._navigate(playerData, ShopLayout, planets.terraEpsilon) }  />
            <PlanetButton img={require('../art_assets/planets/planet05.gif')} title="Niflhogg" navHandler={ () => this._navigate(playerData, ShopLayout, planets.niflhogg) }  />
            <PlanetButton img={require('../art_assets/planets/station.gif')} title="Station Corbino" navHandler={ () => this._navigate(playerData, ShopLayout, planets.stationCorbino) }  />
            <PlanetButton img={require('../art_assets/planets/planet01.gif')} title="Retheon" navHandler={ () => this._navigate(playerData, ShopLayout, planets.retheon) }  />
            <PlanetButton img={require('../art_assets/planets/planet06.gif')} title="Desodrox Outpost" navHandler={ () => this._navigate(playerData, ShopLayout, planets.desodroxOutpost) }  />
            <PlanetButton img={require('../art_assets/planets/planet03.gif')} title="Azaz" navHandler={ () => this._navigate(playerData, ShopLayout, planets.azaz) }  />
            <PlanetButton img={require('../art_assets/planets/planet08.gif')} title="Zorvos" navHandler={ () => this._navigate(playerData, ShopLayout, planets.zorvos) }  />
        <Modal
          offset={this.state.offset}
          open={this.state.open}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({open: false})}
          style={{alignItems: 'center'}}>
          <View>
            <Text style={{fontSize: 20, marginBottom: 10}}>Hello world!</Text>
            <TouchableOpacity
            style={{margin: 5}}
            onPress={() => this.setState({offset: -100})}>
              <Text>Move modal up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin: 5}}
              onPress={() => this.setState({offset: 0})}>
              <Text>Reset modal position</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin: 5}}
              onPress={() => this.setState({open: false})}>
              <Text>Close modal</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    )
  }
}


let planets = {
  gar: {
    id: 3,
    name: 'Gar',
    img: require('../art_assets/planets/planet02.gif'),
    description: 'A green gas giant with a breathable nitrogen rich atmosphere.',
    style: '#B5E597',
    neighbor1: 5,
    neighbor2: 6,
  },
  terraEpsilon: {
    id: 1,
    name: 'Terra Epsilon',
    description: 'A comfortable terrestrial homeworld. Rich in low-end staples, but lacking high-end products.',
    img: require('../art_assets/planets/planet04.gif'),
    style: '#4E993C',
    neighbor1: 3,
    neighbor2: 2
  },
  desodroxOutpost: {
    id: 2,
    name: 'Desodrox Outpost',
    description: 'The lone surviving outpost on a post-apocalyptic desert world.',
    img: require('../art_assets/planets/planet06.gif'),
    style: '#B28D7E',
    neighbor1: 1,
    neighbor2: 4
  },
  niflhogg: {
    id: 4,
    name: 'Niflhogg',
    description: 'A frozen frontier world where scavengers and explorers make up the bulk of the population.',
    img: require('../art_assets/planets/planet05.gif'),
    style: '#56CFE5',
    neighbor1: 6,
    neighbor2: 7
  },
  retheon: {
    id: 5,
    name: 'Retheon',
    description: 'A yellow gas giant with gated communities and a reputation for stuck-up nobility.',
    img: require('../art_assets/planets/planet01.gif'),
    style: '#E5D46C',
    neighbor1: 3,
    neighbor2: 6
  },
  stationCorbino: {
    id: 6,
    name: 'Station Corbino',
    description: 'A terrestial dome secured to a floating patch of earth. Science and Technology reign here.',
    img: require('../art_assets/planets/station.gif'),
    style: '#B487DE',
    neighbor1: 5,
    neighbor2: 8
  },
  azaz: {
    id: 7,
    name: 'Azaz',
    description: 'A blasted hellscape laden with rivers of fire and filled with bizarre and deadly creatures.',
    img: require('../art_assets/planets/planet03.gif'),
    style: '#DE6438',
    neighbor1: 4,
    neighbor2: 8
  },
  zorvos: {
    id: 8,
    name: 'Zorvos',
    description: `Homeworld of the mysterious Zorvogo people. Beautiful sunsets, but don't forget your ventilator or you will choke to death.`,
    img: require('../art_assets/planets/planet08.gif'),
    style: '#FF65DD',
    neighbor1: 6,
    neighbor2: 7
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
