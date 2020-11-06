import Vue from 'vue';
import Vuex from 'vuex';
import token from './modules/token'
import saveOrder from './modules/saveOrder'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        token,
        saveOrder
    }
})