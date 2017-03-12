import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Switch,
    TextInput
} from 'react-native';

import NacigatorBar from '../../../../publics/components/NavigatorBar'
import CommenCell from '../../../../publics/components/CommenCell'

export default class Main extends Component {

    render(){
        return(
            <View style = {styles.bg}>
                <NacigatorBar navigator = {this.props.navigator} title = "NormallCellDemo" leftIconName = "icon_shop_local"/>
                <CommenCell isClick = {true} leftTitle="哈哈" leftIconName = 'avatar_vip' rightTitle="呵呵"/>
                <CommenCell cellDidClick={()=>{this._click()}} isClick = {true} leftTitle="昵称" rightTitle="黑黑"/>
                <CommenCell  leftTitleColor ='red' rightTitleColor="green" leftTitle="哈哈" leftIconName = 'avatar_vip' rightTitle="呵呵"/>

                <CommenCell isClick = {true} rightView = {<Switch />}  leftTitle="哈哈" leftIconName = 'avatar_vip' />
                <CommenCell  rightView = {<TextInput
                                                style={{width:200,height: 20,}}
                                                placeholder="Enter text to see events"
                                                editable = {true}
                                           />}
                             leftTitle="哈哈"
                              />
                <CommenCell isClick = {true} rightView = {<TestView />}  leftTitle="哈哈"  />
                <CommenCell  leftTitle="订 单 号:   G8110020720690d"   />


            </View>
        );
    }
    _click =()=>{
        alert(1);
    }

}

class TestView extends Component {
    render(){
        return(
          <View style = {{flexDirection:'row'}}>
              <View style = {{backgroundColor:'red',height:20,width:40 ,marginRight:10}}></View>
              <View style = {{backgroundColor:'red',height:20,width:40,marginRight:10}}></View>
              <View style = {{backgroundColor:'red',height:20,width:40,marginRight:10}}></View>
          </View>
        );
    }
}

const styles = StyleSheet.create({

   bg:{
       flex:1,
       backgroundColor:'white',
   }
});