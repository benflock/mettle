import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class PlanetButton extends Component {

  render() {
    return (
      <View>
        <TouchableHighlight style={ styles.button } onPress={ this.props.navHandler }>
          <Image source={this.props.img} />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
  	fontSize:20
  }
});
