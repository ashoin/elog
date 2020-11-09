import Vue from 'vue'

const saveOrder = {
    state: {
        goods: [],
        checkedAll: false,
        edit: true,
        price: 0,
        message: '',
        totalPrice: 0
    },
    getters: {
        totalPrice(state) {
            return state.courseList.forEach(course => {
                state.totalPrice += course.price / 100
            });
        }
    },
    mutations: {
        totalPrice(state, value) {
            state.price = value
        },
        changeText(state, text) {
            state.goods = text;
        },
        changeEdit(state, bool) {
            state.edit = bool
        },
        changeChecked(state, bool) {
            state.checkedAll = bool
        },
        // 储存时间
        saveTime(state, value) {
            Vue.set(state, 'time', value)
        },
        changeGoodsCount(state, value) {
            state.goods.count = value
        },
        changeMessages(state, value) {
            state.message = value
        },
        saveCourseList(state, value) {
            Vue.set(state, "courseList", value)
        },
        getTotalPrice(state, courseList) {
            courseList.forEach(course => {
                state.totalPrice += course.price / 100
            });
        }
    },
    namespaced: true,
}
export default saveOrder