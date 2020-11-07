const token = {
    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    },

    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin(state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        }
    },
    namespaced: true,
}
export default token