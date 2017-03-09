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
    TouchableOpacity
} from 'react-native';
import {BaseColor} from '../static/config'
import {DeviceInfo} from '../static/config'

export default class NavigatorBar extends Component {
    static defaultProps = {
        title: '',
        leftIconName: '',
        rightIconName: '',
        navigator:null,
        leftItemClick:function() {
            if(this.navigator){
                this.navigator.pop();
            }
        },
        rightItemClick:function() {

        },
        leftTextName: '',
        rightTextName: '',


    };
    render() {
        return (
            <View style={styles.navOutViewStyle}>
                {this._renderLeftView()}
                <Text style = {styles.title}>{this.props.title}</Text>
                {this._renderRightView()}
            </View>
        );
    }
    _renderRightView(){
        if (this.props.rightIconName.length == 0 && this.props.rightTextName.length == 0){
            //右边没有图片也没有文字
            return;
        } else if (this.props.rightIconName.length > 0 && this.props.rightTextName.length == 0){
            //右边只有图片
            return(
                <TouchableOpacity onPress={()=>{this.props.rightItemClick}} style={styles.rightViewStyle}>
                    <Image source={{uri: this.props.rightIconName}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            );
        } else if (this.props.rightIconName.length == 0 && this.props.rightTextName.length > 0){
            //右边只有文字
            return(
                <TouchableOpacity onPress={()=>{this.props.rightItemClick}} style={styles.rightViewStyle}>
                    <Text style = {styles.navRightTextStyle}>{this.props.rightTextName}</Text>
                </TouchableOpacity>
            )
        }else{
            //右边文字图片都有
            return (
                <TouchableOpacity onPress={()=>{this.props.rightItemClick}} style={styles.rightViewStyle}>
                    <Text style = {styles.navRightTextStyle}>{this.props.rightTextName}</Text>
                    <Image source={{uri: this.props.rightIconName}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            )
        }

    }
    _renderLeftView(){

        if (this.props.leftIconName.length == 0 && this.props.leftTextName.length == 0) {
            //左边没有图片也没有文字
            return;
        }else if (this.props.leftIconName.length > 0 && this.props.leftTextName.length == 0){

            //左边只有图片 没有文字
            return(
                <TouchableOpacity onPress={()=>{this.props.leftItemClick()}} style={styles.leftViewStyle}>
                    <Image source={{uri: this.props.leftIconName}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            );
        }else if (this.props.leftIconName.length == 0 && this.props.leftTextName.length > 0){
            //左边只有文字没有图片
            return(
                <TouchableOpacity onPress={()=>{this.props.leftItemClick()}} style={styles.leftViewStyle}>
                    <Text style = {styles.navLeftTextStyle}>{this.props.leftTextName}</Text>
                </TouchableOpacity>
            );
        }else{
            //左边文字图片都有
            return(
                <TouchableOpacity onPress={()=>{this.props.leftItemClick()}} style={styles.leftViewStyle}>
                    <Image source={{uri: this.props.leftIconName}} style={styles.navImageStyle}/>
                    <Text style = {styles.navLeftTextStyle}>{this.props.leftTextName}</Text>
                </TouchableOpacity>
            );

        }


    }

    
}

const styles = StyleSheet.create({
    navOutViewStyle: {
        backgroundColor:BaseColor.theme,
        height:DeviceInfo.OS === 'ios'?64:44,
        // 设置主轴的方向
        flexDirection:'row',
        // 垂直居中 ---> 设置侧轴的对齐方式
        alignItems:'center',
        // 主轴方向居中
        justifyContent:'center',
    },
    title: {
        color:'white',
        fontSize:16,
        fontWeight:'bold',
    },
    navImageStyle:{
        width:DeviceInfo.OS == 'ios' ? 28: 24,
        height:DeviceInfo.OS == 'ios' ? 28: 24,
    },

    leftViewStyle:{
        // 绝对定位
        position:'absolute',
        left:10,
        bottom:DeviceInfo.OS == 'ios' ? 15:13,
        flexDirection:'row'
    },
    navLeftTextStyle:{
        marginLeft:5,
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        height:DeviceInfo.OS == 'ios' ? 28: 24,
        lineHeight:DeviceInfo.OS == 'ios' ? 28: 24,
    },

    rightViewStyle:{
        // 绝对定位
        position:'absolute',
        right:10,
        bottom:DeviceInfo.OS == 'ios' ? 15:13,
        flexDirection:'row'

    },
    navRightTextStyle:{
        marginRight:5,
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        height:DeviceInfo.OS == 'ios' ? 28: 24,
        lineHeight:DeviceInfo.OS == 'ios' ? 28: 24,
    }

});

