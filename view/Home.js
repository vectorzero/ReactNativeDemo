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
              <View style={{height: 50}}>
                  <Back/>
              </View>
              <View>
                  <ListRow title='特色介绍' titleStyle={{fontSize: 15, color: '#31708f'}}/>
                  <Introduce/>
              </View>
              <View>
                  <ListRow title='景区图片' titleStyle={{fontSize: 15, color: '#31708f'}}/>
                  <CarouselPic/>
              </View>
              <View style={{marginTop:10}}>
                  <Label type='danger' size='sm' text='友情提示：请至少提早一天预订' />
                  <BookTicket/>
                  <Label type='danger' size='sm' text='温馨提示：游客在景区内请保管好财物' />
              </View>
          </View>
      )
    }
}
