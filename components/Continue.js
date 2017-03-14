import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Continue extends Component{
	render() {
    return (
    	<View style={ styles.container }>
      	<Text style={ styles.heading }>{ this.props.title }</Text>
 				<TouchableHighlight style={ styles.button } onPress={ () => this.props.navigator.pop() }>
      		<Text style={ styles.buttonText }>GO Back</Text>
      	</TouchableHighlight>
        <Text>This is the continue page, NO JOKE</Text>
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
