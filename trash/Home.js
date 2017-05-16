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
//import CityList from './CityList'
import CarouselPic from './Carousel'
import Back from './Back'
import BookTicket from './Book'
import Introduce from './Introduce'
import PayPage from './Pay'
import Detail from './Detail'
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

export default class Home extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    PushToDetail(){
        const { navigator} = this.props;
        if (navigator) {
            navigator.push({
                name:'Detail',
                component:Detail,
            })
        }
    }
    
    render(){
        return(
          <View style={{flex: 1, flexDirection: 'column'}}>
              <Search/>
              <List>
                <Item arrow="horizontal" onClick={() => this.PushToDetail()}>111</Item>
                <Item arrow="horizontal" onClick={() => this.clickBtn()}>2</Item>
                <Item arrow="horizontal" onClick={() => this.clickBtn()}>3</Item>
                <Item arrow="horizontal" onClick={() => this.clickBtn()}>4</Item>
                <Item arrow="horizontal" onClick={() => this.clickBtn()}>5</Item>
                <Item arrow="horizontal" onClick={() => this.clickBtn()}>6</Item>
            </List>
          </View>
      )
    }
}
