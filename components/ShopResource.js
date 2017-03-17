import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';

export default class ShopResource extends Component {

  render() {
    return (
      <View style={{height: 74}}>
          <Image source={this.props.img} />
          <Text style={ styles.buttonText }>{ this.props.name } { this.props.qty }</Text>
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
  	height:72,
    width:400,
  },
  buttonText: {
  	fontSize:20
  }
});
