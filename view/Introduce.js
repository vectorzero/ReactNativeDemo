/**
 * Created by Administrator on 2017-04-19.
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper';
const pic1=require('../images/pic1.jpg');
const pic2=require('../images/pic2.jpg');
const pic3=require('../images/pic3.jpg');
const pic4=require('../images/pic4.jpg');
var images=[pic1,pic2,pic3,pic4];
export default class Introduce extends Component{
    renderImg(){
        var imageViews=[];
        for(var i=0;i<images.length;i++){
            imageViews.push(
                <Image
                    key={i}
                    style={{flex:1}}
                    source={images[i]}
                />
            );
        }
        return imageViews;
    }

    render(){
        return(
            <View>
                <Swiper height={240}
                        paginationStyle={{bottom:10}}
                        autoplay={true}
                        dot={<View style={{width:8,height:8,backgroundColor:'white',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                        activeDot={<View style={{width:8,height:8,backgroundColor:'orange',borderRadius:4,marginLeft:3,marginRight:3}}></View>}
                >
                    {this.renderImg()}
                </Swiper>
            </View>
        )
    }
}