<template>
  <div class="user-info-container">
    <div class="user-info-head">
      <!-- 标题 -->
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toMine"
        />
        <span>个人信息</span>
      </div>
      <!-- 图片 -->
      <div class="info-head-img">
        <van-image
          width="2.4rem"
          height="2.4rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/login/piccircle%402x.png"
          @click="showAvator = true"
        />
      </div>
    </div>
    <div class="user-info-main">
      <!-- 昵称 -->
      <van-cell :value="userInfo.username">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span>昵称</span>
        </template>
      </van-cell>
      <!-- 性别 -->
      <van-cell :value="sex" @click="showSex = true">
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span>性别</span>
        </template>
      </van-cell>
      <!-- 年龄 -->
      <van-cell
        style="margin-bottom: 0.3rem"
        :value="age + `岁  天平座`"
        @click="showDate = true"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span>年龄</span>
        </template>
      </van-cell>
      <!-- 地址 -->
      <van-cell is-link to="/mine/user/address">
        <template #title>
          <span>地址</span>
        </template>
      </van-cell>
      <!-- 实名认证 -->
      <van-cell is-link to="/mine/user/authentic">
        <template #title>
          <span>实名认证</span>
        </template>
      </van-cell>
    </div>
    <!-- 所有的遮罩层存放处 -->
    <div class="all-popup">
      <!-- 头像选择遮罩层 -->
      <van-popup v-model="showAvator">
        <div class="sex-select-container">
          <div class="sex">头像</div>
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell>
                <template #title>
                  <van-button style="width: 35%; border: none">拍摄</van-button>
                </template>
              </van-cell>
              <van-cell>
                <template #title>
                  <van-uploader>
                    <van-button style="border: none">选择图片</van-button>
                  </van-uploader>
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <van-button @click="showAvator = false">确定</van-button>
        </div>
      </van-popup>
      <!-- 性别选择遮罩层 -->
      <van-popup v-model="showSex">
        <div class="sex-select-container">
          <div class="sex">性别</div>
          <van-radio-group v-model="radio">
            <van-cell-group>
              <van-cell title="男" clickable @click="radio = '1'">
                <template #right-icon>
                  <van-radio name="1" />
                </template>
              </van-cell>
              <van-cell title="女" clickable @click="radio = '2'">
                <template #right-icon>
                  <van-radio name="2" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
          <van-button @click="selectSex">确定</van-button>
        </div>
      </van-popup>
      <!-- 年龄选择遮罩层 -->
      <van-popup
        v-model="showDate"
        position="botton"
        style="width: 100%; height: 50%"
      >
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          title="选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          :formatter="formatter"
          @confirm="selectDate"
          @cancel="showDate = false"
        />
      </van-popup>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showSex: false,
      showDate: false,
      showAvator: false,
      radio: null,
      sex: "男",
      age: 22,
      minDate: new Date(1950, 1, 1),
      maxDate: new Date(2020, 11, 30),
      currentDate: new Date(),
    };
  },
  computed: {
    ...mapState("user", {
      userInfo: "userInfo",
    }),
  },
  methods: {
    // 返回到mine
    toMine() {
      this.$router.push({
        name: "Mine",
      });
    },
    // 选择性别
    selectSex() {
      this.showSex = false;
      if (this.radio == 1) {
        this.sex = "男";
      } else {
        this.sex = "女";
      }
    },
    // 选择生日
    selectDate(e) {
      let nowYear = new Date();
      this.age = nowYear.getFullYear() - e.getFullYear();
      this.showDate = false;
    },
    formatter(type, val) {
      if (type === "year") {
        return `${val}年`;
      } else if (type === "month") {
        return `${val}月`;
      } else if (type === "day") {
        return `${val}日`;
      }
      return val;
    },
  },
};
</script>
<style scoped lang='scss'>
.user-info-container {
  background-color: #ededed;
  height: 100%;
  .info-head-title {
    width: 100%;
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
  .info-head-img {
    padding-top: 1.22rem;
    width: 100%;
    height: 3rem;
    background-color: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sex-select-container {
    width: 6rem;
    .sex {
      height: 1rem;
      text-align: center;
      line-height: 1rem;
      font-size: 0.38rem;
      border-bottom: 1px solid silver;
    }
    .van-button {
      width: 100%;
    }
  }
}
</style>