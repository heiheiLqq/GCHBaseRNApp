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

const ROUTES = {
    MainTabbar: MainTabbar,
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
        if (routers.length > 2) {
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
