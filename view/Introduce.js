import React, { Component } from 'react';
import {Text, View, ScrollView} from 'react-native';
import {NavigationPage, ListRow, Label} from 'teaset';
export default class Introduce extends Component{
    render(){
        return(
            <ScrollView style={{height:80}}>
                <ListRow title=''
                         detail={'    七星景区位于桂林市区漓江东岸，漓江支流小东江畔，距市中心1.5公里。 占地面积约134.7公顷，绿化覆盖率达84%，是桂林市面积最大、历史最悠久、景致最多最集中的综合性景区。历史文化的精深博大在七星汇聚，自然与人文的完美融合在七星展现，堪称桂林山水与文化的缩影、桂林城市绿肺，集桂林山、水、洞、石、庭院、建筑、文物之大成，是桂林山水精华景观的缩影。'}
                         titlePlace='top' />
            </ScrollView>
        )
    }
}