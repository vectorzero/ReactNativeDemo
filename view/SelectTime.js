import React, { Component } from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Select, NavigationPage, ListRow, Label} from 'teaset';

export default class Introduce extends Component{
    constructor(props) {
        super(props);
        this.items = [
            '07:30-10:30',
            '10:30-14:30',
            '14:30-18:30'
        ];
        this.state={
            valueSelect: '',
            valueInput: ''
        };
    }
    render(){
        return(
            <View style={{height:80}}>
                <ListRow
                    title='请选择选择时间段'
                    detail={
                         <Select
                            style={{width: 200}}
                            value={this.state.valueSelect}
                            items={this.items}
                            onSelected={(item, index) => this.setState({valueSelect: item})}
                        />}
                />
                <Text>系统为您推出的最佳时间段为：<Text>{this.state.valueSelect}</Text></Text>
            </View>
        )
    }
}