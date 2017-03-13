/**
 * Created by zzh on 2017/3/8.
 */
import Type from '../../publics/actionsType'

export default function(state = {
    test: '',
    array:[],
}, action) {


    switch(action.type) {
        case Type.TEST_TEST:
            return {...state, test: action.test};
        case Type.DATA_ARRAY:
            return {...state, array: action.array};

    }

    return state;
}