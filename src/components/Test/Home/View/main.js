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
    ListView,
    TouchableOpacity
} from 'react-native';
import NacigatorBar from '../../../../publics/components/NavigatorBar'

import {DeviceInfo} from '../../../../publics/static/config'
import RefreshDemo from'../../RefreshDemo/main'
import HeaderDemo from'../../HeaderDemo/main'

import DrawerDemo from'../../DrawerDemo/main'

export default class Main extends Component {

    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);

        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }
    render() {
        return (
            <View >
                <NacigatorBar title = '测试'/>
                <ListView
                    style = {{marginTop:20}}
                    dataSource={this.dataSource.cloneWithRows(this.props.array)}
                    renderRow={this._renderRow}
                    enableEmptySections={true}
                />
            </View>

        );
    }
    componentDidMount() {

        this.props.actions.downLoadData(['列表Demo','HeaderDemo','react-native-drawer','react-native-scrollable-tab-view','react-native-swiper']);
    }
    _renderRow(rowData, sectionID, rowID, highlightRow){
        return(
            <TouchableOpacity onPress = {()=>this._click(rowID)}>
                <View style = {styles.cell}>
                    <Text>{rowData}</Text>
                </View>
            </TouchableOpacity>
        );

    }
    _click = (rowID) =>{

        const navigator = this.props.navigator;
        if (navigator) {
            if(rowID == 0){
                navigator.push({
                    name: 'RefreshDemo',
                    component: RefreshDemo,
                    
                });
            }else if (rowID == 1){
                navigator.push({
                    name: 'HeaderDemo',
                    component: HeaderDemo,

                });

            }else if (rowID == 2){
                navigator.push({
                    name: 'DrawerDemo',
                    component: DrawerDemo,

                });

            }

        }
    }
}

const styles = StyleSheet.create({

    cell:{
        width:DeviceInfo.width,
        height:44,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    }
});

