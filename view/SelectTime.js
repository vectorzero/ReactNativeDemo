import React, { Component } from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Select, NavigationPage, ListRow, Label} from 'teaset';

export default class Introduce extends Component{
    constructor(props) {
        super(props);
        this.items = [
            "上午",
            "中午",
            "下午"
        ];
        this.state={
            valueSelect: '',
            valueInput: ''
        };
    }

    result(value){
        // return(
        //         <View><Text>{"系统为您推出的最佳时间段为："+value}</Text></View>
        //     )
        if(value=="上午"){
            return(
                <View><Text>系统为您推出的最佳时间段为：07:30-10:30</Text></View>
            )
        }else if(value=="中午"){
            return(
                <View><Text>系统为您推出的最佳时间段为：10:30-14:30</Text></View>
            )
        }else if(value=="下午"){
            return(
                <View><Text>系统为您推出的最佳时间段为：14:30-18:30</Text></View>
            )
        }
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
               {this.result(this.state.valueSelect)}
            </View>
        )
    }
}