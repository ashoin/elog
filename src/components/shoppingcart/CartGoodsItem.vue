<template>
  <div class="goods-item-container">
    <van-checkbox
      class="goods-item-title"
      v-model="checkedAll"
      @click="checkedAllGood"
    >
      家具 Design
    </van-checkbox>
    <!-- 完成的时候出现的 -->
    <div v-if="storeEdit">
      <van-checkbox
        v-model="course.checked"
        :name="course.id"
        v-for="course in courseList"
        :key="course.id"
        @click="isCheckedAll"
      >
        <!-- 信息展示区 -->
        <div class="goods-card">
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
          />
          <div class="goods-info">
            <span style="font-size: 0.32rem">{{ course.goods }}</span>
            <span style="font-size: 0.26rem">{{ course.len }}</span>
            <span>{{ course.color }}</span>
            <div class="goods-price">
              <span style="font-size: 0.38rem; color: red">
                ￥{{ course.price / 100 }}{{ selectTotalPrice }}
              </span>
              <span>x {{ course.count }}</span>
            </div>
          </div>
        </div>
      </van-checkbox>
    </div>
    <!-- 编辑时候出现、 -->
    <div class="edit-cart" v-for="course in courseList" :key="course.id" v-else>
      <van-checkbox
        v-model="course.checked"
        :name="course.id"
        @click="isCheckedAll"
      >
        <!-- 信息展示区 -->
        <div class="goods-card">
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
          />
        </div>
      </van-checkbox>
      <van-stepper v-model="course.count" @change="checkedAllGood" />
    </div>
    <!-- 留言展示区 -->
    <div class="edit-message" @click="toMessage">
      <form action="/">
        <van-search
          readonly
          v-model="message"
          show-action
          left-icon=""
          placeholder="暂未编辑留言"
        >
          <span slot="action">留言</span>
        </van-search>
      </form>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      isEdit: false,
      childPrice: 0,
      courseList: [
        {
          id: 10011,
          len: "400*400*560；黑胡桃木",
          color: "胡桃木色",
          goods: "木质设计感茶几",
          price: 290,
          count: 1,
          checked: false,
        },
        {
          id: 10012,
          len: "400*400*650；黑胡桃木",
          color: "红木色",
          goods: "木质设计感茶几吧",
          price: 290,
          count: 1,
          checked: false,
        },
      ],
    };
  },

  computed: {
    ...mapState("saveOrder", {
      storeEdit: "edit",
      goods: "goods",
      message: "message",
    }),
    // 计算属性方法
    checkedAll: {
      get() {
        return this.courseList.every((course) => course.checked);
      },
      set(val) {
        this.courseList.forEach((course) => {
          course.checked = val;
          this.checkedAllGood;
        });
      },
    },
    selectList() {
      return this.courseList.filter((course) => course.checked);
    },
    selectTotalPrice() {
      let price = 0;
      this.selectList.forEach((course) => {
        price += course.price * course.count;
      });
      this.childPrice = price;
    },
  },
  // 创建产品列表
  created() {
    this.courseList.forEach((course) => {
      course.len = this.goods.goodsname;
      course.color = this.goods.goodscolor;
      course.price = this.goods.price;
      course.count = this.goods.count;
    });
  },

  methods: {
    ...mapMutations("saveOrder", {
      totalPrice: "totalPrice",
      changeEdit: "changeEdit",
    }),
    // 去留言方法
    toMessage() {
      this.$router.push({
        name: "CartMessage",
      });
    },
    // 点击选择全部
    checkedAllGood() {
      this.$emit("childChange", this.checkedAll);
    },
    // 确认是否全选
    isCheckedAll() {
      if (this.checkedAll == true) {
        this.$emit("childChange", this.checkedAll);
      } else {
        this.$emit("childChange", this.checkedAll);
      }
    },
  },
};
</script>
<style scoped lang='scss'>
.goods-item-container {
  background-color: white;
  border-bottom: 0.2rem solid #ededed;
  .goods-item-title {
    height: 1rem;
    font-size: 0.38rem;
    padding: 0 0.3rem;
    border-bottom: 1px solid #ededed;
  }
  .edit-cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 1rem;
  }
  .van-checkbox {
    padding: 0 0.3rem;

    .goods-card {
      display: flex;
      align-items: center;
      padding: 0.2rem 0;
      border-bottom: 1px solid #ededed;
      .goods-info {
        width: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .goods-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        span {
          margin: 0.04rem 0;
        }
      }
    }
  }
  .edit-message {
    padding-left: 0.6rem;
  }
}
</style>