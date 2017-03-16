import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
  },
});

const Row = (props) => (
  <View style={styles.container}>
  <Image source={props.img} style={styles.photo} />
  <Text style={styles.text}>
    {`${props.name} ${props.cost_base}`}
  </Text>
  </View>
);

export default Row;
