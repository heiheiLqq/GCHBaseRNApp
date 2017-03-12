/**
 * Created by zzh on 2017/3/9.
 */
import {
    AsyncStorage,
} from 'react-native';
import {BaseApi} from '../static/config';
import queryString from 'query-string';
import _ from 'lodash';
let request={};
//设定params json对象 {}
request.get = (url ,params) =>{
    //query-string
    url = BaseApi.api.base + url;
    if(params){
        url += '?' + queryString.stringify(params)
    }

    return fetch(url).
        then((response)=> response.json())
        .then((response) => response)

};
request.post = (url,params) =>{


    url = BaseApi.api.base + url;
    // let map =
    //json对象的合并   工具：lodash

    // config.map  body 合并
    let map= _.extend(BaseApi.map,{
        body: JSON.stringify(params)
    });
    return fetch(url,map).
        then((response)=> response.json())
        .then((response) =>response)

};



module.exports = request