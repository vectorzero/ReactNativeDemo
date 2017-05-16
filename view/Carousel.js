/**
 * 景点轮播图页面
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Dimensions} from 'react-native';
import {NavigationPage, ListRow, Carousel, PullPicker} from 'teaset';

export default class CarouselPic extends Component{

    render(){
        return(
            <Carousel style={{height: 238}} control={true}>
                <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/pic1.jpg')} />
                <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/pic2.jpg')} />
                <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/pic3.jpg')} />
                <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/pic4.jpg')} />
            </Carousel>
        );
    }
}
