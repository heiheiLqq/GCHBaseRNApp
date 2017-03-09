/**
 * Created by zzh on 2017/3/8.
 */

export default function(state = {
    test: '',
    array:[],
}, action) {


    switch(action.type) {
        case 'TEST_TEST':
            return {...state, test: action.test};
        case 'DATA_ARRAY':
            return {...state, array: action.array};

    }

    return state;
}