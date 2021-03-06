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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Root,
} from './View';

import Actions from '../../../actions';

class Main extends Component {
    
    render() {
        return (
           <Root {...this.props}/>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedTab: state.MainTabbarReducer.selectedTab
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);



