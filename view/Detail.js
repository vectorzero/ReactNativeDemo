/**
 * 景点介绍页面
 */

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
import {Label,ListRow,NavigationBar,Theme} from 'teaset';
Theme.set({
    navColor: 'red'
});
import CarouselPic from './Carousel'
import BookTicket from './Book'
import Remain from './Remain'
import Introduce from './Introduce'
import SelectTime from './SelectTime'

export default class Detail extends Component{
    constructor(){
        super();
        this.state={

        }
    }

    render(){
        return(
          <View>
            <View>
                <ListRow title='特色介绍' titleStyle={{fontSize: 15, color: '#31708f'}}/>
                <Introduce senceDetail={this.props.senceDetail}/>
            </View>
            <View>
                <ListRow title='景区图片' titleStyle={{fontSize: 15, color: '#31708f'}}/>
                <CarouselPic senceDetail={this.props.senceDetail}/>
            </View>
            <View style={{marginTop:10}}>
                <Label type='danger' size='sm' text='友情提示：请至少提早一天预订' />
                <SelectTime/>
                <BookTicket 
                        senceDetail={this.props.senceDetail}
                        jumpToPay={this.props.jumpToPay}
                        renderSence={this.props.renderSence}
                />
                <Label type='danger' size='sm' text='温馨提示：游客在景区内请保管好财物' />
                <Remain senceDetail={this.props.senceDetail}/>
            </View>
          </View>
      )
    }
}
