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
import ShopResource from './ShopResource'



export default class ShopLayout extends Component {

  render() {

    const resourcesMapped = resources.map((resource) =>
        <View key={resource.id}>
          <ShopResource
            img={resource.img}
            title="{resource.name}"
              />
        </View>
      )

    return (
      <View style={{flex: 1, alignItems: 'center', backgroundColor: this.props.planetData.style}}>
        <Text style={styles.planet}>WELCOME TO {this.props.planetData.name.toUpperCase()}!!!! {this.props.planetData.description}</Text>
        <Image source={this.props.planetData.img} />
        {resourcesMapped}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  planet: {
   fontSize:14,
   marginBottom:10,
   marginTop: 10,
 }
})

let resources = [{
      id: 1,
   name: 'Tacky Souveniers',
   cost_base: 15,
   cost_range: 10,
   qty_base: 20,
   qty_range: 20,
   weight: 0.5,
   img: require('../art_assets/resources/tacky_souveniers.gif')
 },{
   id: 2,
   name: 'Space Vegetables',
   cost_base: 30,
   cost_range: 20,
   qty_base: 15,
   qty_range: 20,
   weight: 1,
   img: require('../art_assets/resources/space_vegetables.gif')
 },{
   id: 3,
   name: 'Spare Droid Parts',
   cost_base: 100,
   cost_range: 75,
   qty_base: 10,
   qty_range: 25,
   weight: 8,
   img: require('../art_assets/resources/spare_droid_parts.gif')
 },{
   id: 4,
   name: 'Bio-Meds',
   cost_base: 200,
   cost_range: 150,
   qty_base: 30,
   qty_range: 20,
   weight: 1.5,
   img: require('../art_assets/resources/bio_meds.gif')
 },{
   id: 5,
   name: 'Garbast Barblezargs',
   cost_base: 400,
   cost_range: 220,
   qty_base: 10,
   qty_range: 15,
   weight: 2,
   img: require('../art_assets/resources/garbast_barblezargs.gif')
 },{
   id: 6,
   name: 'Ancient Artifacts',
   cost_base: 600,
   cost_range: 500,
   qty_base: 1,
   qty_range: 10,
   weight: 5,
   img: require('../art_assets/resources/ancient_artifacts.gif')
 },{
   id: 7,
   name: 'Hyper Crystals',
   cost_base: 900,
   cost_range: 700,
   qty_base: 2,
   qty_range: 4,
   weight: 6,
   img: require('../art_assets/resources/hyper_crystals.gif')
 },{
   id: 8,
   name: 'Spice',
   cost_base: 1400,
   cost_range: 1000,
   qty_base: 15,
   qty_range: 25,
   weight: 0.2,
   img: require('../art_assets/resources/spice.gif')
 },{
   id: 9,
   name: 'Weaponized Quantonium',
   cost_base: 2200,
   cost_range: 1500,
   qty_base: 1,
   qty_range: 6,
   weight: 12,
   img: require('../art_assets/resources/weaponized_quantonium.gif')
 },{
   id: 10,
   name: 'Tiny Universe',
   cost_base: 3000,
   cost_range: 1000,
   qty_base: 0,
   qty_range: 2,
   weight: 2,
   img: require('../art_assets/resources/tiny_universe.gif')
 }]
