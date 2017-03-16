import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';
import Hr from 'react-native-hr'
import Modal from 'react-native-simple-modal';
import InfoBar from './InfoBar';
import ShopLayout from './ShopLayout';
import PlanetButton from './PlanetButton'

export default class PlanetMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  _navigate(playerData, component, planetData) {
    this.setState({ open:false })
    this.props.navigator.push({
      component: component,
      passProps: {
        playerData: playerData,
        planetData: planetData,
      }
    })
  }

  render() {
    let playerData = {
      cargo: this.state.cargo,
      round: this.state.round,
      credits: this.state.credits
    }

    const planetsMapped = this.props.planetData.map((planet) =>
        <View
          key={planet.id}
          style={{
            position: 'absolute',
            height: 45,
            width: 45,
            top: planet.top,
            left: planet.left,
            right: planet.left,
            bottom: planet.bottom}}>
          <PlanetButton
            img={planet.img}
            title="{planet.name}"
            navHandler={ () => this.setState({
                open: true,
                name: planet.name,
                description: planet.description,
                style: planet.style,
                img: planet.img,
                offset: 100,
              })
            }  />
        </View>
      )

    return (
      <Image style={styles.background} source={require('../art_assets/deep-space.png')}>
        {planetsMapped}
        <Modal
          offset={this.state.offset}
          open={this.state.open}
          modalDidOpen={() => console.log('modal did open')}
          modalDidClose={() => this.setState({open: false})}
          modalStyle={{
            borderRadius: 12,
            margin: 20,
            padding: 10,
            backgroundColor: '#2ba8b0'
          }}
          animationDuration={1000}>
          <View style={{alignItems: 'center', backgroundColor: '#2ba8b0'}}>
            <Image source={this.state.img} style={{marginBottom:10, height: 100, width: 100, alignItems:'center'}} />
            <Text style={{fontSize: 32, marginBottom: 4, fontFamily: 'Rubrik Bold', color: '#2f002a'}}>{this.state.name}</Text>
            <Text style={{fontSize: 20, marginBottom: 10, fontFamily: 'Rubrik Medium', textAlign: 'center', color: '#2f002a'}}>{this.state.description}</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', paddingBottom: 5}}>
              <TouchableOpacity
                style={ styles.cancel }
                onPress={() => this.setState({open: false})}>
                <Text style={{fontSize: 20, fontFamily: 'Rubrik Medium', color: '#2f002a'}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ styles.travel }
                onPress={() => this._navigate(playerData, ShopLayout, this.state)}>
                <Text style={{fontSize: 20, fontFamily: 'Rubrik Medium', color: '#2f002a'}}>Travel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </Image>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    alignItems: 'center',
  },
   heading: {
  	fontSize:30,
    marginBottom:8,
    marginTop: 8,
    color: 'white'
  },
  score: {
    fontSize: 20,
  },
  button: {
  	height:60,
    width: 600,
    backgroundColor: '#efefef',
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText: {
  	fontSize:20
  },
  travel: {
    marginLeft: 20,
    paddingLeft:20,
    paddingRight:20,
    paddingTop: 6,
    paddingBottom: 2,
    borderWidth: 3,
    borderRadius: 12,
    borderColor: 'green'
  },
  cancel: {
    marginRight: 20,
    paddingLeft:20,
    paddingRight:20,
    paddingTop: 6,
    paddingBottom: 2
  }
});
