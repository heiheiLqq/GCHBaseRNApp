/**
 * Created by zzh on 2017/3/9.
 */
import {
     Platform,
     Dimensions,
    AsyncStorage,
} from 'react-native';

export const DeviceInfo = {
    
    OS:Platform.OS,
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
    
}

// export  const API_BASE_URL ="http://api.gouchehui.com/YchLrestServer/api";

export const BaseApi={
    api:{
        base:'http://api.gouchehui.com/YchLrestServer/api',
    },
    map:{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'sessionid': ''
        },
        follow: 20,
        timeout: 8000,
        size: 0,
    },

};


export const BaseColor = {
    theme:'#2194fe',
    backgroundColor:'#EBEBEB',
    separaLine:'red',
}