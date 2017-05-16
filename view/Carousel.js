/**
 * 景点轮播图页面
 */

import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, Dimensions} from 'react-native';
import {NavigationPage, ListRow, Carousel, PullPicker} from 'teaset';

export default class CarouselPic extends Component{
    renderPic(detail){
        if(detail=='detail1'){
            return(
                 <Carousel style={{height: 238}} control={true}>
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/1-1.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/1-2.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/1-3.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/1-4.png')} />
                </Carousel>
            )
        }else if(detail=='detail2'){
            return(
                 <Carousel style={{height: 238}} control={true}>
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/2-1.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/2-2.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/2-3.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/2-4.png')} />
                </Carousel>
            )
        }else if(detail=='detail3'){
            return(
                <Carousel style={{height: 238}} control={true}>
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/3-1.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/3-2.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/3-3.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/3-4.png')} />
                </Carousel>
            )
        }else if(detail=='detail4'){
            return(
                  <Carousel style={{height: 238}} control={true}>
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/4-1.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/4-2.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/4-3.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/4-4.png')} />
                </Carousel>
            )
        }else if(detail=='detail5'){
            return(
                  <Carousel style={{height: 238}} control={true}>
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/5-1.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/5-2.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/5-3.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/5-4.png')} />
                </Carousel>
            )
        }else if(detail=='detail6'){
            return(
                  <Carousel style={{height: 238}} control={true}>
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/6-1.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/6-2.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/6-3.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/6-4.png')} />
                </Carousel>
            )
        }else if(detail=='detail7'){
            return(
                  <Carousel style={{height: 238}} control={true}>
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/7-1.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/7-2.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/7-3.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/7-4.png')} />
                </Carousel>
            )
        }else if(detail=='detail8'){
            return(
                <Carousel style={{height: 238}} control={true}>
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/8-1.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/8-2.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/8-3.png')} />
                    <Image style={{width: 375, height: 238}} resizeMode='cover' source={require('../images/8-4.png')} />
                </Carousel>
            )
        }
    }

    render(){
        return(
            <View>
                {this.renderPic(this.props.senceDetail)}
            </View>
        );
    }
}
