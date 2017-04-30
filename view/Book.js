import React, {Component, PropTypes} from 'react';
import {Platform, View, ScrollView, Switch} from 'react-native';
import {Theme,Button,Label,ListRow,Popover} from 'teaset';

export default class BookTicket extends Component{

    render() {
        return (
            <View>
                <View style={{marginTop:5,marginBottom:5}}>
                    <ListRow title='当前预定价格:￥35/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
                </View>
            </View>
        );
    }
}
