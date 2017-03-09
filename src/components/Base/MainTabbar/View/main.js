/**
 * Created by zzh on 2017/3/8.
 */
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
    View,
    Image,
    Navigator,
    Platform
} from 'react-native';

import CarServers from '../../../CarServer/Home/main';
import GouChehui from '../../../GouChehui/Home/main';
import CarLife from '../../../CarLife/Home/main';
import UserCenter from '../../../UserCenter/Home/main';
import Test from '../../../Test/Home/main'

import TabNavigator from 'react-native-tab-navigator';


export default class Main extends Component {

    render() {
        return (
            <TabNavigator>
                {
                    this._renderTabbarItem('汽车服务','CarServers','icon_tabbar_homepage','icon_tabbar_homepage_selected',<CarServers {...this.props}/>)
                }
                {
                    this._renderTabbarItem('购车惠','GouChehui','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',<GouChehui {...this.props}/>)
                }
                {
                    this._renderTabbarItem('车生活','CarLife','icon_tabbar_mine','icon_tabbar_mine_selected',<CarLife {...this.props}/>)
                }
                {
                    this._renderTabbarItem('个人中心','UserCenter','icon_tabbar_misc','icon_tabbar_misc_selected',<UserCenter {...this.props}/>)
                }
                {
                    this._renderTabbarItem('测试','Test','icon_tabbar_misc','icon_tabbar_misc_selected',<Test {...this.props}/>)
                }
            </TabNavigator>
        );
    }
    
    _renderTabbarItem(itemTitle,itemsSelectedTab,itemIconNormal,itemIconSelected,itemComponent){
        return(
            <TabNavigator.Item
                selected={this.props.selectedTab === itemsSelectedTab}
                onPress={() => this.props.actions.switchMainTab(itemsSelectedTab)}
                title = {itemTitle}
                selectedTitleStyle = {styles.selectedTitleStyle}
                renderIcon={() => <Image source={{uri:itemIconNormal}} style = {styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:itemIconSelected}} style = {styles.iconStyle} />}>
                {itemComponent}
            </TabNavigator.Item>
        )

    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    iconStyle:{
        width:Platform.OS === 'ios'?30:25,
        height:25,
    },
    selectedTitleStyle:{
        color:'orange',
    }
});

