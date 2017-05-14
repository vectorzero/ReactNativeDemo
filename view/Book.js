import React, {Component, PropTypes} from 'react';
import {Platform, View, ScrollView, Switch} from 'react-native';
import {Theme,Button,Label,ListRow,Popover} from 'teaset';

export default class BookTicket extends Component{
   
    renderPrice(detail){
        if(detail=='detail1'){
            return(
                 <ListRow title='当前预定价格:￥35/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail2'){
            return(
                <ListRow title='当前预定价格:￥135/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail3'){
            return(
                 <ListRow title='当前预定价格:￥100/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
            )
        }else if(detail=='detail4'){
            return(
                 <ListRow title='当前预定价格:￥80/位' accessory='indicator' detail='预订' onPress={() => alert('Press!')}/>
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
