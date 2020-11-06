//   api.js
import request from '@/utils/request'

export default {
    //登录
    submitLogin(userInfo) {
        return request({
            // url: `/ucenter/member/login`,
            url: `/usermanage/user/login`,
            method: 'post',
            data: userInfo
        })
    },
    //根据token获取用户信息
    getLoginInfo() {
        return request({
            //getUserInfoOrder/{id}
            // POST /usermanage/user/auth/getLoginInfo
            // url: `/ucenter/member/auth/getLoginInfo`,
            url: `/usermanage/user/auth/getLoginInfo`,
            method: 'get',
            // headers: {'token': cookie.get('huiju_token')}
        })
    },
}