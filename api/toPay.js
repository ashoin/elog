import request from '@/utils/request'


export default {
    //支付宝支付
    toPay(id) {
        return request({
            url: `/order/alipay/createNotice/${id}`,
            method: 'get'
        })
    }

}