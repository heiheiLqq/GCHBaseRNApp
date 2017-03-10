import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import NacigatorBar from '../../../../publics/components/NavigatorBar'
import Swiper from 'react-native-swiper';
import {DeviceInfo} from '../../../../publics/static/config'
export default class Main extends Component {

    render(){
        return(
            <View style = {styles.container}>
                <NacigatorBar navigator = {this.props.navigator}  leftIconName = "icon_shop_local" title = 'BannerDemo'/>
                <Swiper
                    style={styles.wrapper}
                    height ={200}
                    showsButtons={false}
                    index = {1}
                    autoplay = {true}
                    loop = {true}
                    showsPagination = {true}
                >
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    wrapper: {

    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }

});