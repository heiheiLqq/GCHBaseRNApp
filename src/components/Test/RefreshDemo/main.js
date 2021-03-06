
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
        isRefreshing:state.RefreshDemoReducer.isRefreshing,
        isLoadMore:state.RefreshDemoReducer.isLoadMore,
        car:state.RefreshDemoReducer.car,
        page:state.RefreshDemoReducer.page,
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



