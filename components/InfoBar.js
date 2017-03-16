import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const InfoBarComponent = ({credits, round, cargo, incrementRound, decrementRound}) => (
  <LinearGradient colors={['#2ba8b0', '#2f002a']} style={styles.linearGradient}>
    <View style={styles.InfoBar}>
      <View style={[styles.boxLeft, styles.box]}>
        <Text style={styles.font}>Credits</Text>
        <Text style={styles.font}>{credits}</Text>
      </View>
      <View style={[styles.boxMiddle, styles.box]}>
        <TouchableHighlight onPress={ incrementRound }>
          <Text style={styles.font}>Round</Text>
        </TouchableHighlight>
        <Text style={styles.font}>{round}</Text>
      </View>
      <View style={[styles.boxRight, styles.box]}>
        <TouchableHighlight onPress={ decrementRound }>
          <Text style={styles.font}>Cargo</Text>
        </TouchableHighlight>
        <Text style={styles.font}>{cargo}</Text>
      </View>

    </View>
  </LinearGradient>
)

import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    credits: state.playerData.credits,
    round: state.playerData.round,
    cargo: state.playerData.cargo,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementRound: () => dispatch({type: "INCREMENT_ROUND"}),
    decrementRound: () => dispatch({type: "DECREMENT_ROUND"})
  }
}

const InfoBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(InfoBarComponent)

const styles = StyleSheet.create({
  InfoBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(250, 255, 255, 0.2)',
    justifyContent: 'space-between'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  font: {
    fontSize: 20,
    fontFamily: 'Rubrik Medium'
  },
  boxRight: {
    width: 125,
    height: 75,
    borderLeftWidth: 2
  },
  boxLeft: {
    width: 125,
    height: 75,
    borderRightWidth: 2
  },
  boxMiddle: {
    width: 125,
    height: 75,
  }
})

export default InfoBar
