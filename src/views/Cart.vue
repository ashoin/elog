<template>
  <div class="cart-container">
    <!-- 头部标题 -->
    <div class="cart-head">
      <span>购物车({{ count }})</span>
      <!-- TODO count 为 0 的时候要将（）去除 -->
      <div @click="Edit(false)" v-if="storeEdit">编辑</div>
      <div @click="Edit(true)" v-else>完成</div>
    </div>
    <!-- 主体部分展示 -->
    <div class="cart-main">
      <!-- 如果购物车是空的情况下展示 -->
      <div class="cart-empty" v-if="!isOrder">
        <van-empty
          class="custom-image"
          image="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/nullcar%402x.png"
          description="购物车还是空的"
        />
      </div>
      <!-- 如果购物车中有商品的情况下展示 -->
      <div class="cart-goods" v-else>
        <!-- 商品展示组件 -->
        <cart-goods-item @childChange="childChecked" ref="child" />
        <cart-goods-item @childChange="childtwoChecked" ref="childtwo" />
      </div>
    </div>
    <!-- 底部结算区域 -->
    <div class="cart-up-foot">
      <!-- 结算 -->
      <van-submit-bar
        v-if="storeEdit"
        :price="price"
        button-text="去结算"
        @submit="toCartOrder"
      >
        <!-- 重点的全选功能 -->
        <van-checkbox v-model="checked" @click="checkedAllGoods">
          全选
        </van-checkbox>
      </van-submit-bar>
      <!-- 删除和收藏 -->
      <div class="delete-collect" v-else>
        <van-checkbox v-model="checked" @click="checkedAllGoods">
          全选
        </van-checkbox>
        <van-button plain type="default">收藏</van-button>
        <van-button type="danger" @click="handleDelete">删除</van-button>
      </div>
    </div>
    <!-- 底部导航区 -->
    <div class="cart-foot">
      <wsf-foot :now-active="nowActive" />
    </div>
  </div>
</template>
<script>
import WsfFoot from "../components/myModule/WsfFoot";
import CartGoodsItem from "../components/shoppingcart/CartGoodsItem";
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      nowActive: 3,
      firstChild: false, //第一个子组件
      checked: false,
      secondChild: false, //第二个子组件
      price: 0,
      order: true,
    };
  },
  computed: {
    ...mapState("saveOrder", {
      storeEdit: "edit",
      goods: "goods",
      count: "count",
    }),
    ...mapGetters("saveOrder", {
      isOrder: "isOrder",
    }),
  },
  created() {
    // 初期添加留言
    if (this.$route.query.userMessage != "") {
      this.message = this.$route.query.userMessage;
    }
  },
  mounted() {
    // 挂在后计算所有的商品的数量
    if (this.$refs.child != undefined) {
      this.changeCount(
        this.$refs.child.courseList.length +
          this.$refs.childtwo.courseList.length
      );
    }
  },
  //判断子组件是否都是选中的状态
  watch: {
    firstChild(newName) {
      if (newName == this.secondChild && newName == true) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    secondChild(newName) {
      if (newName == this.firstChild && newName == true) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
  },
  methods: {
    ...mapMutations("saveOrder", {
      changeEdit: "changeEdit",
      saveCourseList: "saveCourseList",
      changeCount: "changeCount",
      changeJudge: "changeJudge",
    }),
    // 删除按键方法
    handleDelete() {
      if (
        this.$refs.child == undefined ||
        this.$refs.child.selectList.length == 0
      ) {
        return null;
      } else {
        this.$dialog
          .confirm({
            title: "确认删除",
            message: "木质设计感茶几",
          })
          .then(() => {
            this.changeCount(null);
            this.changeJudge(false);
            this.$toast.success("删除成功");
          })
          .catch(() => {
            this.$toast.fail("取消删除");
          });
        this.price = 0;
        this.checked = false;
      }
    },
    // 去结算方法.
    toCartOrder() {
      if (
        this.$refs.child == undefined ||
        this.$refs.child.selectList.length == 0
      ) {
        return null;
      } else {
        this.saveCourseList(this.$refs.child.courseList);
        this.$router.push({
          name: "CartOrder",
        });
        this.changeCount(null);
      }
    },
    // 全选按键功能
    checkedAllGoods() {
      if (this.isOrder == false) {
        return null;
      } else if (this.checked == true) {
        this.$refs.child.checkedAll = true;
        this.$refs.childtwo.checkedAll = true;
        this.AllcheckPrice();
      } else {
        this.$refs.childtwo.checkedAll = false;
        this.$refs.child.checkedAll = false;
        this.price = 0;
      }
    },
    // 第一子传父
    childChecked(payload) {
      this.firstChild = payload;
      this.AllPrice();
    },
    // 第二子传父
    childtwoChecked(payload) {
      this.secondChild = payload;
      this.AllPrice();
    },
    // 编辑和完成的功能按键
    Edit(bool) {
      this.changeEdit(bool);
    },
    // 获得总价格
    AllPrice() {
      this.price = this.$refs.child.childPrice + this.$refs.childtwo.childPrice;
    },
    // 点击全选获得总价格
    AllcheckPrice() {
      let oneP = 0,
        twoP = 0;
      let courseListone = this.$refs.child.courseList;
      let courseListtwo = this.$refs.childtwo.courseList;
      courseListone.forEach((course) => {
        oneP += course.price * course.count;
      });
      courseListtwo.forEach((course) => {
        twoP += course.price * course.count;
      });
      this.price = oneP + twoP;
    },
  },
  components: {
    WsfFoot,
    CartGoodsItem,
  },
};
</script>
<style scoped lang='scss'>
.cart-container {
  width: 100%;
  height: 100%;
  background-color: #ededed;
  // 头部样式
  .cart-head {
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    position: fixed;
    background-color: white;
    text-align: center;
    z-index: 1;
    // border-bottom: 1px solid #ededed;
    div {
      position: absolute;
      top: 0;
      right: 0.3rem;
      font-size: 0.32rem;
    }
    span {
      font-size: 0.4rem;
    }
  }
  // 中间部分
  .cart-up-foot {
    /deep/.van-submit-bar {
      bottom: 1.02rem;
    }
    // 点击修改和删除的样式
    .delete-collect {
      position: fixed;
      bottom: 1rem;
      left: 0;
      z-index: 1;
      background-color: white;
      width: 96%;
      height: 1.02rem;
      padding-left: 0.3rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .van-checkbox {
        flex-grow: 1;
      }
      .van-button {
        width: 2rem;
      }
    }
  }
  .cart-main {
    padding: 1.2rem 0 2rem 0;
    border-top: 0.2rem solid #ededed;
    .van-empty {
      padding: 30% 0;
    }
  }
}
</style>