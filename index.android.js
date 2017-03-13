import React, { Component } from 'react';
import NewGame from './src/NewGame'
import Continue from './src/Continue'
import Scores from './src/Scores'
import Login from './src/Login'
import HowToPlay from './src/HowToPlay'
import MainButton from './src/MainButton'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {

  renderScene(route, navigator) {
    let RouteComponent = route.component
    return <RouteComponent navigator={navigator} {...route.passProps} />
  }

  render() {
    return (
      <Navigator
      	style={{ flex:1 }}
        initialRoute={{ component: Home }}
        renderScene={ this.renderScene } />
    )
  }
}

export class Home extends Component {

  _navigate(title, component) {
  	this.props.navigator.push({
    	name: title,
      component: component,
      passProps: {
      	title: title
      }
    })
  }

	render() {
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>Mettle</Text>
          <MainButton title="New Game" navHandler={ () => this._navigate('New Game', NewGame) }  />
          <MainButton title="Continue" navHandler={ () => this._navigate('Continue', Continue) }  />
          <MainButton title="Scores" navHandler={ () => this._navigate('Scores', Scores) }  />
          <MainButton title="Login" navHandler={ () => this._navigate('Login', Login) }  />
          <MainButton title="How To Play" navHandler={ () => this._navigate('How To Play', HowToPlay) }  />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
   heading: {
  	fontSize:30,
    marginBottom:30,
    marginTop: 40,
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

AppRegistry.registerComponent('mettle', () => App);
