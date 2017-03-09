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
    Image,
    ScrollView,
    Alert,
    ListView,
    Dimensions,
    TouchableOpacity,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';
import NacigatorBar from '../../../../publics/components/NavigatorBar'

import {DeviceInfo} from '../../../../publics/static/config'
let cellWidth = ( DeviceInfo.WIDTH-1)/2
export default class Main extends Component {
    constructor(props) {
        super(props);


        this._renderRow = this._renderRow.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
        this._toEnd = this._toEnd.bind(this);
        this._renderFooter = this._renderFooter.bind(this);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
    }
    componentDidMount() {
        this._onRefresh();
    }
    render(){

        const { car,isRefreshing,navigator} = this.props;

        return(
            <View style = {{backgroundColor:'white'}}>
                <NacigatorBar navigator = {navigator} rightIconName = "icon_mine_setting" leftIconName = "icon_shop_local" title = '刷新Demo'/>
                <ListView //创建ListView
                    dataSource={this.dataSource.cloneWithRows(car)} //设置数据源
                    renderRow={this._renderRow} //设置cell
                    contentContainerStyle={styles.listViewStyle}//设置cell的样式
                    onEndReached={ this._toEnd }
                    onEndReachedThreshold={10}
                    renderFooter={ this._renderFooter }
                    enableEmptySections = {true}
                    removeClippedSubviews={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={this._onRefresh}
                            tintColor="gray"
                            title="Loading..."
                            titleColor="gray"
                            colors={['#ff0000', '#00ff00', '#0000ff']}
                            progressBackgroundColor="#ffff00"
                        />}
                />
            </View>
            )
    }
    _renderRow(rowData,sectionID,rowID,highlightRow){

        if(rowData.carImage == null){
            rowData.carImage=undefined;
        }

        return(
            <TouchableOpacity style={rowID%2==0?[styles.cellTouch]:[styles.cellTouch,{marginLeft:1}]}>
                <View style={[styles.bgStyle]}>
                    <Image style={{width:150,height:100}} source={{ uri: rowData.carImage}}/>
                    <Text style={{height:20,width:cellWidth-20}}>{rowData.brandName}{rowData.carModelName}</Text>
                    <Text  numberOfLines={1} style={{height:20,width:cellWidth-20,color:'orange'}}>{rowData.carName}</Text>
                    <View style={{height:20,width:cellWidth-20,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text>底价<Text style={{color:'red'}}>{rowData.lowPrice/10000}万</Text></Text><Text style={{color:'red'}}><Text style={{color:'white',backgroundColor:'red'}}>省</Text>{rowData.discount/10000}万</Text>
                    </View>
                    <Image style={{width:40,height:25,position:'absolute',top:5,left:5}} source={{ uri: rowData.brandImage}}/>

                </View>
            </TouchableOpacity>

        )
    }
    _renderFooter() {

        const { isLoadMore,isRefreshing} = this.props;

        if( isLoadMore && (!isRefreshing)){
            return(
                <View style={styles.footer}>
                    <ActivityIndicator
                        animating={true}
                        color="gray"
                    />
                    <Text style={styles.footerTitle}>正在加载更多……</Text>
                </View>
            )

        }

    }
    _onRefresh() {


        const { actions,car} = this.props;


        var pageNumber = 1;

        actions.getFreeCarSource({pageNumber,car});
    }
    _toEnd(){


        const {isLoadMore, actions,car,page,isRefreshing} = this.props;
        if(isRefreshing || car.length<10)return;

        var pageNumber = page+1

        actions.getFreeCarSource({pageNumber,car});
    }


}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width:DeviceInfo.WIDTH
    },
    footerTitle: {
        marginLeft: 10,
        fontSize: 15,
        color: 'gray'
    },


    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },


    listViewStyle:{
        flexDirection:'row', //设置横向布局
        flexWrap:'wrap'    //设置换行显示
    },
    bgStyle:{
        backgroundColor:'white',
        width:cellWidth, //cell的宽度
        height:170,
        padding:10,
        alignItems:'center',

        justifyContent:"center",
        position:'relative'
    },

    cellTouch:{
        width:cellWidth, //cell的宽度
        height:170,
        marginTop:1,
    }

});

