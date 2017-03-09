/**
 * Created by zzh on 2017/3/8.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Root from './root'
export default class App extends Component {
    render() {
        return (
            <Provider store={configureStore()}>

            <Root />
            </Provider>

        );
    }
}




