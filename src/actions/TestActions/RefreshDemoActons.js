/**
 * Created by zzh on 2017/3/9.
 */
// import {BaseApi} from '../../publics/static/config';
import request from '../../publics/tool/request'

//获取免费看低价列表

export function getFreeCarSource(item) {
    return dispatch => {

        if(item.pageNumber ==1){
            dispatch(fetchFreePrice(item.car,true,false,item.pageNumber));

        }else{
            dispatch(fetchFreePrice(item.car,false,true,item.pageNumber));
        }

        var _params = {"query":{"pagenum":"10","page":item.pageNumber}};

        return request.post('/mobile/indexCarPrice/findCarPriceByQuery',_params)
            .then(
            (responseJson)=>{
                if(responseJson.code == 0){

                    if(item.pageNumber ==1){

                        dispatch(fetchFreePrice(responseJson.data.rows,false,false,item.pageNumber));

                    }else{

                        var arr1 = responseJson.data.rows;
                        var arr2 = item.car;
                        item.car = arr2.concat(arr1);
                        dispatch(fetchFreePrice(item.car,false,false,item.pageNumber));

                    }

                }

            }

        ).catch(
            (err) => {
                console.error(err);
            }
        )


    }
}
function fetchFreePrice(car,isRefreshing,isLoadMore,page ) {
    return {
        type: 'DEMO_REFRESH',
        car,
        isRefreshing,
        isLoadMore,
        page,
    }
}