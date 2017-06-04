import React, {Component, PropTypes} from 'react';
import { View, ScrollView, Text} from 'react-native';
import {Select, Label, ListRow,Input,Button,ActionSheet,Theme,NavigationBar,Toast} from 'teaset';
Theme.set({
    navColor: 'red'
});

export default class PayPage extends Component{
    constructor(props) {
        super(props);
        this.items = [
            '支付宝',
            '微信支付',
            '抵消币'
        ];
        this.state={
            valueSelect: '',
            valueInput: ''
        };
    }
    show(modal) {
        let items = [
            {title: '确认', onPress: () => {Toast.message('支付成功'),this.props.changeTickets()}}
        ];
        let cancelItem = {title: '取消'};
        ActionSheet.show(items, cancelItem, {modal});
    }
    render() {
        return (
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
                        onPress={() => this.show(true)}
                />
            </View>
        );
    }
}
