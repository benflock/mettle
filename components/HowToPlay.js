import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class HowToPlay extends Component{
	render() {
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>{ this.props.title }</Text>
 				<TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
      		<Text style={ styles.buttonText }>GO Back</Text>
      	</TouchableHighlight>
        <Text>This is a trading game whee you travel to a planet each round in order to buy and sell various resources with the goal of tunring a profit.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
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
