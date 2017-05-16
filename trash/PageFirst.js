import React, {Component} from 'react';
import {Text, TextInput, View, ToastAndroid, TouchableOpacity} from 'react-native';

import PageSecond from './PageSecond';

export default class PageFirst extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null
        }
    }

    //页面跳转
    _push() {
        let _this = this;
        const {navigator} = this.props;
        let scenes = {
            component: PageSecond,
            params: {
                name: _this.state.name,
                setPassword: (password)=> {
                    _this.setState({password: password});
                }
            }
        };
        navigator.push(scenes);
    }

    render() {
        if (this.state.password) {
            return (<View style={styles.scenes}>
                <View style={styles.navGroup}>
                    <Text style={styles.title}>注册成功</Text>
                </View>
                <Text>欢迎 {this.state.name}，您的初始密码为：{this.state.password}</Text>
            </View>);
        } else {
            return (<View style={styles.scenes}>
                <View style={styles.navGroup}>
                    <Text style={styles.title}>注册</Text>
                </View>
                <TextInput
                    placeholder='请输入用户名'
                    onChangeText={name => this.setState({ name })}/>
                <TouchableOpacity style={styles.btn} onPress={this._push.bind(this)}>
                    <Text style={styles.text}>提交</Text>
                </TouchableOpacity>
            </View>);
        }
    }
}

const styles = {
    navGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#495A80',
        height: 60,
        paddingHorizontal: 5
    },
    title: {
        color: '#fff', fontSize: 16, textAlign: 'center'
    },
    text: {
        color: '#495A80', fontSize: 14, textAlign: 'center'
    },
    scenes: {
        flex: 1
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#495A80',
        borderRadius: 5,
        margin: 5,
        padding: 10
    }
};