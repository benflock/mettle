import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';
import Modal from 'react-native-simple-modal';
import InfoBar from './InfoBar';
import ShopLayout from './ShopLayout';
import PlanetButton from './PlanetButton';

export default class PlanetMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
ComponentDidMount() {
  fetch('https://o8l44zxq22.execute-api.us-west-2.amazonaws.com/beta/player', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      player: {
        id:,
        current_round:,
        current_credit:,
        debt:,
        weight_limit:
      },
      resources: [
        {
          resource_id: 1,
          qty:
        },
        {
          resource_id: 2,
          qty:
        },
        {
          resource_id: 3,
          qty:
        },
        {
          resource_id: 4,
          qty:
        },
        {
          resource_id: 5,
          qty:
        },
        {
          resource_id: 6,
          qty:
        },
        {
          resource_id: 7,
          qty:
        },
        {
          resource_id: 8,
          qty:
        },
        {
          resource_id: 9,
          qty:
        },
        {
          resource_id: 10,
          qty:
        }
      ]
    })
  })
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
        <View key={planet.id} style={{position: 'absolute', height: 45, width: 45, top: planet.top, left: planet.left, right: planet.left, bottom: planet.bottom}}>
          <PlanetButton
            img={planet.img}
            title="{planet.name}"
            navHandler={ () => this.setState({
                open: true,
                name: planet.name,
                description: planet.description,
                style: planet.style,
                img: planet.img,
                offset: 150,

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
            borderRadius: 2,
            margin: 20,
            padding: 10,
            backgroundColor: this.state.style
          }}
          animationDuration={1000}>
          <View style={{alignItems: 'center', backgroundColor: this.state.style}}>
            <Text style={{fontSize: 30, marginBottom: 4}}>{this.state.name}</Text>
            <Text style={{fontSize: 20, marginBottom: 10}}>{this.state.description}</Text>
            <TouchableOpacity
              style={{margin: 8}}
              onPress={() => this._navigate(playerData, ShopLayout, this.state)}>
              <Text style={{fontSize: 24}}>Travel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{margin: 8}}
              onPress={() => this.setState({open: false})}>
              <Text style={{fontSize: 24}}>Cancel</Text>
            </TouchableOpacity>
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
    justifyContent: 'center',
    backgroundColor: '#efefef',
    alignItems: 'center',
    marginBottom: 30
  },
  buttonText: {
  	fontSize:20
  }
});
