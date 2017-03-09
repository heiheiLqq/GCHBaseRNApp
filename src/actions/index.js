/**
 * Created by zzh on 2017/3/8.
 */
import {BaseActions} from './BaseActions';
import {CarLifeActions} from './CarLifeActions';
import {CarServerActions} from './CarServerActions';
import {GouChehuiActions} from './GouChehuiActions';
import {UserCenterActions} from './UserCenterActions';
import {TestActions} from './TestActions';


export default {
    ...BaseActions,
    ...CarLifeActions,
    ...CarServerActions,
    ...GouChehuiActions,
    ...UserCenterActions,
    ...TestActions

};