/**
 * Created by zzh on 2017/3/8.
 */
import Type from '../../publics/actionsType'

export default function(state = {loginState: false}, action) {


    switch(action.type) {
        case Type.LOGIN_STATE:
            return {...state, loginState: action.loginState};

    }

    return state;
}