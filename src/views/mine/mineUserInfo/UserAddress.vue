<template>
  <div class="user-address-container">
    <!-- 头部标题+添加按钮 -->
    <div class="address-head">
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMineUserInfo"
        />
        <span>地址</span>
        <van-image
          width="0.5rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/add%402x.png"
          @click="toAddAddress"
        />
      </div>
    </div>
    <div class="address-main">
      <!-- 当地址信息为空的时候 -->
      <van-empty
        v-if="hasAddress"
        class="custom-image"
        image="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/nulllocate%402x.png"
      >
        <div class="description" slot="description">
          <span>您还未添加常用地址</span>
          <span>点击右上角“+” 按钮，添加常用地址</span>
        </div>
      </van-empty>
      <!-- 当存在地址的时候 -->
      <!-- <div class="address-main-info" v-else> -->
      <van-radio-group v-model="radio" checked-color="red">
        <div class="info-card" v-for="address in addressList" :key="address.id">
          <div>
            {{ address.name
            }}<span style="margin-left: 0.4rem">{{ address.tel }}</span>
          </div>
          <span style="margin: 0.2rem 0">
            详细地址：{{ address.periouce + address.street }}
          </span>
          <div class="btns">
            <van-radio :name="address.id">设为默认</van-radio>
            <div>
              <van-button @click="toEditAddress">编辑</van-button>
              <van-button>删除</van-button>
            </div>
          </div>
        </div>
      </van-radio-group>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      hasAddress: false,
      radio: 10011,
      addressList: [
        {
          id: 10011,
          name: "铁锤妹妹",
          tel: "18888888888",
          periouce: "浙江省杭州市",
          street: "街道办9号",
        },
        {
          id: 10012,
          name: "李四",
          tel: "18888888888",
          periouce: "浙江省杭州市亏",
          street: "街道办9号",
        },
        {
          id: 10013,
          name: "张三",
          tel: "18888888888",
          periouce: "浙江省杭州市江干区反贪局",
          street: "街道办9号",
        },
      ],
    };
  },
  computed: {
    ...mapState("payOrder", {
      needRoute: "needRoute",
      needRouteTwo: "needRouteTwo",
    }),
  },
  methods: {
    ...mapMutations("payOrder", {
      changeNeedRoute: "changeNeedRoute",
    }),
    toMineUserInfo() {
      if (this.needRoute == 1) {
        this.$router.push({
          name: "CartOrder",
          query: {
            name: "张三",
          },
        });
        this.changeNeedRoute(10);
      } else if (this.needRoute == 2) {
        this.$router.push({
          name: "OrderDetail",
        });
        this.changeNeedRoute(10);
      } else {
        this.$router.push({
          name: "MineUserInfo",
        });
      }
    },
    toAddAddress() {
      this.$router.push({
        name: "AddressAdd",
      });
    },
    // 编辑地址
    toEditAddress() {
      this.$router.push({
        name: "AddressAdd",
        query: {
          edit: true,
          id: 15224151472,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.user-address-container {
  width: 100%;
  height: 100%;
  background-color: #ededed;
  .address-head {
    padding-bottom: 1.4rem;
  }
  .info-head-title {
    width: 95%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    height: 1.2rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0.2rem;
    border-bottom: 1px solid #ededed;
    span {
      font-size: 0.4rem;
      text-align: center;
      flex-grow: 1;
    }
  }
  .address-main {
    width: 100%;

    // 没有地址的情况
    .van-empty {
      padding: 30% 0 70% 0;
      width: 100%;
      /deep/.van-empty__image {
        width: 3rem;
        height: 3.5rem;
      }
      /deep/.van-empty__description {
        padding: 0;
      }
      .description {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.38rem;
        span {
          margin-top: 0.2rem;
        }
      }
    }
    .van-radio-group {
      .info-card {
        padding: 0.4rem;
        background-color: white;
        font-size: 0.34rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-bottom: 0.2rem solid #ededed;
        .btns {
          display: flex;
          justify-content: space-between;
          .van-button {
            border: none;
            font-size: 0.34rem;
          }
        }
      }
    }
  }
}
</style>