/**
 * Created by zzh on 2017/3/8.
 */
export default function(state = {loginState: false}, action) {


    switch(action.type) {
        case 'LOGIN_STATE':
            return {...state, loginState: action.loginState};

    }

    return state;
}