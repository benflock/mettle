import React, {Component} from 'react';
import PlanetMap from './PlanetMap'
import InfoBar from './InfoBar';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  StatusBar,
  AsyncStorage
} from 'react-native';


const GameplayComponent = ({credits, round, cargo, incrementRound}) => (
    <View style={{ flex:1 }}>
      <StatusBar hidden={true} />
      <InfoBar credits={credits} round={round} cargo={cargo} />
      <Navigator
        initialRoute={{ component: PlanetMap }}
        renderScene={ (route, navigator) =>
            <route.component planetData={planets} increment={incrementRound} navigator={navigator} {...route.passProps} />
          } />
    </View>
)

const mapStateToProps = (state, ownProps) => {
  return {
    credits: state.playerData.credits,
    round: state.playerData.round,
    cargo: state.playerData.cargo,
  }
}

import { connect } from 'react-redux'


const mapDispatchToProps = (dispatch) => {
  return {
    incrementRound: () => dispatch({type: "INCREMENT_ROUND"})
  }
}

const Gameplay = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameplayComponent)

let planets = [
  {
    id: 3,
    name: 'Gar',
    img: require('../art_assets/planets/planet02.gif'),
    description: 'A green gas giant with a breathable nitrogen rich atmosphere.',
    style: '#B5E597',
    neighbor1: 5,
    neighbor2: 6,
    top: 140,
    left: 240,
  },
  {
    id: 1,
    name: 'Terra Epsilon',
    description: 'A comfortable terrestrial homeworld. Rich in low-end staples, but lacking high-end products.',
    img: require('../art_assets/planets/planet04.gif'),
    style: '#4E993C',
    neighbor1: 3,
    neighbor2: 2,
    top: 24,
    left: 300,
  },
  {
    id: 2,
    name: 'Desodrox Outpost',
    description: 'The lone surviving outpost on a post-apocalyptic desert world.',
    img: require('../art_assets/planets/planet06.gif'),
    style: '#B28D7E',
    neighbor1: 1,
    neighbor2: 4,
    top: 70,
    left: 75,
  },
  {
    id: 4,
    name: 'Niflhogg',
    description: 'A frozen frontier world where scavengers and explorers make up the bulk of the population.',
    img: require('../art_assets/planets/planet05.gif'),
    style: '#56CFE5',
    neighbor1: 6,
    neighbor2: 7,
    top: 200,
    left: 55,
  },
  {
    id: 5,
    name: 'Retheon',
    description: 'A yellow gas giant with gated communities and a reputation for stuck-up nobility.',
    img: require('../art_assets/planets/planet01.gif'),
    style: '#E5D46C',
    neighbor1: 3,
    neighbor2: 6,
    top: 400,
    left: 300,
  },
  {
    id: 6,
    name: 'Station Corbino',
    description: 'A terrestial dome secured to a floating patch of earth. Science and Technology reign here.',
    img: require('../art_assets/planets/station.gif'),
    style: '#B487DE',
    neighbor1: 5,
    neighbor2: 8,
    top: 310,
    left: 180,
  },
  {
    id: 7,
    name: 'Azaz',
    description: 'A blasted hellscape laden with rivers of fire and filled with bizarre and deadly creatures.',
    img: require('../art_assets/planets/planet03.gif'),
    style: '#DE6438',
    neighbor1: 4,
    neighbor2: 8,
    top: 340,
    left: 40,
  },
  {
    id: 8,
    name: 'Zorvos',
    description: "Homeworld of the mysterious Zorvogo people. Beautiful sunsets, but don't forget your ventilator or you will choke to death.",
    img: require('../art_assets/planets/planet08.gif'),
    style: '#FF65DD',
    neighbor1: 6,
    neighbor2: 7,
    top: 480,
    left: 120,
  }
]

export default Gameplay


/*



export default class Gameplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cargo: 100,
            round: 1,
            credits: 100,
            debt: 10000
        }
    }
  }
  componentWillMount() {
      return fetch('https://o8l44zxq22.execute-api.us-west-2.amazonaws.com/beta/player/new', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              player: {
                  current_round: 1,
                  current_credit: 200,
                  debt: 10000,
                  weight_limit: 100
              }
          })
      })
      .then(response => response.json()).then(noob => {
          AsyncStorage.setItem('player', JSON.stringify(noob[0]))
          AsyncStorage.getItem('player').then(player => {
              player = JSON.parse(player)
              this.setState({
                cargo: player.weight_limit,
                debt: player.debt,
                credits: player.current_credit,
                round: player.current_round
              });
          })
      })
      .catch(console.error)
  }

    renderScene(route, navigator) {
        let RouteComponent = route.component
        return <RouteComponent planetData={planets} navigator={navigator} {...route.passProps}/>
    }

  render() {
    console.log(this.state);
    console.log("at Gameplay");
    console.log("-----------");
    return (
      <View style={{ flex:1 }}>
        <StatusBar hidden={true} />
        <InfoBar />
        <Navigator
          initialRoute={{ component: PlanetMap }}
          renderScene={ this.renderScene } />
      </View>
    )
  }
}

let planets = [
  {
    id: 3,
    name: 'Gar',
    img: require('../art_assets/planets/planet02.gif'),
    description: 'A green gas giant with a breathable nitrogen rich atmosphere.',
    style: '#B5E597',
    neighbor1: 5,
    neighbor2: 6,
    top: 140,
    left: 240,
  },
  {
    id: 1,
    name: 'Terra Epsilon',
    description: 'A comfortable terrestrial homeworld. Rich in low-end staples, but lacking high-end products.',
    img: require('../art_assets/planets/planet04.gif'),
    style: '#4E993C',
    neighbor1: 3,
    neighbor2: 2,
    top: 24,
    left: 300,
  },
  {
    id: 2,
    name: 'Desodrox Outpost',
    description: 'The lone surviving outpost on a post-apocalyptic desert world.',
    img: require('../art_assets/planets/planet06.gif'),
    style: '#B28D7E',
    neighbor1: 1,
    neighbor2: 4,
    top: 70,
    left: 75,
  },
  {
    id: 4,
    name: 'Niflhogg',
    description: 'A frozen frontier world where scavengers and explorers make up the bulk of the population.',
    img: require('../art_assets/planets/planet05.gif'),
    style: '#56CFE5',
    neighbor1: 6,
    neighbor2: 7,
    top: 200,
    left: 55,
  },
  {
    id: 5,
    name: 'Retheon',
    description: 'A yellow gas giant with gated communities and a reputation for stuck-up nobility.',
    img: require('../art_assets/planets/planet01.gif'),
    style: '#E5D46C',
    neighbor1: 3,
    neighbor2: 6,
    top: 400,
    left: 300,
  },
  {
    id: 6,
    name: 'Station Corbino',
    description: 'A terrestial dome secured to a floating patch of earth. Science and Technology reign here.',
    img: require('../art_assets/planets/station.gif'),
    style: '#B487DE',
    neighbor1: 5,
    neighbor2: 8,
    top: 310,
    left: 180,
  },
  {
    id: 7,
    name: 'Azaz',
    description: 'A blasted hellscape laden with rivers of fire and filled with bizarre and deadly creatures.',
    img: require('../art_assets/planets/planet03.gif'),
    style: '#DE6438',
    neighbor1: 4,
    neighbor2: 8,
    top: 340,
    left: 40,
  },
  {
    id: 8,
    name: 'Zorvos',
    description: "Homeworld of the mysterious Zorvogo people. Beautiful sunsets, but don't forget your ventilator or you will choke to death.",
    img: require('../art_assets/planets/planet08.gif'),
    style: '#FF65DD',
    neighbor1: 6,
    neighbor2: 7,
    top: 480,
    left: 120,
  }

]
*/
