/**
 * Created by zzh on 2017/3/8.
 */

/**
 * Created by zzh on 2017/3/8.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import NacigatorBar from '../../../../publics/components/NavigatorBar'

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NacigatorBar title = '购车惠' />
                <View style = {{height:10}}></View>
                <NacigatorBar title = '两边是图片' navigator = {this.props.navigator}  rightIconName = "icon_mine_setting" leftIconName = "icon_shop_local" />
                <View style = {{height:10}}></View>
                <NacigatorBar title = '两边是文字'  leftTextName = "呵呵" rightTextName = "哈哈"/>
                <View style = {{height:10}}></View>
                <NacigatorBar title = '两边是图标和文字' rightTextName = "呵呵" leftTextName = "哈哈" rightIconName = "icon_mine_setting" leftIconName = "icon_shop_local"/>

            </View>
        );
    }
    componentDidMount() {
        this.props.actions.gouCheHuiRdeuxTest('My name is GouChehui');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#EBEBEB',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});

