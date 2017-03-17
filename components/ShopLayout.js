import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';
import Modal from 'react-native-simple-modal';
import InfoBar from './InfoBar';
import ShopResource from './ShopResource';
import Row from './Row';
import Header from './Header';
import ShopHeader from './ShopHeader';
import ShopFooter from './ShopFooter';

// //devel version of component:
// export default class ShopLayout extends Component {
//
//   render() {
//
//     const resourcesMapped = resources.map((resource) =>
//         <View key={resource.id}>
//           <ShopResource
//             img={resource.img}
//             title="{resource.name}"
//               />
//         </View>
//       )
//
//     return (
//       <View style={{flex: 1, alignItems: 'center', backgroundColor: this.props.planetData.style}}>
//         <Text style={styles.planet}>WELCOME TO {this.props.planetData.name.toUpperCase()}!!!! {this.props.planetData.description}</Text>
//         <Image source={this.props.planetData.img} />
//         {resourcesMapped}
//       </View>
//     )
//   }
// }
// //

export default class ShopLayout extends Component {
  constructor(props) {
    super(props);

    function get_price_qty(planet_id) {
      let mods = [];
      let resource_stock = [];
      planet_resources.forEach(p_r => {
        if (p_r.planet_id === planet_id) {
          mods.push(p_r)
        }
      })
      resources.forEach(resource => {
        let price_mod = 0;
        let qty_mod = 0;
        mods.forEach(mod => {
          if (mod.resource_id === resource.id) {
            price_mod = mod.price_mod;
            qty_mod = mod.qty_mod;
          }
        })
        let res_obj = {
          is_cargo: false
          id: resource.id,
          name: resource.name,
          price: Math.floor(price_mod*(resource.cost_base+(Math.random()*resource.cost_range))),
          qty: Math.floor(qty_mod*(resource.qty_base+(Math.random()*resource.qty_range))),
          weight: resource.weight
        }
        resource_stock.push(res_obj);
      })
      return resource_stock;
    }
    const shop_stock = get_price_qty(this.props.planetData.id)
    console.log('shop_stock is', shop_stock);
    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData,
    });

    const { dataBlob, sectionIds, rowIds } = this.formatData(resources);
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds),
    };
  }
  //
  formatData(shop_stock) {
  const shop_or_cargo = ['Shop Inventory', 'Current Cargo'];

  // Need somewhere to store our data
  const dataBlob = {};
  const sectionIds = [];
  const rowIds = [];

  // Each section is going to represent either 'Shop Inventory' or 'Current Cargo' in the shop_or_cargo so we loop over the shop_or_cargo
  for (let sectionId = 0; sectionId < shop_or_cargo.length; sectionId++) {
    // Get the character we're currently looking for
    const current_type = shop_or_cargo[sectionId];

    // Get items with each sale type
    //const items = resources.filter((item) => if (sectionID === 0) { item.is_cargo === false} else { item.is_cargo === true });
    const items = [];
    resources.forEach(item => {
      if (sectionId === 0 && !item.is_cargo) {
        items.push(item);
      } else if (sectionId === 1 && item.is_cargo) {
        items.push(item);
      }
    })
    // If there are any items who have a first name starting with the current letter then we'll
    // add a new section otherwise we just skip over it
    if (items.length > 0) {
      // Add a section id to our array so the listview knows that we've got a new section
      sectionIds.push(sectionId);

      // Store any data we would want to display in the section header. In our case we want to show
      // the current character
      dataBlob[sectionId] = { location: current_type };

      // Setup a new array that we can store the row ids for this section
      rowIds.push([]);

      // Loop over the valid items for this section
      for (let i = 0; i < items.length; i++) {
        // Create a unique row id for the data blob that the listview can use for reference
        const rowId = `${sectionId}:${i}`;

        // Push the row id to the row ids array. This is what listview will reference to pull
        // data from our data blob
        rowIds[rowIds.length - 1].push(rowId);

        // Store the data we care about for this row
        dataBlob[rowId] = items[i];
      }
    }
  }

  return { dataBlob, sectionIds, rowIds };
  }
  //

  render() {

    const resourcesMapped = resources.map((resource) =>
        <View style={styles.container} key={resource.id}>
          <ShopResource
            img={resource.img}
            title={resource.name}
              />
        </View>
      )

    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(resources) => <Row {...resources} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <Header />}
        renderFooter={() => <ShopFooter />}
        renderShopHeader={(sectionData) => <ShopHeader {...sectionData} />}
      />
    )
  }
}

const styles = StyleSheet.create({
  planet: {
   fontSize:14,
   marginBottom:10,
   marginTop: 10,
 },
 container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
})

const planet_resources = [{
        planet_id: 1,
        resource_id: 1,
        qty_mod: 2,
        price_mod: 0.8
      },{
        planet_id: 1,
        resource_id: 2,
        qty_mod: 1,
        price_mod: 0.5
      },{
        planet_id: 1,
        resource_id: 3,
        qty_mod: 0.2,
        price_mod: 0.5
      },{
        planet_id: 1,
        resource_id: 4,
        qty_mod: 0.5,
        price_mod: 0.8
      },{
        planet_id: 1,
        resource_id: 5,
        qty_mod: 0,
        price_mod: 0.5
      },{
        planet_id: 1,
        resource_id: 6,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 1,
        resource_id: 7,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 1,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 1
      },{
        planet_id: 1,
        resource_id: 9,
        qty_mod: 0.2,
        price_mod: 2
      },{
        planet_id: 1,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 2,
        resource_id: 1,
        qty_mod: 0,
        price_mod: 1
      },{
        planet_id: 2,
        resource_id: 2,
        qty_mod: 0.2,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 3,
        qty_mod: 1.2,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 4,
        qty_mod: 0.2,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 5,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 6,
        qty_mod: 0.8,
        price_mod: 0.8
      },{
        planet_id: 2,
        resource_id: 7,
        qty_mod: 1,
        price_mod: 1.2
      },{
        planet_id: 2,
        resource_id: 8,
        qty_mod: 0.5,
        price_mod: 0.8
      },{
        planet_id: 2,
        resource_id: 9,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 2,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 3,
        resource_id: 1,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 3,
        resource_id: 2,
        qty_mod: 0.8,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 3,
        qty_mod: 1,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 4,
        qty_mod: 1.5,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 5,
        qty_mod: 2,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 6,
        qty_mod: 0.2,
        price_mod: 0.5
      },{
        planet_id: 3,
        resource_id: 7,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 3,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 3,
        resource_id: 9,
        qty_mod: 0,
        price_mod: 1
      },{
        planet_id: 3,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 4,
        resource_id: 1,
        qty_mod: 0.2,
        price_mod: 1
      },{
        planet_id: 4,
        resource_id: 2,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 4,
        resource_id: 3,
        qty_mod: 1.5,
        price_mod: 1.5
      },{
        planet_id: 4,
        resource_id: 4,
        qty_mod: 0.8,
        price_mod: 1.5
      },{
        planet_id: 4,
        resource_id: 5,
        qty_mod: 0,
        price_mod: 0.8
      },{
        planet_id: 4,
        resource_id: 6,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 4,
        resource_id: 7,
        qty_mod: 0.8,
        price_mod: 0.8
      },{
        planet_id: 4,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 4,
        resource_id: 9,
        qty_mod: 0,
        price_mod: 0.8
      },{
        planet_id: 4,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 0.5
      },{
        planet_id: 5,
        resource_id: 1,
        qty_mod: 0.8,
        price_mod: 0.5
      },{
        planet_id: 5,
        resource_id: 2,
        qty_mod: 0.8,
        price_mod: 1
      },{
        planet_id: 5,
        resource_id: 3,
        qty_mod: 0.8,
        price_mod: 1.2
      },{
        planet_id: 5,
        resource_id: 4,
        qty_mod: 1.5,
        price_mod: 0.8
      },{
        planet_id: 5,
        resource_id: 5,
        qty_mod:  0.8,
        price_mod: 1
      },{
        planet_id: 5,
        resource_id: 6,
        qty_mod: 0.2,
        price_mod: 0.5
      },{
        planet_id: 5,
        resource_id: 7,
        qty_mod: 1.5,
        price_mod: 0.5
      },{
        planet_id: 5,
        resource_id: 8,
        qty_mod:  0.5,
        price_mod: 1.2
      },{
        planet_id: 5,
        resource_id: 9,
        qty_mod: 0,
        price_mod: 0.8
      },{
        planet_id: 5,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 6,
        resource_id: 1,
        qty_mod: 1,
        price_mod: 1.2
      },{
        planet_id: 6,
        resource_id: 2,
        qty_mod: 2,
        price_mod: 0.8
      },{
        planet_id: 6,
        resource_id: 3,
        qty_mod: 1,
        price_mod: 0.8
      },{
        planet_id: 6,
        resource_id: 4,
        qty_mod: 0.8,
        price_mod: 1
      },{
        planet_id: 6,
        resource_id: 5,
        qty_mod: 0.2,
        price_mod: 1.2
      },{
        planet_id: 6,
        resource_id: 6,
        qty_mod: 0,
        price_mod: 1.2
      },{
        planet_id: 6,
        resource_id: 7,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 6,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 6,
        resource_id: 9,
        qty_mod: 1,
        price_mod: 0.8
      },{
        planet_id: 6,
        resource_id: 10,
        qty_mod: 1,
        price_mod: 0.8
      },{
        planet_id: 7,
        resource_id: 1,
        qty_mod: 0,
        price_mod: 0
      },{
        planet_id: 7,
        resource_id: 2,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 7,
        resource_id: 3,
        qty_mod: 1.5,
        price_mod: 1.2
      },{
        planet_id: 7,
        resource_id: 4,
        qty_mod: 0.2,
        price_mod: 2
      },{
        planet_id: 7,
        resource_id: 5,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 7,
        resource_id: 6,
        qty_mod: 1.5,
        price_mod: 1
      },{
        planet_id: 7,
        resource_id: 7,
        qty_mod: 0.8,
        price_mod: 0.8
      },{
        planet_id: 7,
        resource_id: 8,
        qty_mod: 1.5,
        price_mod: 0.5
      },{
        planet_id: 7,
        resource_id: 9,
        qty_mod: 1.2,
        price_mod: 1.2
      },{
        planet_id: 7,
        resource_id: 10,
        qty_mod: 0.5,
        price_mod: 1.2
      },{
        planet_id: 8,
        resource_id: 1,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 8,
        resource_id: 2,
        qty_mod: 0,
        price_mod: 1.5
      },{
        planet_id: 8,
        resource_id: 3,
        qty_mod: 0.5,
        price_mod: 1.5
      },{
        planet_id: 8,
        resource_id: 4,
        qty_mod: 2,
        price_mod: 1.2
      },{
        planet_id: 8,
        resource_id: 5,
        qty_mod: 0.8,
        price_mod: 2
      },{
        planet_id: 8,
        resource_id: 6,
        qty_mod: 1,
        price_mod: 1
      },{
        planet_id: 8,
        resource_id: 7,
        qty_mod: 0,
        price_mod: 2
      },{
        planet_id: 8,
        resource_id: 8,
        qty_mod: 0,
        price_mod: 1
      },{
        planet_id: 8,
        resource_id: 9,
        qty_mod: 1.5,
        price_mod: 1.5
      },{
        planet_id: 8,
        resource_id: 10,
        qty_mod: 0,
        price_mod: 1.2
      }];

const resources = [{
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
   img:  require('../art_assets/resources/space_vegetables.gif')
 },{
   id: 3,
   name: 'Spare Droid Parts',
   cost_base: 100,
   cost_range: 75,
   qty_base: 10,
   qty_range: 25,
   weight: 8,
   img:  require('../art_assets/resources/spare_droid_parts.gif')
 },{
   id: 4,
   name: 'Bio-Meds',
   cost_base: 200,
   cost_range: 150,
   qty_base: 30,
   qty_range: 20,
   weight: 1.5,
   img:  require('../art_assets/resources/bio_meds.gif')
 },{
   id: 5,
   name: 'Garbast Barblezargs',
   cost_base: 400,
   cost_range: 220,
   qty_base: 10,
   qty_range: 15,
   weight: 2,
   img:  require('../art_assets/resources/garbast_barblezargs.gif')
 },{
   id: 6,
   name: 'Ancient Artifacts',
   cost_base: 600,
   cost_range: 500,
   qty_base: 1,
   qty_range: 10,
   weight: 5,
   img:  require('../art_assets/resources/ancient_artifacts.gif')
 },{
   id: 7,
   name: 'Hyper Crystals',
   cost_base: 900,
   cost_range: 700,
   qty_base: 2,
   qty_range: 4,
   weight: 6,
   img:  require('../art_assets/resources/hyper_crystals.gif')
 },{
   id: 8,
   name: 'Spice',
   cost_base: 1400,
   cost_range: 1000,
   qty_base: 15,
   qty_range: 25,
   weight: 0.2,
   img:  require('../art_assets/resources/spice.gif')
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
   img:  require('../art_assets/resources/tiny_universe.gif')
 }]
