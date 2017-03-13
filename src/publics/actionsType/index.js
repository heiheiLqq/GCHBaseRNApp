/**
 * Created by zzh on 2017/3/13.
 */
import  * as BaseAtionsType from './BaseActionsType';

import  * as CarServerActionsType from './CarServerActionsType';

import * as CarLifeActionsType from './CarLifeActionsType';

import * as UserCenterActionsType from './UserCenterActionsType';

import * as TestActionsType from './TestActionsType';

import * as GouChehuiActionsType from './GouChehuiActionsType';


export default {

    ...BaseAtionsType,
    ...CarServerActionsType,
    ...CarLifeActionsType,
    ...UserCenterActionsType,
    ...TestActionsType,
    ...GouChehuiActionsType
}