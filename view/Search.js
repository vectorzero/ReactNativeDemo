/**
 * 搜索组件
 */

import React, { Component } from 'react';
import { View, Alert ,Text} from 'react-native';
import { SearchBar } from 'antd-mobile';

export default class Search extends Component{
    constructor(){
        super();
        this.state={
            value: ''
        }
    }

    onChange(value) {
        this.setState({ value:value });
    }

    clear() {
        this.setState({ value: '' });
    }

    render(){
        return(
            <SearchBar
                value={this.state.value}
                placeholder="请输入城市名/景区名"
                onSubmit={(value) => Alert.alert(value)}
                onCancel={()=>this.clear()}
                onChange={()=>this.onChange()}
            />
        )
    }
}
