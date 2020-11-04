<template>
  <div class="goods-item-container">
    <van-checkbox-group v-model="result" ref="checkboxGroup">
      <van-checkbox class="goods-item-title" name="title" @change="checkAll">
        家具 Design
      </van-checkbox>
      <van-checkbox name="id">
        <!-- 信息展示区 -->
        <div class="goods-card">
          <van-image
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/shoppingcart/liuyanpic%402x.png"
          />
          <div class="goods-info">
            <span style="font-size: 0.32rem">木质设计感茶几</span>
            <span style="font-size: 0.26rem">400*400*560；黑胡桃木</span>
            <span>胡桃木色</span>
            <div class="goods-price">
              <span style="font-size: 0.38rem; color: red">￥290</span>
              <span>x 1</span>
            </div>
          </div>
        </div>
        <!-- 留言展示区 -->
      </van-checkbox>
      <div class="edit-message">
        <form action="/">
          <van-search
            readonly
            v-model="message"
            show-action
            left-icon=""
            placeholder="暂未编辑留言"
          >
            <span slot="action" @click="toMessage">留言</span>
          </van-search>
        </form>
      </div>
    </van-checkbox-group>
  </div>
</template>
<script>
export default {
  props: ["message"],
  data() {
    return {
      result: [],
      isSelect: "false",
      checked: false,
    };
  },
  methods: {
    toMessage() {
      this.$router.push({
        name: "CartMessage",
        query: {
          message: this.message,
        },
      });
    },
    checkAll() {
      console.log(this.result);
      this.$refs.checkboxGroup.toggleAll(true);
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
  .van-checkbox {
    padding: 0 0.3rem;
    .goods-card {
      width: 100%;
      display: flex;
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