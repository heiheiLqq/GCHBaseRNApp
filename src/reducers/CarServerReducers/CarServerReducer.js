/**
 * Created by zzh on 2017/3/8.
 */
/**
 * Created by zzh on 2017/3/8.
 */

export default function(state = {test: ''}, action) {


    switch(action.type) {
        case 'CAR_SERVER_TEST':
            return {...state, test: action.test};

    }

    return state;
}