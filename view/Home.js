
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

export default class Home extends Component{
  render(){
      return(
          <View>
              <Search/>
          </View>
      )
  }
}
