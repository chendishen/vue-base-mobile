import Axios from 'axios';
import ApiList from '../config/api.conf';

const RequestUrl = {
    apiUrl: 'http://newhuiliao.ghm100.com/MEDICAL-SERVICE'
    // apiUrl: 'http://dev.demo.com'
    // apiUrl: 'http://pro.demo.com'
    // apiUrl: 'http://demo.com'
};

/**
 * 数据请求参数
 * @param requestObj Object 请求体
 * @param callBack function 回调函数
 * @return 请求结果
 */
let request = (request, data, callBack) => {
    console.log(ApiList[request])
    Axios({
        method: ApiList[request].method,
        url:  RequestUrl.apiUrl + ApiList[request].path,
        header: {

        },
        data: data
    })
    .then(function (response) {
        console.log(response)
        return Promise.resolve(response)
        // let result = response;
        // return callBack(result);
    })
    .catch(function (error) {
        console.log(error)
        const httpError= {
          hasError:true,
          status:error.response.status,
          statusText:error.response.statusText
        }
        store.commit('ON_HTTP_ERROR', httpError)
        return Promise.reject(error)
    })
    ;
};

export default request;
