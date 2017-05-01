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
import {Label,ListRow} from 'teaset';
import Search from './Search'
import CityList from './CityList'
import CarouselPic from './Carousel'
import Back from './Back'
import BookTicket from './Book'
import Introduce from './Introduce'
import PayPage from './Pay'

export default class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    pressBtn(){
        this.setState({
            list:'none',
            tabSelect:'none'
        })
    }

    render(){
        return(
          <View style={{flex: 1, flexDirection: 'column'}}>
              <PayPage/>
          </View>
      )
    }
}
