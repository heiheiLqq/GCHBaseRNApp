/**
 * Created by zzh on 2017/3/8.
 */
export default function(state = {selectedTab: 'CarServers'}, action) {


    switch(action.type) {
        case 'SELECTED_TAB_BAE':
            return {...state, selectedTab: action.selectedTab};

    }

    return state;
}