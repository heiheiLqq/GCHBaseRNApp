
import {
    AsyncStorage,
} from 'react-native';
import {BaseApi} from '../../publics/static/config'

import request from '../../publics/tool/request'

import Type from '../../publics/actionsType'


export function loginState(loginState) {

    return {
        type: Type.LOGIN_STATE,
        loginState: loginState
    }
}


export function logIn() {
    return dispatch => {

        return request.post('/nl/mobile/login/auth/mobileVoidLogin')
            .then(
                (responseJson)=>{

                    // console.log(responseJson.data.session.sessionid);

                    var keyName = 'USER_SESSION';
                    var keyValue = responseJson.data.session.sessionid;
                    AsyncStorage.setItem(keyName,keyValue,function(errs){

                        if (!errs) {
                            console.log('存储成功');
                        }else{
                            console.log('存储错误');

                        }
                    });
                    BaseApi.map.headers.sessionid = keyValue;

                    dispatch(loginState(true));

                }

            ).catch(
                (err) => {
                    dispatch(loginState(false));
                }
            )


    }
}