import React, { Component } from 'react';
import PlanetMap from './components/PlanetMap'
import Gameplay from './components/Gameplay'
import Continue from './components/Continue'
import Scores from './components/Scores'
import Login from './components/Login'
import HowToPlay from './components/HowToPlay'
import MainButton from './components/MainButton'
import InfoBar from './components/InfoBar';
import LinearGradient from 'react-native-linear-gradient';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import * as reducers from './reducers'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  Image,
  Modal
} from 'react-native';

const reducer = combineReducers(reducers);
const store = createStore(reducer);


export default class App extends Component {

  renderScene(route, navigator) {
    let RouteComponent = route.component
    return <RouteComponent navigator={navigator} {...route.passProps} />
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ component: Home }}
          renderScene={ this.renderScene } />
      </Provider>
    )
  }
}

export class Home extends Component {

  _navigate(title, component) {
  	this.props.navigator.push({
    	name: title,
      component: component,
      passProps: {
      	title: title,
      }
    })
  }

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

	render() {
    return (
      <LinearGradient colors={['#2ba8b0', '#2f002a']} style={styles.linearGradient}>
    	  <View style={ styles.container }>
          <Image style={ styles.title } source={require('./art_assets/logos/logo_handwriting_space_trader_bw.gif')} />
          <Image style={ styles.subtitle } source={require('./art_assets/logos/logo_arcade_mettle.gif')} />
          <MainButton title="New Game" navHandler={ () => this._navigate('New Game', Gameplay) }  />
          <MainButton title="Continue" navHandler={ () => this._navigate('Continue', Continue) }  />
          <MainButton title="Scores" navHandler={ () => this._navigate('Scores', Scores) }  />
          <MainButton title="Login" navHandler={ () => this._navigate('Login', Login) }  />
          <MainButton title="How To Play" navHandler={ () => this._navigate('How To Play', HowToPlay) }  />
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
   heading: {
  	fontSize:30,
    marginBottom:30,
    marginTop: 40,
  },
   title: {
     marginBottom:0,
     marginTop: 100,
   },
   subtitle: {
     marginBottom:60,
   },
  button: {
  	height:60,
    width: 600,
    justifyContent: 'center',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText: {
  	fontSize:20
  }
});

AppRegistry.registerComponent('mettle', () => App);
