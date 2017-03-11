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
    Text,
    View,
    Image,
    TouchableOpacity,

} from 'react-native';

import {DeviceInfo} from '../static/config'

export default class CommenCell extends Component {
    static defaultProps = {
        isClick:false,
        leftTitle:'',
        leftIconName:'',
        rightTitle:'',
        cellDidClick:function() {
            
        },
        leftTitleColor:'#666666',
        rightTitleColor:'#999999',
        rightView:null,

    };
    render() {
        if(this.props.isClick){
            //可以点击
            return(
                <TouchableOpacity onPress = {() => {this.props.cellDidClick()}} style = {styles.container}>
                    {this._renderLeftView()}
                    {this._renderRightView()}
                </TouchableOpacity>
            );
        }else{
            //不可以点击
            return(
                <View style = {styles.container}>
                    {this._renderLeftView()}
                    {this._renderRightView()}
                </View>
            );
        }
    }
    _renderLeftView(){

        if(this.props.leftIconName.length == 0){
            //左边没图片
            return(
                <View style = {styles.leftViewStyle}>
                    <Text style = {[styles.leftTitleStyle,{color:this.props.leftTitleColor}]}>{this.props.leftTitle}</Text>
                </View>
            );
        }else{
            //左边有图片
            return(
                <View style = {styles.leftViewStyle}>
                    <Image resizeMode = "contain" style = {styles.leftImgStyle} source={{uri:this.props.leftIconName}} />
                    <Text style = {[styles.leftTitleStyle,{color:this.props.leftTitleColor}]}>{this.props.leftTitle}</Text>
                </View>
            );
        }


    }

    _renderRightView(){

        if(this.props.isClick){
            //可以点击
            return(
                <View style = {styles.rightViewStyle}>
                    <Image resizeMode = "contain" style = {styles.rightImgStyle} source={{uri:'icon_cell_rightArrow_disabled'}} />
                    <Text style = {[styles.rightTitleStyle,{color:this.props.rightTitleColor}]}>{this.props.rightTitle}</Text>
                    {this.props.rightView}
                </View>
            );
        }else{
            //不可以点击
            return(
                <View style = {styles.rightViewStyle}>
                    <Text style = {[styles.rightTitleStyle,{color:this.props.rightTitleColor},{marginRight:10}]}>{this.props.rightTitle}</Text>
                    {this.props.rightView}
                </View>
            );
        }

        return(
            <View style = {styles.rightViewStyle}>
                <Image resizeMode = "contain" style = {styles.rightImgStyle} source={{uri:'icon_cell_rightArrow_disabled'}} />
                <Text style = {styles.rightTitleStyle}>{this.props.rightTitle}</Text>
            </View>
        );
    }



}

const styles = StyleSheet.create({
    container: {
        // 主轴的方向
        flexDirection:'row',
        // 主轴的对齐方式
        justifyContent:'space-between',
        // 背景颜色
        backgroundColor:'white',
        // 垂直居中
        alignItems:'center',
        // 高度
        height:DeviceInfo.OS == 'ios' ? 40 : 36,

        // 下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5,
    },
    leftViewStyle:{
        // 主轴的方向
        flexDirection:'row',
        // 侧轴居中
        alignItems:'center',
        // 左外边距
        marginLeft:10
    },

    rightViewStyle:{
        flexDirection:'row-reverse',
        // 侧轴居中
        alignItems:'center',
        marginRight:8

    },
    leftImgStyle:{ // 左边的图片
        width:24,
        height:24,
        marginRight:6,
        // 圆角
        borderRadius:12
    },

    leftTitleStyle:{
        fontSize:16
    },
    rightImgStyle:{ // 左边的图片
        width:24,
        height:13,
        // 圆角
    },

    rightTitleStyle:{
        fontSize:16
    }

});

