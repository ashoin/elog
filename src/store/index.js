import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({

    state: {
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
        goods: 'hello',
        checkedAll: false,
        edit: true
    },

    mutations: {
        // 修改token，并将token存入localStorage
        changeLogin(state, user) {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        },
        changeText(state, text) {
            state.goods = text;
            Vue.set(state, 'save', text)
        },
        changeEdit(state, bool) {
            state.checkedAll = bool
        }
    },

});

export default store;