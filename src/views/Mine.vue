<template>
  <div class="mine-container">
    <div class="mine-head">
      <!-- 头部标题 -->
      <div class="mine-head-title">
        <van-image
          width="0.5rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/set%402x.png"
          @click="toSetting"
        />
        <van-image
          width="0.5rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/ring%402x.png"
        />
      </div>
      <!-- 头部头像 -->
      <div class="mine-head-avator">
        <van-image
          width="2rem"
          height="2rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/mypic%402x.png"
        />
        <p @click="toUserInfo">一不小心闪到腰</p>
      </div>
      <!-- 签到栏 -->
      <div class="mine-head-sign">
        <div @click="changeSign">
          <van-image
            width="0.4rem"
            height="0.4rem"
            src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/qian-%402x.png"
          />
          <span style="font-size: 0.28rem; margin-left: 0.14rem">
            {{ signIn }}
          </span>
        </div>
        <div v-for="sign in allSign" :key="sign.id">
          <van-image width="0.4rem" height="0.4rem" :src="sign.src" />
          <span style="font-size: 0.28rem; margin-left: 0.14rem">
            {{ sign.text }}
          </span>
        </div>
      </div>
    </div>
    <div class="mine-main">
      <!-- 我的订单 -->
      <div class="main-myorder">
        <van-cell value="查看全部订单" is-link @click="toAllOrder">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">我的订单</span>
          </template>
        </van-cell>
        <van-grid>
          <!-- 可以将字体的大小修改一下TODO -->
          <van-grid-item
            icon="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/fu%402x.png"
            text="待付款"
            :to="{ path: '/mine/order', query: { tabIndex: 1 } }"
          />
          <van-grid-item
            icon="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/fa%402x.png"
            text="待发货"
            :to="{ path: '/mine/order', query: { tabIndex: 2 } }"
          />
          <van-grid-item
            icon="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/song%402x.png"
            text="配送中"
            :to="{ path: '/mine/order', query: { tabIndex: 3 } }"
          />
          <van-grid-item
            icon="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/ping%402x.png"
            text="待评价"
            :to="{ path: '/mine/order', query: { tabIndex: 4 } }"
          />
        </van-grid>
      </div>
      <!-- 会员等级 -->
      <div class="main-vip-level">
        <van-cell
          is-link
          :icon="item.src"
          v-for="item in vipLevel"
          :key="item.id"
        >
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">{{ item.text }}</span>
          </template>
        </van-cell>
      </div>
      <!-- 我的评价 -->
      <div class="main-my-evaluate">
        <van-cell
          is-link
          :icon="item.src"
          v-for="item in myEvaluate"
          :key="item.id"
          @click="toRefund"
        >
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">{{ item.text }}</span>
          </template>
        </van-cell>
      </div>
      <!-- 我的预约体验 -->
      <div class="main-my-appointment">
        <van-cell
          is-link
          :icon="item.src"
          v-for="item in myAppointment"
          :key="item.id"
        >
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title">{{ item.text }}</span>
          </template>
        </van-cell>
      </div>
    </div>
    <div class="mine-foot">
      <wsf-foot :nowActive="nowActive" />
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import WsfFoot from "../components/myModule/WsfFoot";
export default {
  components: {
    WsfFoot,
  },
  data() {
    return {
      sign: "签到",
      nowActive: 4,
      allSign: [
        {
          id: 10012,
          text: "收藏",
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/shou%402x.png",
        },
        {
          id: 10013,
          text: "分享",
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/sharee%402x.png",
        },
        {
          id: 10014,
          text: "足迹",
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/foot%402x.png",
        },
      ],
      vipLevel: [
        {
          id: 100011,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/guan%402x.png",
          text: "会员等级",
        },
        {
          id: 100012,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/fen%402x.png",
          text: "我的积分",
        },
        {
          id: 100013,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/ka%402x.png",
          text: "我的卡卷",
        },
      ],
      myEvaluate: [
        {
          id: 1001,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/ping%402x.png",
          text: "我的评价",
        },
        {
          id: 1002,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/tui%402x.png",
          text: "退款维权",
        },
      ],
      myAppointment: [
        {
          id: 10011,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/ti%402x.png",
          text: "我的预约体验",
        },
        {
          id: 10012,
          src:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/she%402x.png",
          text: "我的预约设计",
        },
      ],
    };
  },
  computed: {
    ...mapState("token", {
      signIn: "signIn",
    }),
  },
  methods: {
    ...mapMutations("token", {
      changeSign: "changeSign",
    }),
    // 去设置
    toSetting() {
      this.$router.push({
        name: "MineSetting",
      });
    },
    // 去个人中心
    toUserInfo() {
      this.$router.push({
        name: "MineUserInfo",
      });
    },
    // 去订单详情
    toAllOrder() {
      this.$router.push({
        name: "MineAllOrder",
      });
    },
    // 去退款
    toRefund() {
      this.$router.push({
        name: "MineRefund",
      });
    },
  },
};
</script>
<style scoped lang='scss'>
.mine-container {
  width: 100%;
  background-color: #ededed;
  padding-bottom: 1rem;
  .mine-head {
    background-color: white;
    margin-bottom: 0.2rem;
    .mine-head-title {
      position: fixed;
      top: 0;
      left: 0;
      width: 92%;
      z-index: 1;
      background-color: white;
      height: 1rem;
      padding: 0 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .mine-head-avator {
      padding-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin: 0;
        padding: 0.2rem 0;
        font-size: 0.4rem;
        font-weight: 600;
      }
    }
    .mine-head-sign {
      height: 1.2rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
    div {
      display: flex;
      align-items: center;
    }
  }
  .mine-main {
    .main-myorder {
      margin-bottom: 0.2rem;
      .custom-title {
        font-size: 0.36rem;
      }
    }
    .main-vip-level {
      margin-bottom: 0.2rem;
    }
    .main-my-evaluate {
      margin-bottom: 0.2rem;
    }
    .main-my-appointment {
      margin-bottom: 0.2rem;
    }
  }
}
</style>