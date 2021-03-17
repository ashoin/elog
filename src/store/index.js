import Vue from 'vue';
import Vuex from 'vuex';
import token from './modules/token';
import saveOrder from './modules/saveOrder';
import payOrder from './modules/payOrder';
import user from './modules/userInfo';
import newOrder from './modules/newOrder'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        token,
        saveOrder,
        payOrder,
        user,
        newOrder
    },
    state: {
        networkSuccess: false //是否断网
    },
    mutations: {
        changeNetworkSuccess(state, val) { //改变状态
            state.networkSuccess = val
        },
    }
})