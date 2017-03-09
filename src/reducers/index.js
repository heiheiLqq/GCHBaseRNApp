/**
 * Created by zzh on 2017/3/8.
 */
import { combineReducers } from 'redux';

import {MainTabbarReducers} from './BaseReducers'

import {TestReducers} from './TestReducers'
import {CarServerReducers} from './CarServerReducers';
import {GouChehuiReducers} from './GouChehuiReducers';
import {CarLifeReducers} from './CarLifeReducers';
import {UserCenterReducers} from './UserCenterReducers';


const rootReducer = combineReducers({
    ...MainTabbarReducers,
    ...CarLifeReducers,
    ...CarServerReducers,
    ...GouChehuiReducers,
    ...UserCenterReducers,
    ...TestReducers
});

export default rootReducer;
