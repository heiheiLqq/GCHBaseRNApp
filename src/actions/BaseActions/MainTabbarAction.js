/**
 * Created by zzh on 2017/3/8.
 */

import Type from '../../publics/actionsType'

export function switchMainTab(selectedTab) {

    return {
        type: Type.SELECTED_TAB_BAE,
        selectedTab: selectedTab
    }
}