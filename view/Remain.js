import React, {Component, PropTypes} from 'react';
import {View, ScrollView, Switch, StyleSheet} from 'react-native';
import {Theme,Button,Label,ListRow,Popover} from 'teaset';

export default class Remain extends Component{
   
    renderRemain(detail){
        if(detail=='detail1'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title='已订票数：335'/></View>
                    <View style={{flex:1}}><ListRow title='剩余票数：125'/></View>
                </View>
            )
        }else if(detail=='detail2'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title='已订票数：300'/></View>
                    <View style={{flex:1}}><ListRow title='剩余票数：150'/></View>
                </View>
            )
        }else if(detail=='detail3'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title='已订票数：200'/></View>
                    <View style={{flex:1}}><ListRow title='剩余票数：300'/></View>
                </View>
            )
        }else if(detail=='detail4'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title='已订票数：400'/></View>
                    <View style={{flex:1}}><ListRow title='剩余票数：135'/></View>
                </View>
            )
        }
    }
    render() {
        return (
            <View>
                {this.renderRemain(this.props.senceDetail)}
            </View>
        );
    }
}

const styles = StyleSheet.create({
  RemainList: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row'
  }
});
