/**
 * @description axios二次封装（请求延时时间，拦截器等）
 * @author zhouej
 * @date 2020/04/02
 */
import axios from 'axios';
import router from '../../router';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';

const services = axios.create({
    timeout: 120000, // 请求延时时间
    withCredentials: false
});

// 需要忽略掉的请求参数，可根据实际需要更改
const ignoreParams = [null, undefined, ""];

// status -> message
const ERROR_MAPPING_MESSAGE = {
    400: '错误请求',
    401: '未授权，请重新登录',
    403: '抱歉，你无权访问该页面',
    404: '请求资源不存在',
    405: '请求方法未允许',
    408: '请求超时',
    500: '服务器错误',
    501: '网络未实现',
    502: '网络错误',
    503: '服务不可用',
    504: '网络超时',
    505: 'http版本不支持该请求'
};

// 请求拦截器
services.interceptors.request.use(config => {
    // 去掉需要忽略的请求参数（数据）
    let _configParams = config.params,
        _params = {};
    for (var column in _configParams) {
        if (ignoreParams.every(item => item !== _configParams[column])) {
            _params[column] = _configParams[column];
        }
    }
    config.params = _params;

    // 除了登陆页面传userId给后台
    // if (config.url.indexOf("login") < 0) {
    //     let userId = sessionStorage.getItem("userId");
    //     config.headers['X-XSRF-TOKEN'] = userId;
    // }
    return config;
}, err => {
    return Promise.reject(err);
});

// 跳转失败页面的状态
const failTest = {
    404: {
        failTitle: '404',
        failContent: '请求资源不存在',
        path: ''
    },
    403: {
        failTitle: '403',
        failContent: '抱歉，你无权访问该页面'
    },
    500: {
        failTitle: '500',
        failContent: '服务器错误',
        path: '',
        warnMsg: ''
    }
}

// 响应拦截器
services.interceptors.response.use(config => {
    let _errorCode = config.data.errorCode;
    _errorMsg = config.data.errorMsg;
    _url = config.data.url;
    if (_errorCode === '0001' || _errorCode === '0002') {
        failTest['500'].warnMsg = _errorMsg;
        failTest['500'].path = _url;
        router.push({
            name: "failReason",
            params: {
                reason: failTest['500']
            }
        });
    } else if (_errorCode === '0003') {
        message.warning(_errorMsg)
        sessionStorage.removeItem('username');
        router.push({
            name: 'login'
        })
    } else {
        return config.data;
    }
}, err => {
    let _message = "连接到服务器失败",
        _failCode = 0;
    if (err && err.response) {
        _message = ERROR_MAPPING_MESSAGE[`${err.response.status}`];
        _failCode = err.response.status; //http状态码
        // 对一些特殊的code进行判断
        _path = err.response.config.url;
        _other = err.response.statusText;
        if (_failCode === 404) {
            failTest['404'].path = _path;
            router.push({
                name: "failReason",
                params: {
                    reason: failTest['404']
                }
            });
        } else if (_failCode === 500) {
            failTest['500'].warnMsg = _other;
            failTest['500'].path = _path;
            router.push({
                name: "failReason",
                params: {
                    reason: failTest['500']
                }
            });
        }
    }
    return Promise.resolve({
        errorCode: _failCode,
        data: {},
        errorMsg: _message
    });
});

export default services;