/**
 * Created by Administrator on 2017-04-19.
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
export default class Ticket extends Component{
    render(){
        return(
            <View>
                <Text>友情提示</Text>
                <Text>XXX门票</Text>
                <Text>当前预订价格</Text>
                <Text>温馨提示</Text>
            </View>
        )
    }
}