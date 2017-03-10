/**
 * Sample React Native App
 * 用于处理  根据是否登录去展示不同的页面
 */

import React, { Component } from 'react';
import {
    Navigator,
    Platform,
    BackAndroid,
    ToastAndroid,
} from 'react-native';
import MainTabbar from './components/Base/MainTabbar/main';
import RefreshDemo from './components/Test/RefreshDemo/main';
import HeaderDemo from './components/Test/HeaderDemo/main';
import DrawerDemo from './components/Test/DrawerDemo/main';
import ScrollTabDemo from './components/Test/ScrollTabDemo/main';
import BannerDemo from './components/Test/BannerDemo/main';
import HUDDemo from './components/Test/HUDDemo/main';


const ROUTES = {
    MainTabbar,
    RefreshDemo,
    HeaderDemo,
    DrawerDemo,
    ScrollTabDemo,
    BannerDemo,
    HUDDemo
}

export default class Root extends Component {
    render() {
        let rootViewName = 'MainTabbar';
        let rootComponent = MainTabbar;

        return (
            <Navigator
                initialRoute = {{ name: rootViewName, component: rootComponent }}
                ref="navigator"
                renderScene={this._renderScene}
                configureScene={this._configureScene}/>
        );
    }
    _renderScene = (route, navigator) => {
        let Scene = ROUTES[route.name];
        switch (route.name){
            case 'MainTabbar':
                return <Scene {...route.params}  navigator={navigator} />;
            case 'RefreshDemo':
                return <Scene {...route.params}  navigator={navigator} />;
            case 'HeaderDemo':
                return <Scene {...route.params}  navigator={navigator} />;
            case 'DrawerDemo':
                return <Scene {...route.params}  navigator={navigator} />;
            case 'ScrollTabDemo':
                return <Scene {...route.params}  navigator={navigator} />;
            case 'BannerDemo':
                return <Scene {...route.params}  navigator={navigator} />;
            case 'HUDDemo':
                return <Scene {...route.params}  navigator={navigator} />;


        }
    }
    _configureScene = (route, routeStack) => {
        switch (route.name){
            default:
                return Navigator.SceneConfigs.PushFromRight;
        }
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
            // BackAndroid.addEventListener('sss',this.onBackAndroid,true);
        }
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        const navigator = this.refs.navigator;
        const routers = navigator.getCurrentRoutes();
        console.log('当前路由长度：' + routers.length);
        if (routers.length > 1) {
            navigator.pop();
            return true;//接管默认行为
        } else {

            //到了主页了
            if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
                //最近2秒内按过back键，可以退出应用。
                return false;
            }
            this.lastBackPressed = Date.now();
            ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
            return true;
        }
        // return false;//默认行为

    };

}
