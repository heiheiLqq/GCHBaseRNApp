/**
 * Created by zzh on 2017/3/8.
 */
import Type from '../../publics/actionsType'

export default function(state = {test: ''}, action) {


    switch(action.type) {
        case Type.USERCENTER_TEST:
            return {...state, test: action.test};

    }

    return state;
}