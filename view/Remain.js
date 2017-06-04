/**
 * 已售/剩余票数
 */

import React, {Component, PropTypes} from 'react';
import {View, ScrollView, Switch, StyleSheet} from 'react-native';
import {Theme,Button,Label,ListRow,Popover} from 'teaset';

export default class Remain extends Component{
   
    renderRemain(detail,detailhave,detailremain,detailhave1,detailremain1,detailhave2,detailremain2,detailhave3,detailremain3,detailhave4,detailremain4,detailhave5,detailremain5,detailhave6,detailremain6,detailhave7,detailremain7,detailhave8,detailremain8,detailhave9,detailremain9,detailhave10,detailremain10,detailhave11,detailremain11,detailhave12,detailremain12,detailhave13,detailremain13){
        if(detail=='detail1'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title={'已订票数：'+ detailhave1}/></View>
                    <View style={{flex:1}}><ListRow title={'剩余票数：'+ detailremain1}/></View>
                </View>
            )
        }else if(detail=='detail2'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title={'已订票数：'+ detailhave2}/></View>
                    <View style={{flex:1}}><ListRow title={'剩余票数：'+ detailremain2}/></View>
                </View>
            )
        }else if(detail=='detail3'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title={'已订票数：'+ detailhave3}/></View>
                    <View style={{flex:1}}><ListRow title={'剩余票数：'+ detailremain3}/></View>
                </View>
            )
        }else if(detail=='detail4'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title={'已订票数：'+ detailhave4}/></View>
                    <View style={{flex:1}}><ListRow title={'剩余票数：'+ detailremain4}/></View>
                </View>
            )
        }else if(detail=='detail5'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title={'已订票数：'+ detailhave5}/></View>
                    <View style={{flex:1}}><ListRow title={'剩余票数：'+ detailremain5}/></View>
                </View>
            )
        }else if(detail=='detail6'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title={'已订票数：'+ detailhave6}/></View>
                    <View style={{flex:1}}><ListRow title={'剩余票数：'+ detailremain6}/></View>
                </View>
            )
        }else if(detail=='detail7'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title={'已订票数：'+ detailhave7}/></View>
                    <View style={{flex:1}}><ListRow title={'剩余票数：'+ detailremain7}/></View>
                </View>
            )
        }else if(detail=='detail8'){
            return(
                <View style={styles.RemainList}>
                    <View style={{flex:1}}><ListRow title={'已订票数：'+ detailhave8}/></View>
                    <View style={{flex:1}}><ListRow title={'剩余票数：'+ detailremain8}/></View>
                </View>
            )
        }
    }
    render() {
        return (
            <View>
                {this.renderRemain(this.props.senceDetail,this.props.detailhave,this.props.detailremain,this.props.detailremain1,this.props.detailhave2,this.props.detailremain2,this.props.detailhave3,this.props.detailremain3,this.props.detailhave4,this.props.detailremain4,this.props.detailhave5,this.props.detailremain5,this.props.detailhave6,this.props.detailremain6,this.props.detailhave7,this.props.detailremain7,this.props.detailhave8,this.props.detailremain8,this.props.detailhave9,this.props.detailremain9,this.props.detailhave10,this.props.detailremain10,this.props.detailhave11,this.props.detailremain11,this.props.detailhave12,this.props.detailremain12,this.props.detailhave13,this.props.detailremain13)}
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
