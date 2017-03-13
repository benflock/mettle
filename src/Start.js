import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Start extends Component{

  constructor(props) {
  super(props);
    this.state = this.props.newGameState
  }

	render() {
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>{ this.props.title }</Text>
        <Text>{ this.props.newGameState.money }</Text>
        <TouchableHighlight style={ styles.button } onPress={ this.setState((prevState, props) => ({money: prevState.money + props.increment})) }>
          <Text style={ styles.buttonText }>Increase money</Text>
        </TouchableHighlight>
        <Text>this is the how to play page, NO JOKE</Text>
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
