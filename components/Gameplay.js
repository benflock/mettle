import React, { Component } from 'react';
import PlanetMap from './PlanetMap'
import InfoBar from './InfoBar';
import TravelBar from './TravelBar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class Gameplay extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cargo: 100,
      round: 1,
      credits: 100,
      planets: []
    }
  }
  componentDidMount() {
      return fetch('https://o8l44zxq22.execute-api.us-west-2.amazonaws.com/beta/all').then(response => response.json()).then(universe => {
          this.setState({planets: universe});
          console.log('This State Be Cray ', this.state)
      }).catch(console.error)
  }

  renderScene(route, navigator) {
    let RouteComponent = route.component
    return <RouteComponent navigator={navigator} {...route.passProps} />
  }

  render() {
    return (
      <View style={{ flex:1 }}>
      <InfoBar cargo={this.state.cargo} round={this.state.round} credits={this.state.credits} />
      <Navigator
        initialRoute={{ component: PlanetMap }}
        renderScene={ this.renderScene } />
        <TravelBar />
      </View>
    )
  }
}
