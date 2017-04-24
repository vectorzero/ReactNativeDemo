/**
 * Created by Administrator on 2017-04-25.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class CityList extends Component{

    render(){
        return(
            <View>
                <Text>广西省</Text>
                <Text>南宁市</Text>
                <Text>柳州市</Text>
                <Text>桂林市</Text>
                <Text>梧州市</Text>
                <Text>北海市</Text>
                <Text>防城港市</Text>
                <Text>钦州市</Text>
                <Text>贵港市</Text>
                <Text>玉林市</Text>
                <Text>百色市</Text>
                <Text>贺州市</Text>
                <Text>河池市</Text>
                <Text>来宾市</Text>
                <Text>崇左市</Text>
            </View>
        )
    }
}