import axios from 'axios'
import cookie from 'js-cookie' // 创建axios实例
const service = axios.create({
    // api 的 base_url 
    baseURL: 'http://172.18.1.101:8222',
    timeout: 5000
    // 请求超时时间 
}) // http request 拦截器
service.interceptors.request.use(config => { //debugger 
    if (cookie.get('huiju_token')) {
        console.log(cookie.get('huiju_token'))
        config.headers['token'] = cookie.get('huiju_token');
    }
    return config
}, err => {
    return Promise.reject(err);
})
// http response 拦截器//25000：订单支付中，不做任何提示
service.interceptors.response.use(response => {
    console.log(response)
    return response
}, error => {
    return Promise.reject(error.response) // 返回接口返回的错误信息
});
export default service