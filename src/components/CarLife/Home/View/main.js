
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
                <NacigatorBar title="车生活"/>
                <Text style={styles.welcome}>
                    {this.props.test}
                </Text>

            </View>
        );
    }
    componentDidMount() {
        this.props.actions.carLifeRdeuxTest('My name is CarLife');
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
    },

});

