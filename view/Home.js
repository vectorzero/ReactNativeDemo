
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  InteractionManager,
  StatusBar,
  Platform,
} from 'react-native';
import Search from './Search'
import CityList from './CityList'
import TabSelect from './TabSelect'

export default class Home extends Component{
  render(){
      return(
          <View>
              <TabSelect/>
          </View>
      )
  }
}
