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
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    InteractionManager,
    StatusBar,
    Platform,
} from 'react-native';
import { List } from 'antd-mobile';
import {Select, Label, ListRow,Input,Button,ActionSheet,Theme,NavigationBar,Toast} from 'teaset';
Theme.set({
    navColor: 'red'
});
const {width, height} = Dimensions.get('window');
const Item = List.Item;
const Brief = Item.Brief;

import Search from './view/Search'
import Detail from './view/Detail'
import PayPage from './view/Pay'
import CarouselPic from './view/Carousel'
//import BookTicket from './view/Book'
import Remain from './view/Remain'
import Introduce from './view/Introduce'
import SelectTime from './view/SelectTime'

export default class Home extends Component{
    constructor(){
        super();
        this.items = [
            '支付宝',
            '微信支付',
            '抵消币'
        ];
        this.state={
            jumpIndex: 0,
            bigText:'主界面',
            senceDetail:'',
            detailhave: 0,
            detailremain: 0,
            valueSelect: '',
            valueInput: '',
            count: 0,
            detailhave1: 448,
            detailremain1: 200,
            detailhave2: 328,
            detailremain2: 210,
            detailhave3: 243,
            detailremain3: 222,
            detailhave4: 411,
            detailremain4: 312,
            detailhave5: 123,
            detailremain5: 210,
            detailhave6: 341,
            detailremain6: 521,
            detailhave7: 213,
            detailremain7: 411,
            detailhave8: 122,
            detailremain8: 231,
            detailhave9: 122,
            detailremain9: 231,
            detailhave10: 122,
            detailremain10: 231,
            detailhave11: 122,
            detailremain11: 231,
            detailhave12: 122,
            detailremain12: 231,
            detailhave13: 122,
            detailremain13: 231
        }
    }

    changeTickets(senceDetail){
        switch(senceDetail)
            {
                case 'detail1':
                    this.setState({
                        detailhave1: this.state.detailhave1 + 1,
                        detailremain1: this.state.detailremain1 - 1
                    })
                break;
                case 'detail2':
                    this.setState({
                        detailhave2: this.state.detailhave2 + 1,
                        detailremain2: this.state.detailremain2 - 1
                    })
                break;
                case 'detail3':
                    this.setState({
                        detailhave3: this.state.detailhave3 + 1,
                        detailremain3: this.state.detailremain3 - 1
                    })
                break;
                case 'detail4':
                    this.setState({
                        detailhave4: this.state.detailhave4 + 1,
                        detailremain4: this.state.detailremain4 - 1
                    })
                break;
                case 'detail5':
                    this.setState({
                        detailhave5: this.state.detailhave5 + 1,
                        detailremain5: this.state.detailremain5 - 1
                    })
                break;
                case 'detail6':
                    this.setState({
                        detailhave6: this.state.detailhave6 + 1,
                        detailremain6: this.state.detailremain6 - 1
                    })
                break;
                case 'detail7':
                    this.setState({
                        detailhave7: this.state.detailhave7 + 1,
                        detailremain7: this.state.detailremain7 - 1
                    })
                break;
                case 'detail8':
                    this.setState({
                        detailhave8: this.state.detailhave8 + 1,
                        detailremain8: this.state.detailremain8 - 1
                    })
                break;
                case 'detail9':
                    this.setState({
                        detailhave9: this.state.detailhave9 + 1,
                        detailremain9: this.state.detailremain9 - 1
                    })
                break;
                case 'detail10':
                    this.setState({
                        detailhave10: this.state.detailhave10 + 1,
                        detailremain10: this.state.detailremain10 - 1
                    })
                break;
                case 'detail11':
                    this.setState({
                        detailhave11: this.state.detailhave11 + 1,
                        detailremain11: this.state.detailremain11 - 1
                    })
                break;
                case 'detail12':
                    this.setState({
                        detailhave12: this.state.detailhave12 + 1,
                        detailremain12: this.state.detailremain12 - 1
                    })
                break;
                case 'detail13':
                    this.setState({
                        detailhave13: this.state.detailhave13 + 1,
                        detailremain13: this.state.detailremain13 - 1
                    })
                break;
                default:
                //alert('error')
            }
    }

     show(modal,senceDetail) {
        let items = [
            {
                title: '确认', 
                onPress: () => {
                        Toast.message('支付成功'),
                        this.setState({
                            count: this.state.count + 1
                        }),
                        this.changeTickets(senceDetail)
                    }
                }
        ];
        let cancelItem = {title: '取消'};
        ActionSheet.show(items, cancelItem, {modal});
    }

    renderSence(jumpIndex,senceDetail,detailhave1,detailremain1,detailhave2,detailremain2,detailhave3,detailremain3,detailhave4,detailremain4,detailhave5,detailremain5,detailhave6,detailremain6,detailhave7,detailremain7,detailhave8,detailremain8,detailhave9,detailremain9,detailhave10,detailremain10,detailhave11,detailremain11,detailhave12,detailremain12,detailhave13,detailremain13,count){        if(jumpIndex==1){
            return(
                <ScrollView style={{marginBottom:20}}>
                    {/*<Detail senceDetail={senceDetail} jumpToPay={jumpToPay}/>*/}
                    <View>
                        <ListRow title='特色介绍' titleStyle={{fontSize: 15, color: '#31708f'}}/>
                        <Introduce senceDetail={senceDetail}/>
                    </View>
                    <View>
                        <ListRow title='景区图片' titleStyle={{fontSize: 15, color: '#31708f'}}/>
                        <CarouselPic senceDetail={senceDetail}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <Label type='danger' size='sm' text='友情提示：请至少提早一天预订' />
                        <SelectTime/>
                        <View style={{marginTop:5,marginBottom:5}}>
                            {this.renderPrice(senceDetail)}
                        </View>
                        <Label type='danger' size='sm' text='温馨提示：游客在景区内请保管好财物' />
                        <Remain senceDetail={senceDetail} 
                                detailhave1={detailhave1} detailremain1={detailremain1}
                                detailhave2={detailhave2} detailremain2={detailremain2}
                                detailhave3={detailhave3} detailremain3={detailremain3}
                                detailhave4={detailhave4} detailremain4={detailremain4}
                                detailhave5={detailhave5} detailremain5={detailremain5}
                                detailhave6={detailhave6} detailremain6={detailremain6}
                                detailhave7={detailhave7} detailremain7={detailremain7}
                                detailhave8={detailhave8} detailremain8={detailremain8}
                                detailhave9={detailhave9} detailremain9={detailremain9}
                                detailhave10={detailhave10} detailremain10={detailremain10}
                                detailhave11={detailhave11} detailremain11={detailremain11}
                                detailhave12={detailhave12} detailremain12={detailremain12}
                                detailhave13={detailhave13} detailremain13={detailremain13}
                        />
                    </View>
                </ScrollView>
            )
        }else if(jumpIndex==2){
             return(
                <View style={{height:height}}>
                    <ListRow
                        title='当前拥有门票数'
                        detail={count}
                    />
                    <WebView automaticallyAdjustContentInsets={false}
                             style={styles.webView}
                             source={require('./view/qrcode.html')}
                             javaScriptEnabled={true}
                             domStorageEnabled={true}
                             startInLoadingState={true}
                    />
                </View>
            )
        }else if(jumpIndex==3){
             return(
                <View style={{height:height}}>
                    {/*<PayPage changeTickets={changeTickets}/>*/}
                    <View style={{flex: 1, flexDirection: 'column'}}>
                        <ListRow
                            title='支付方式'
                            detail={
                                <Select
                                    style={{width: 200}}
                                    value={this.state.valueSelect}
                                    items={this.items}
                                    onSelected={(item, index) => this.setState({valueSelect: item})}
                                />}
                        />
                        <ListRow
                            title='手机号码'
                            detail={
                                <Input
                                    style={{width: 200}}
                                    value={this.state.valueInput}
                                    onChangeText={text => this.setState({valueInput: text})}
                                />}
                        />
                        <Button style={{marginTop:50,marginLeft:10,marginRight:10}} 
                                type='danger' title='支付' size='lg' 
                                onPress={() => this.show(true,senceDetail)}
                        />
                    </View>
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
                                  senceDetail:'detail1',
                                  detailhave1: detailhave1,
                                  detailremain1: detailremain1
                              })}>桂林七星公园
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林市象山景区',
                                  senceDetail:'detail2',
                                  detailhave2: detailhave2,
                                  detailremain2: detailremain2
                              })}>桂林市象山景区
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林芦笛岩',
                                  senceDetail:'detail3',
                                  detailhave3: detailhave3,
                                  detailremain3: detailremain3
                              })}>桂林芦笛岩
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林独秀峰王城',
                                  senceDetail:'detail4',
                                  detailhave4: detailhave4,
                                  detailremain4: detailremain4
                              })}>桂林独秀峰王城
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'桂林两江四湖',
                                  senceDetail:'detail5',
                                  detailhave5: detailhave5,
                                  detailremain5: detailremain5
                              })}>桂林两江四湖
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'阳朔大榕树',
                                  senceDetail:'detail6',
                                  detailhave6: detailhave6,
                                  detailremain6: detailremain6
                              })}>阳朔大榕树
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'印象刘三姐',
                                  senceDetail:'detail7',
                                  detailhave7: detailhave7,
                                  detailremain7: detailremain7
                              })}>印象刘三姐
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'玉圭园凯旋王国陆地乐园',
                                  senceDetail:'detail8',
                                  detailhave8: detailhave8,
                                  detailremain8: detailremain8
                              })}>玉圭园凯旋王国陆地乐园
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'北京富国海底世界',
                                  senceDetail:'detail8',
                                  detailhave9: detailhave9,
                                  detailremain9: detailremain9
                              })}>北京富国海底世界
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'东方明珠',
                                  senceDetail:'detail8',
                                  detailhave10: detailhave10,
                                  detailremain10: detailremain10
                              })}>东方明珠
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'上海欢乐谷',
                                  senceDetail:'detail8',
                                  detailhave11: detailhave11,
                                  detailremain11: detailremain11
                              })}>上海欢乐谷
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'颐和园',
                                  senceDetail:'detail8',
                                  detailhave12: detailhave12,
                                  detailremain12: detailremain12
                              })}>颐和园
                        </Item>
                        <Item arrow="horizontal" 
                              onClick={()=>this.setState({
                                  jumpIndex:1,
                                  bigText:'圆明园遗址',
                                  senceDetail:'detail8',
                                  detailhave13: detailhave13,
                                  detailremain13: detailremain13
                              })}>圆明园遗址
                        </Item>
                    </List>
                </View>
            )
        }
    }

    renderPrice(detail){
        if(detail=='detail1'){
            return(
                 <ListRow title='当前预订价格:￥70/位' accessory='indicator' detail='预订' onPress={() => this.setState({jumpIndex:3})}/>
            )
        }else if(detail=='detail2'){
            return(
                <ListRow title='当前预订价格:￥60/位' accessory='indicator' detail='预订' onPress={() => this.setState({jumpIndex:3})}/>
            )
        }else if(detail=='detail3'){
            return(
                 <ListRow title='当前预订价格:￥120/位' accessory='indicator' detail='预订' onPress={() => this.setState({jumpIndex:3})}/>
            )
        }else if(detail=='detail4'){
            return(
                 <ListRow title='当前预订价格:￥78/位' accessory='indicator' detail='预订' onPress={() => this.setState({jumpIndex:3})}/>
            )
        }else if(detail=='detail5'){
            return(
                 <ListRow title='当前预订价格:￥160/位' accessory='indicator' detail='预订' onPress={() => this.setState({jumpIndex:3})}/>
            )
        }else if(detail=='detail6'){
            return(
                 <ListRow title='当前预订价格:￥12/位' accessory='indicator' detail='预订' onPress={() => this.setState({jumpIndex:3})}/>
            )
        }else if(detail=='detail7'){
            return(
                 <ListRow title='当前预订价格:￥155/位' accessory='indicator' detail='预订' onPress={() => this.setState({jumpIndex:3})}/>
            )
        }else if(detail=='detail8'){
            return(
                 <ListRow title='当前预订价格:￥108/位' accessory='indicator' detail='预订' onPress={() => this.setState({jumpIndex:3})}/>
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
            {this.renderSence(this.state.jumpIndex,this.state.senceDetail,this.state.detailhave1,this.state.detailremain1,this.state.detailhave2,this.state.detailremain2,this.state.detailhave3,this.state.detailremain3,this.state.detailhave4,this.state.detailremain4,this.state.detailhave5,this.state.detailremain5,this.state.detailhave6,this.state.detailremain6,this.state.detailhave7,this.state.detailremain7,this.state.detailhave8,this.state.detailremain8,this.state.detailhave9,this.state.detailremain9,this.state.detailhave10,this.state.detailremain10,this.state.detailhave11,this.state.detailremain11,this.state.detailhave12,this.state.detailremain12,this.state.detailhave13,this.state.detailremain13,this.state.count)}
          </View>
      )
    }
}

const styles = StyleSheet.create({
  webView: {
    height: 350,
  }
});