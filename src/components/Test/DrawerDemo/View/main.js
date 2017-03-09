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

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NacigatorBar title = 'Draw'/>
                <Text style={styles.welcome}>
                    点我
                </Text>

            </View>
        );
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

