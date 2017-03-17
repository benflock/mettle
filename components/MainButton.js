import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class MainButton extends Component {

  render() {
    return (
      <View>
        <TouchableHighlight style={ styles.button } onPress={ this.props.navHandler }>
          <Text style={ styles.buttonText }>{ this.props.title }</Text>
        </TouchableHighlight>
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
  	height:45,
    width: 600,
    justifyContent: 'center',
    backgroundColor: 'rgba(250, 255, 255, 0.2)',
    alignItems: 'center',
    borderTopWidth: 1,
  },
  buttonText: {
  	fontSize:20,
    fontFamily: 'Rubrik'
  }
});
