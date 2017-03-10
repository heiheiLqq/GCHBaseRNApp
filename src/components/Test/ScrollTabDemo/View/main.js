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
    StyleSheet,
    View,
    Text,

} from 'react-native';
import NacigatorBar from '../../../../publics/components/NavigatorBar'

import ScrollableTabView ,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';

export default class Main extends Component {

    render (){
        return (
            <View style = {styles.containr}>
                <NacigatorBar title = "ScrollTabDemo" navigator = {this.props.navigator}  leftIconName = "icon_shop_local"/>
                <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarPosition="top"
                    onChangeTab = {(obj)=>{this._onChangeTab(obj)}}
                    onScroll = {(obj =>{this._onScroll(obj)})}
                    initialPage = {1}
                >
                    <View tabLabel="React" >
                        <Text>React</Text>
                    </View>
                    <View tabLabel="Flow" >
                        <Text>Flow</Text>
                    </View>
                    <View tabLabel="Jest" >
                        <Text>Jest</Text>
                    </View>
                </ScrollableTabView>
            </View>

        )
    }
    _onChangeTab = (obj) =>{
        console.log(obj);

    }
    _onScroll = (obj) =>{
        console.log(obj)
    }

}

const styles = StyleSheet.create({
    containr:{
        flex:1,
        backgroundColor:'white',
    }
});

