import request from '@/utils/request'
import cookie from 'js-cookie'


export default {
    // 注册
    submitRegister(registerInfo) {
        return request({
            url: `/usermanage/user/register`,
            method: 'post',
            data: registerInfo
        })
    },
    //获得验证码
    getRegisterCode(phone) {
        return request({
            url: `/usermanage/msm/send/${phone}`,
            method: 'get'
        })
    }
}