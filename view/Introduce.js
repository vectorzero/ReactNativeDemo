import React, { Component } from 'react';
import {Text, View, ScrollView} from 'react-native';
import {NavigationPage, ListRow, Label} from 'teaset';

export default class Introduce extends Component{
    renderListRow(detail){
        if(detail=='detail1'){
            return(
                <ListRow 
                    title=''
                    detail={'    七星景区位于桂林市区漓江东岸，漓江支流小东江畔，距市中心1.5公里。 占地面积约134.7公顷，绿化覆盖率达84%，是桂林市面积最大、历史最悠久、景致最多最集中的综合性景区。历史文化的精深博大在七星汇聚，自然与人文的完美融合在七星展现，堪称桂林山水与文化的缩影、桂林城市绿肺，集桂林山、水、洞、石、庭院、建筑、文物之大成，是桂林山水精华景观的缩影。'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail2'){
            return(
                <ListRow 
                    title=''
                    detail={'    桂林漓江风景区xxxxxx'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail3'){
            return(
                <ListRow 
                    title=''
                    detail={'    北海海洋之窗坐落于我国富饶美丽的北海湾之滨，景区占地2.1公顷，建筑面积18,100平方米，由神秘的大海、远古海洋、时光隧道、珊瑚海、海之角、梦幻海洋、海洋资源厅、海上丝绸之路、郑和下西洋、地理大发现、海洋剧场、滨海景观、水母宫、贝类文化、南珠文化、4D动感影院共十六大主题组成。'}
                    titlePlace='top' 
                />
            )
        }else if(detail=='detail4'){
            return(
                <ListRow 
                    title=''
                    detail={'    北海银滩被列为国家级旅游度假区，为中国的35个“王牌景点”之一，享有“天下第一滩”的美誉。她东西绵延24公里，以滩长平、沙细白、水温净、浪柔软、无鲨鱼、无污染的特点称奇于世。银滩位于北海南部海滨，距市区8公里。银滩长24公里，一年中可有9个月时间下海。在阳光的照射下，沙滩会泛出银光，故称银滩，以滩平、沙白、水净、浪柔等特点，被喻为"中国第一滩"。银滩景区主要分为银滩公园和海滩公园。'}
                    titlePlace='top' 
                />
            )
        }
    }
    render(){
        return(
            <ScrollView style={{height:80}}>
                {this.renderListRow(this.props.senceDetail)}
            </ScrollView>
        )
    }
}