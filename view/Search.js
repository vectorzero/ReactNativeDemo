import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    PixelRatio,
    TextInput,
} from 'react-native';

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    green : {
        backgroundColor: '#cd2d1c'
    },
    flexDirection: {
        flexDirection: 'row',
    },
    topStaus: {
        marginTop:25,
    },
    inputHeight: {
        height: 45,
    },

    inputs: {
        height: 45,
        borderWidth: 1,
        marginLeft: 5,
        paddingLeft: 5,
        borderColor: '#CCC',
        borderRadius: 4,
    },

    btn: {
        width: 55,
        marginLeft: -5,
        marginRight: 5,
        backgroundColor: '#23bfff',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },

    search: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },

    result: {
        marginTop: 1,
        marginRight: 5,
        marginLeft: 5,
        height:200,
        borderColor: '#ccc',
    },

    item: {
        fontSize: 16,
        padding: 5,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#ddd',
        borderTopWidth: 0,
        color: '#fff',
    }

});
export default class Ticket extends Component{
    constructor(){
        super();
        this.state={
            show: false
        }
    }

    getValue(text){
        this.setState({
            show: true,
            value: text
        });
    }

    hide(val){
        this.setState({
            show: false,
            value: val
        });
    }

    render(){
        return(
            <View style = {[styles.flex,styles.topStaus]}>
                <View style = {[styles.flex]}>
                    <View style={[styles.flexDirection,styles.inputHeight]}>
                        <View style = {styles.flex}>
                            <TextInput style = {styles.inputs}
                                       returnKeyType = "search"
                                       placeholder= "请输入景点名称/城市名称"
                                       value = {this.state.value}
                                       onChangeText = {()=>this.getValue(this.state.value)}/>
                        </View>
                        <View style = {styles.btn}>
                            <Text style = {styles.search} onPress = {()=>this.hide(this.state.value)}>搜索</Text>
                        </View>
                    </View>
                    <Text>{this.state.value}</Text>
                    {this.state.show?
                        <View style = {[styles.result]}>
                            <Text style = {styles.item}>{this.state.value}</Text>
                        </View>
                        :null
                    }
                </View>
            </View>
        )
    }
}
