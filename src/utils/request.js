import axios from 'axios'
import cookie from 'js-cookie' // 创建axios实例
import router from '../router/index'
const service = axios.create({
    // api 的 base_url http://192.168.1.52:8080/
    baseURL: 'http://192.168.1.52:8222',
    timeout: 5000
    // 请求超时时间 
}) // http request 拦截器
service.interceptors.request.use(config => { //debugger 
    if (cookie.get('huiju_token')) {
        config.headers['token'] = cookie.get('huiju_token');
    }
    return config
}, err => {

    return Promise.reject(err);
})
// http response 拦截器
service.interceptors.response.use(res => {
    return res.status === 200 ? Promise.resolve(res) : Promise.reject(res)
}, error => {
    const {
        response
    } = error;

    if (response) {
        errorHandle(response.status, response.data.message);
        return Promise.reject(response)
    } else {
        router.push({
            name: 'Refresh'
        })
    }
});
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        // 401: 未登录状态，跳转登录页
        case 401:
            toLogin();
            break;
            // 403 token过期
            // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
            // 404请求不存在
        case 404:
            tip('请求的资源不存在');
            break;
            /*case 500:
              store.commit('changeNetworkSuccess', false);
              tip('网络异常!');
              router.push({path:'refresh'})*/

    }
}

export default service