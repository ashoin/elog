const saveOrder = {
    state: {
        goods: 'hello',
        checkedAll: false,
        edit: true,
        price: 0,
    },
    mutations: {
        totalPrice(state, value) {
            state.price = value * 100;
        },
        changeText(state, text) {
            state.goods = text;
            Vue.set(state, 'save', text)
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
        }
    }
}
export default saveOrder