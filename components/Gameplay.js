import React, { Component } from 'react';
import PlanetMap from './PlanetMap'
import InfoBar from './InfoBar';
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
      credits: 100
    }
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
      </View>
    )
  }
}
