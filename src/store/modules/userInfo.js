const user = {
    state: {
        //用户信息
        userInfo: {}
    },
    mutations: {
        changeUserInfo(state, value) {
            state.userInfo = value
        }
    },
    namespaced: true,
}
export default user