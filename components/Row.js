import React, {component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#345678'
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    flexDirection: 'column'
  },
  photo: {
    height: 40,
    width: 40,
    flexDirection: 'column'
  },
});

const Row = (props) => (
  <View style={styles.container}>
  <Image source={props.img} style={styles.photo} />
  <Text style={styles.text}>
    {`${props.name} ${Number(props.cost_base)+Math.floor(Math.random()*Number(props.cost_range))}`}
  </Text>
  </View>
);

export default Row;
