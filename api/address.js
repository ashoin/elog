import request from '@/utils/request'


export default {
    // 查找用户地址
    userAddress(id) {
        return request({
            url: `/usermanage/user-address/getDefaultAddr/`,
            method: 'get',
            id
        })
    }
}