/**
 * 预订页面
 */

import React, {Component, PropTypes} from 'react';
import {Platform, View, ScrollView, Switch} from 'react-native';
import {Theme,Button,Label,ListRow,Popover} from 'teaset';
import PayPage from './Pay'

export default class BookTicket extends Component{
   
    renderPrice(detail){
        if(detail=='detail1'){
            return(
                 <ListRow title='当前预订价格:￥70/位' accessory='indicator' detail='预订' onPress={() => this.props.jumpToPay()}/>
            )
        }else if(detail=='detail2'){
            return(
                <ListRow title='当前预订价格:￥60/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail3'){
            return(
                 <ListRow title='当前预订价格:￥120/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail4'){
            return(
                 <ListRow title='当前预订价格:￥78/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail5'){
            return(
                 <ListRow title='当前预订价格:￥160/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail6'){
            return(
                 <ListRow title='当前预订价格:￥12/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail7'){
            return(
                 <ListRow title='当前预订价格:￥155/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail8'){
            return(
                 <ListRow title='当前预订价格:￥108/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }
    }
    render() {
        return (
            <View>
                <View style={{marginTop:5,marginBottom:5}}>
                    {this.renderPrice(this.props.senceDetail)}
                </View>
            </View>
        );
    }
}
