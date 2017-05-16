import React, {Component, PropTypes} from 'react';
import {Platform, View, ScrollView, Switch} from 'react-native';
import {Theme,NavigationBar} from 'teaset';
Theme.set({
    navColor: 'red'
});

export default class Back extends Component{

    render() {
        return (
            <NavigationBar title='桂林七星公园' leftView={<NavigationBar.BackButton title='返回' />} />
        );
    }
}
