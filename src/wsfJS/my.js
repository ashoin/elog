export default {
    // 去设置地址页面
    toLocation() {
        this.$router.push({
            name: "Location",
            query: {
                address: this.nowLocation
            },
        });
    },
    // 去搜索商品页面
    toSearch() {
        this.$router.push("/home/search");
    },
    // 去购物页面
    toShoppingDetail() {
        this.$router.push({
            name: "ShoppingDetail",
        });
    },



    // 手机号码验证
    checkPhone(mobile) {
        console.log(mobile);
        if (!/^1[34578]\d{9}$/.test(mobile) && this.mobile != "") {
            this.$notify("手机号码格式不正确");
        }
    },
    // 点击搜索的功能方法
    getSearchResult() {
        if (this.searchText !== "") {
            this.$toast.loading({
                message: "加载搜索内容...",
                forbidClick: true,
                loadingType: "spinner",
            });
            this.searchHistory.splice(0, 0, this.searchText);
        } else {
            this.$toast.loading({
                message: "搜索内容不能为空",
            });
        }
    },
    // 点击清除历史功能
    clearSearch() {
        this.searchHistory = null;
    },
    // 点击加入购物功能
    addCart(e) {
        this.isShow = false;
        this.$store.commit("changeText", e.selectedSkuComb);
        this.$toast.success("添加成功");
    },
}