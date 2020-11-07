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
    }
}