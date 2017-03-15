import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import InfoBar from './InfoBar';



export default class ShopLayout extends Component {

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: this.props.planetData.style}}>
        <Text style={styles.planet}>WELCOME TO {this.props.planetData.name.toUpperCase()}!!!! {this.props.planetData.description}</Text>
        <Image source={this.props.planetData.img} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  planet: {
   fontSize:30,
   marginBottom:30,
   marginTop: 40,
 }
})
