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
          <TouchableHighlight style={styles.button} onPress={ this.props.navHandler }>
            <Image style={{height: 48, width: 48}} source={this.props.img} />
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
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
