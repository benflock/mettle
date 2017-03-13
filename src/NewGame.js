import React, { Component } from 'react';
import Start from './Start'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class NewGame extends Component{

  constructor(props) {
  super(props);
    this.state = {
      money: 10,
      cargo: 100
    };
  }

  AsyncStorage.setItem("myKey", "My value here");

	render() {
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>{ this.props.title }</Text>
        <Text>{ this.state.money }</Text>
 				<TouchableHighlight style={ styles.button } onPress={ () => this.setState((prevState, props) => ({money: prevState.money += 1})) }>
      		<Text style={ styles.buttonText }>Start Game</Text>
      	</TouchableHighlight>
        <TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.jumpBack() }>
          <Text style={ styles.buttonText }>jump Back</Text>
        </TouchableHighlight>
        <Text>this is the new game page, NO JOKE</Text>
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
