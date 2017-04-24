
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight,
    InteractionManager,
    StatusBar,
    Platform,
} from 'react-native';
import ScrollableTabView,{ ScrollableTabBar } from 'react-native-scrollable-tab-view';
import Ticket from './Ticket';
import Introduce from './Introduce';

export default class TabSelect extends Component{
    componentDidMount(){
        InteractionManager.runAfterInteractions(()=>{
            console.log('InteractionManager....MyMessage');
        });
    }

    render(){
        const{navigator}=this.props;
        console.log('InteractionManager....render');
        return(
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#1a191f'
                    barStyle='light-content'
                    animated={true}
                    hidden={false}
                />
                {Platform.OS=='ios'?<View style={{height:15,backgroundColor:'#ce3d3a'}}/>:null}
                <ScrollableTabView
                    initialPage={0}
                    scrollWithoutAnimation={true}
                    renderTabBar={()=><ScrollableTabBar
                    underlineColor='#ce3d3a'
                    activeTextColor='#fff'
                    inactiveTextColor='rgba(255, 255, 255, 0.7)'
                    underlineHeight={0}
                    textStyle={{ fontSize: 15 }}
                    tabStyle={{ paddingBottom: 0 }}
                    backgroundColor='#ce3d3a'
                    tabStyle={{paddingLeft:12,paddingRight:12}}
                   />}
                >
                    <View tabLabel='门票' style={styles.itemLayout}>
                        <Ticket/>
                    </View>
                    <View tabLabel='特色介绍' style={styles.itemLayout}>
                        <Introduce/>
                    </View>
                </ScrollableTabView>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    itemLayout:{flex:1,alignItems:'center',justifyContent:'center'}
});
