/**
 * Created by zzh on 2017/3/9.
 */
/**
 * Created by zzh on 2017/3/8.
 */
import Type from '../../publics/actionsType'

export default function(state = {
    isRefreshing: false,
    isLoadMore: false,
    car: [],
    page:1,
}, action) {


    switch(action.type) {
        case Type.DEMO_REFRESH:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                isLoadMore: action.isLoadMore,
                car: action.car,
                page:action.page,

            });

    }

    return state;
}