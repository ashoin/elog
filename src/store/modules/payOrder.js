const payOrder = {
    state: {
        needPay: true,
        needSend: true,
        needDelivery: true,
        needEvaluate: true,
        needRoute: 10,
        needRouteTwo: false
    },
    mutations: {
        // 改变needPay状态
        changeNeedPay(state, value) {
            state.needPay = value
        },
        // 改变needSend状态
        changeNeedSend(state, value) {
            state.needSend = value
        },
        // 改变needDelivery状态
        changeNeedDelivery(state, value) {
            state.needDelivery = value
        },
        // 改变needEvaluate状态
        changeNeedEvaluate(state, value) {
            state.needEvaluate = value
        },
        // 改变路由跳转的路径
        changeNeedRoute(state, value) {
            state.needRoute = value
        },
        // 改变路由跳转路径
        changeNeedRouteTwo(state, value) {
            state.needRouteTwo = value
        }
    },
    namespaced: true,
}
export default payOrder