const token = {
    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        signIn: '签到',
        city: "杭州市"
    },

    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin(state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        },

        changeCity(state, newCity) {
            state.city = newCity
        },

        changeSign(state) {
            state.signIn = '已签到';
        }
    },
    namespaced: true,
}
export default token