import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Navigator,
    Dimensions,
    WebView,
    ScrollView
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
import PayPage from './view/Pay'

export default class Home extends Component{
    constructor(){
        super();
        this.state={
            jumpIndex: 0,
            bigText:'主界面',
            senceDetail:''
        }
    }

    jumpToPay(){
        //this.hello();
    }

    renderSence(jumpIndex,senceDetail,jumpToPay){
        if(jumpIndex==1){
            return(
                <ScrollView style={{marginBottom:20}}>
                    <Detail senceDetail={senceDetail} jumpToPay={jumpToPay}/>
                </ScrollView>
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
        }else if(jumpIndex==3){
             return(
                <View style={{height:height}}>
                    <PayPage/>
                </View>
            )
        }else if(jumpIndex<=0){
            return(
                <View>
                    <Search/>
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
                                  bigText:'桂林市象山景区',
                                  senceDetail:'detail2'
                              })}>桂林市象山景区
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林芦笛岩',
                                  senceDetail:'detail3'
                              })}>桂林芦笛岩
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林独秀峰王城',
                                  senceDetail:'detail4'
                              })}>桂林独秀峰王城
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林两江四湖',
                                  senceDetail:'detail5'
                              })}>桂林两江四湖
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'阳朔大榕树',
                                  senceDetail:'detail6'
                              })}>阳朔大榕树
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'印象刘三姐',
                                  senceDetail:'detail7'
                              })}>印象刘三姐
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'玉圭园凯旋王国陆地乐园',
                                  senceDetail:'detail8'
                              })}>玉圭园凯旋王国陆地乐园
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'北京富国海底世界',
                                  senceDetail:'detail8'
                              })}>北京富国海底世界
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'东方明珠',
                                  senceDetail:'detail8'
                              })}>东方明珠
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'上海欢乐谷',
                                  senceDetail:'detail8'
                              })}>上海欢乐谷
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'颐和园',
                                  senceDetail:'detail8'
                              })}>颐和园
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'圆明园遗址',
                                  senceDetail:'detail8'
                              })}>圆明园遗址
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
            {this.renderSence(this.state.jumpIndex,this.state.senceDetail,this.jumpToPay)}
          </View>
      )
    }
}

const styles = StyleSheet.create({
  webView: {
    height: 350,
  }
});