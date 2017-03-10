import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import NacigatorBar from '../../../../publics/components/NavigatorBar'
import Modal from 'react-native-modalbox';

import Toast from 'react-native-easy-toast'

import ActionSheet from 'react-native-actionsheet';



export default class Main extends Component {
    constructor() {
        super();

    }
    _onClose = () => {
        console.log('Modal just closed');
    }

    _onOpen = () => {
        console.log('Modal just openned');
    }
    _handlePress = (index) => {
        console.log(index);
    }

    show() {
        this.ActionSheet.show();
    }
    render(){
        return(
            <View style = {styles.bg}>
                <NacigatorBar navigator = {this.props.navigator} leftIconName = "icon_shop_local" title = 'HUDDemo'/>
                <Text style = {styles.textStyle} onPress = {() => {this.refs.toast.show('hello world!');}}>
                    消息提示
                </Text>
                <Text style = {styles.textStyle}  onPress={() => this.refs.modal.open()}>
                    弹框
                </Text>

                <Text style = {styles.textStyle}  onPress={this.show.bind(this)}>
                    sheet
                </Text>

                <Modal
                    style={styles.modal}
                    position={"center"}
                    ref={"modal"}
                    onClosed={() => {this._onClose()}}
                    onOpened={ () => {this._onOpen()}}
                >
                    <Text style={styles.text}>Modal centered</Text>
                    <Text style = {styles.textStyle} onPress={() => this.refs.modal.close()}>关闭</Text>
                </Modal>
                <ActionSheet
                    ref={(o) => this.ActionSheet = o}
                    title="确认要退出登录吗？"
                    options={['取消', '确认退出', '😄😄😄', '哈哈哈']}
                    cancelButtonIndex={0}
                    destructiveButtonIndex={1}
                    onPress={(index) => this._handlePress(index)}
                />

                <Toast ref="toast"
                       position = 'center'
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({

    bg:{
        flex:1,
        backgroundColor:'white',
    },
    textStyle:{

        height:50,
        textAlign:'center',
        lineHeight:50,
        fontSize:16,
        color:'white',
        backgroundColor:'red',
        margin:20,

    },



    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 300
    },






    btn: {
        margin: 10,
        backgroundColor: "#3B5998",
        color: "white",
        padding: 10
    },



    text: {
        color: "black",
        fontSize: 22
    }

});