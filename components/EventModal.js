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

export default class EventModal extends Component {

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
          <Text style={{fontSize: 30, marginBottom: 4}}>{this.events.name}</Text>
          <Text style={{fontSize: 20, marginBottom: 10}}>{this.state.description}</Text>

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

const events = [{
       id: 1,
       name: `A humble beginning`,
       type: `plot`,
       description: `You've finally broken your ties with the mega-corporations, and have struck out on your own as a Space Trader. Unfortunately you had to turn to a notorious loan shark for help financing Mettle, your trading ship, and are now 10,000 credits in debt. Your loan is officially due in 21 seasons, and you don't want to find out what happens if you can't scrape enough credits together.`
       outcome1label: `Let's get trading!`,
       outcome1desc: `First things first, choose a planet as the destination for your first trading season...`,
       outcome1finallabel: `Ok`,
       outcome1resid: 0,
       outcome1reschange: 0,
       outcome2label: ``,
       outcome2desc: ``,
       outcome2finallabel: ``,
       outcome2resid: 0,
       outcome2reschange: 0,
       outcome3label: ``,
       outcome3desc: ``,
       outcome3finallabel: ``,
       outcome3resid: 0,
       outcome3reschange: 0
     },{
       id: 2,
       name: `Opportunity Knocks`,
       type: `plot`,
       description: `During your travel, you pick up a distress signal from a nearby vessel. It could prove dangerous, but it could also be an opportunity.`
       outcome1label: `Ignore the Signal`,
       outcome1desc: `You decide to ignore the signal and continue on your way. Nothing exciting or dangerous happens.`,
       outcome1finallabel: `Better safe than sorry`,
       outcome1resid: 0,
       outcome1reschange: 0,
       outcome2label: `Hail the Vessel`,
       outcome2desc: `After a few minutes spent trying to hail the vessel, a voice crackles a response over your open comm channel. They have been stranded out here for weeks without a functioning engine, and offer you all their cargo in exchange for safe passage to a planet.`,
       outcome2finallabel: `Accept them as a passenger and add their collection of droid parts to your cargo.`,
       outcome2resid: 3,
       outcome2reschange: 12,
       outcome3label: `Alert the Authorities`,
       outcome3desc: `You decide not to investigate directly, but as a responible star citizen you report the vessel to the federation. They reward you with a nominal amount of credits.`,
       outcome3finallabel: `Accept the 150 credits`,
       outcome3resid: 11,
       outcome3reschange: 150
     },{
       id: 3,
       name: `An Unpleasant Surprise`,
       type: `plot`,
       description: `It's only been 14 seasons, but Mettle's tracker has picked up the loan shark's ship closing on your location fast. This can only mean bad things for you. If you have a Hyper Crystal you can burn it to power your thrusters and escape. Or maybe you can bribe him Barblezargs. Otherwise you're going to be forced make an 'interest' payment that won't count towards paying off your loan.`
       outcome1label: `Burn a Hyper Crystal`,
       outcome1desc: ``,
       outcome1finallabel: ``,
       outcome1resid: 7,
       outcome1reschange: -1,
       outcome2label: `Bribe with 4 Barblezargs`,
       outcome2desc: ``,
       outcome2finallabel: ``,
       outcome2resid: 4,
       outcome2reschange: -4,
       outcome3label: `Make the 'interest' payment.`,
       outcome3desc: `The loan shark grins wickedly as he accepts your credits. He then snidely reminds you that the full loan is due in 7 seasons.`,
       outcome3finallabel: `I really hate this guy`,
       outcome3resid: 11,
       outcome3reschange: -2000
     },{
       id: 4,
       name: 'Make or Break',
       type: 'plot',
       description: `Time's up, your loan is due. If you have enough credits, you can pay off the loan shark and finally become a free agent. If you can't pay in full, you'll be forced to suffer the consequences.`
       outcome1label: `I have enough to pay my debt in full`,
       outcome1desc: 'Congratulations! You are now debt free, and have the opportunity to make some credits as a free agent. You have 10 more seasons to trade before retiring.',
       outcome1finallabel: `Let's make lots of money!`,
       outcome1resid: 11,
       outcome1reschange: -10000,
       outcome2label: `I can't pay my full debt`,
       outcome2desc: `The loan shark takes what credits you have before signalling his goons to surround you. 'No offense kid, but business is business. I'm taking your ship and my associates here are going to escort you back to the loving embrace of the mega-corporations.'`,
       outcome2finallabel: `Not like this`,
       outcome2resid: 11,
       outcome2reschange: -10000,
       outcome3label: ``,
       outcome3desc: ``,
       outcome3finallabel: ``,
       outcome3resid: 0,
       outcome3reschange: 0
     },{
       id: 5,
       name: 'Retirement',
       type: 'plot',
       description: `Your trading career has been long, storied, and prosperous. The time has come to retire to a life of leisure, and potential luxury. Where would you like to settle down?`
       outcome1label: `A beach-front property on Terra Epsilon`,
       outcome1desc: 'You spend a sizable chunk of your fortune on an amazing piece of secluded real estate with a quaint bungalow. Aside from the shooing away the occasional merchant hocking their tacky souveniers, your life is free of strife. Thanks for playing Space Trader Mettle!',
       outcome1finallabel: `Ok`,
       outcome1resid: 0,
       outcome1reschange: 0,
       outcome2label: `On Gar with the love of my life`,
       outcome2desc: `You retire to a quiet life with your partner in a lovely remote villa on Gar. You find yourself with access to Barblezargs beyond imagining. Thanks for playing Space Trader Mettle!`,
       outcome2finallabel: ``,
       outcome2resid: 0,
       outcome2reschange: 0,
       outcome3label: `I'm going to tour the universe in my ship`,
       outcome3desc: `Instead of settling down, you decide to spend your life exploring the wonders and dangers of the universe. Your trusty ship Mettle remains remarkably reliable through out the years, and in the twilight of your life you reflect with a smile on your adventures. Thanks for playing Space Trader Mettle!`,
       outcome3finallabel: ``,
       outcome3resid: 0,
       outcome3reschange: 0
     }];
