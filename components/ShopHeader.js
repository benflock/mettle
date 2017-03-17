import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  text: {
    fontSize: 13,
  },
});

const ShopHeader = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.location}</Text>
  </View>
);

export default ShopHeader;
