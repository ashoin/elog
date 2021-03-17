const newOrder = {
    state: {
        addOrder: {
            id: 10011,
            len: "400*400*560；黑胡桃木",
            color: "胡桃木色",
            goods: "木质设计感茶几",
            price: 290,
            count: 1,
            checked: false,
        },

    },
    mutations: {
        changeOrderPrice(state, value) {
            state.addOrder.price = value
        },
        changeOrderCount(state, value) {
            state.addOrder.count = value
        }
    },
    namespaced: true,
}
export default newOrder