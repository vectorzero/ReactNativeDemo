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

const Item = List.Item;
const Brief = Item.Brief;

export default class CityList extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <List>
                <Item arrow="horizontal" onClick={() => this.props.pressBtn}>xxxx</Item>
                <Item arrow="horizontal" onClick={() => {}}>xxx</Item>
                <Item arrow="horizontal" onClick={() => {}}>xx</Item>
                <Item arrow="horizontal" onClick={() => {}}>xx</Item>
                <Item arrow="horizontal" onClick={() => {}}>xx</Item>
                <Item arrow="horizontal" onClick={() => {}}>x</Item>
            </List>
        )
    }
}