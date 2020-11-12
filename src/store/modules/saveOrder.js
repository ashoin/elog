import Vue from 'vue'

const saveOrder = {
    state: {
        goods: [],
        checkedAll: false,
        edit: true,
        price: 0,
        message: '',
        totalPrice: 0,
        judge: false,
        count: 0
    },
    getters: {
        isOrder: function (state) {
            return state.judge
        }
    },
    mutations: {
        //改变单价格
        totalPrice(state, value) {
            state.price = value
        },
        //改变商品内容
        changeText(state, text) {
            state.goods = text;
        },
        // 改变编辑状态
        changeEdit(state, bool) {
            state.edit = bool
        },
        // 改变全选状态
        changeChecked(state, bool) {
            state.checkedAll = bool
        },
        // 储存时间
        saveTime(state, value) {
            Vue.set(state, 'time', value)
        },
        // 改变购物车中数量
        changeCount(state, value) {
            state.count = value
        },
        // 改变商品总数量
        changeGoodsCount(state, value) {
            state.goods.count = value
        },
        // 改变留言信息
        changeMessages(state, value) {
            state.message = value
        },
        // 添加一个courseList
        saveCourseList(state, value) {
            Vue.set(state, "courseList", value)
        },
        // 计算总价格
        getTotalPrice(state, courseList) {
            courseList.forEach(course => {
                state.totalPrice += course.price / 100
            });
        },
        // 改变真假
        changeFalse(state, value) {
            state.judge = value
        },
    },
    namespaced: true,
}
export default saveOrder