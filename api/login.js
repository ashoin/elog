//   api.js
import request from '@/utils/request'


export default {

    //根据token获取用户信息
    getLoginInfo() {
        return request({
            // url: `/ucenter/member/auth/getLoginInfo`,
            url: `/usermanage/user/auth/getLoginInfo`,
            method: 'get',
        })
    },

    //登录
    submitLogin(userInfo) {
        return request({
            // url: `/ucenter/member/login`,
            url: `/usermanage/user/login`,
            method: 'post',
            data: userInfo
        })
    },

    // 查找用户地址
    userAddress(id) {
        return request({
            url: `/usermanage/user-address/getDefaultAddr/${id}`,
            method: 'get',
        })
    }

}