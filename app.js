import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    Dimensions,
    WebView
} from 'react-native';
import { List } from 'antd-mobile';
import {Theme, NavigationBar, ListRow, Label} from 'teaset';
Theme.set({
    navColor: 'red'
});
const {width, height} = Dimensions.get('window');
const Item = List.Item;
const Brief = Item.Brief;

import Search from './view/Search'
import Detail from './view/Detail'

export default class Home extends Component{
    constructor(){
        super();
        this.state={
            jumpIndex: 0,
            bigText:'主界面',
            senceDetail:''
        }
    }

    renderSence(jumpIndex,senceDetail){
        if(jumpIndex==1){
            return(
                <View>
                    <Detail senceDetail={senceDetail}/>
                </View>
            )
        }else if(jumpIndex==2){
             return(
                <View style={{height:height}}>
                    <ListRow
                        title='当前拥有门票数'
                        detail='1'
                    />
                    <WebView automaticallyAdjustContentInsets={false}
                             style={styles.webView}
                             source={require('./view/qrcode.html')}
                             javaScriptEnabled={true}
                             domStorageEnabled={true}
                             startInLoadingState={true}/>
                </View>
            )
        }else if(jumpIndex<=0){
            return(
                <View>
                    <List>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林七星公园',
                                  senceDetail:'detail1'
                              })}>桂林七星公园
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林漓江风景区',
                                  senceDetail:'detail2'
                              })}>桂林漓江风景区
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'广西北海海洋之窗',
                                  senceDetail:'detail3'
                              })}>广西北海海洋之窗
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'北海银滩公园',
                                  senceDetail:'detail4'
                              })}>北海银滩公园
                        </Item>
                    </List>
                </View>
            )
        }
    }

    render(){
        return(
          <View style={{height:height,backgroundColor:"#fff"}}>
            <View style={{height: 50}}>
                <NavigationBar
                    style={{backgroundColor: 'red', height: 50}}
                    title={
                        <View style={{flex: 1, paddingLeft: 4, paddingRight: 4, alignItems: 'center'}}>
                            <Label style={{color:'white',fontSize: 18}} text={this.state.bigText} />
                        </View>
                    }
                    rightView={
                        <View style={{flexDirection: 'row'}}>
                            <NavigationBar.IconButton icon={require('./images/qrcode.png')}  
                                onPress={()=>this.setState({
                                    jumpIndex:2,
                                    bigText:'二维码门票',
                                    smallText:'详情'
                            })}/>
                        </View>
                    }
                    leftView={
                        this.state.jumpIndex!==0?
                            <NavigationBar.BackButton title='返回' 
                                onPress={()=>this.setState({jumpIndex:0,bigText:'主界面'})} />
                        :<Text></Text>
                    }
                />
            </View>
            {this.renderSence(this.state.jumpIndex,this.state.senceDetail)}
          </View>
      )
    }
}

const styles = StyleSheet.create({
  webView: {
    height: 350,
  }
});