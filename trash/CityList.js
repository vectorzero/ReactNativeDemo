import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ListView,
    ScrollView
} from 'react-native';
import { List } from 'antd-mobile';
import Detail from './Detail'

const Item = List.Item;
const Brief = Item.Brief;

export default class CityList extends Component{
    constructor(){
        super();
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
            <View>
                <List>
                    <Item arrow="horizontal" onClick={() => this.PushToDetail()}>111</Item>
                    <Item arrow="horizontal" onClick={() => alert('Press!')}>2</Item>
                    <Item arrow="horizontal" onClick={() => this.clickBtn()}>3</Item>
                    <Item arrow="horizontal" onClick={() => this.clickBtn()}>4</Item>
                    <Item arrow="horizontal" onClick={() => this.clickBtn()}>5</Item>
                    <Item arrow="horizontal" onClick={() => this.clickBtn()}>6</Item>
                </List>
            </View>
        )
    }
}