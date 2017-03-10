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
import Drawer from 'react-native-drawer'
import  {DeviceInfo} from '../../../../publics/static/config'
export default class Main extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <View style={styles.container}>
                <NacigatorBar navigator = {this.props.navigator}  leftIconName = "icon_shop_local" title = '刷新Demo'/>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    side="right"
                    type="overlay"
                    content={<ControlPanel press = {() => this._closeControlPanel()} />}
                    tapToClose={true}
                    openDrawerOffset={0.2}
                    tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 }})}
                    onClose={()=>{this._drawDidClose()}}
                    styles={{
                            drawer: { shadowColor: '#000000', shadowOpacity: 0.5, shadowRadius: 3},
                            main: {backgroundColor:"#EBEBEB"},
                    }}
                >
                    <MainView press = {() => this._openControlPanel()} />
                </Drawer>
            </View>
        );
    }
    _closeControlPanel = () => {
        this._drawer.close()
    };
    _openControlPanel = () => {
        this._drawer.open()
    };
    _drawDidClose = () => {
        console.log('11');
    }

}

class MainView extends Component{

    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.welcome} onPress = {() => {this.props.press()}}>
                    弹出
                </Text>
            </View>
        )

    }

}
class ControlPanel extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.welcome} onPress = {() => {this.props.press()}}>
                    收
                </Text>
            </View>
        )

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
        padding:5,
        backgroundColor:'red'
    },

});

