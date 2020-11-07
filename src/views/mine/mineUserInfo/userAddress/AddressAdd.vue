<template>
  <div class="address-add-container">
    <!-- 头部标题信息 -->
    <div class="add-head">
      <div class="info-head-title">
        <van-image
          width="0.2rem"
          height="0.5rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toUserAddress"
        />
        <span>新建收货地址</span>
        <van-button>保存</van-button>
      </div>
    </div>
    <div class="add-main">
      <van-cell-group>
        <!-- 收货人 -->
        <van-field
          v-model="newAddress.name"
          type="text"
          label="收货人"
          placeholder="姓名"
        />
        <!-- 输入手机号 -->
        <van-field
          v-model="newAddress.tel"
          type="digit"
          label="手机号"
          placeholder="输入11位手机号"
        />
        <!-- 所在区域 -->
        <van-field
          v-model="newAddress.periouce"
          type="text"
          label="所在区域"
          placeholder="省市区"
          right-icon="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/mine/%E4%B8%AA%E4%BA%BA%E4%BF%A1%E6%81%AF/ding%402x.png"
        />
        <!-- 详细地址 -->
        <van-field
          v-model="newAddress.street"
          type="text"
          label="详细地址"
          placeholder="街道门牌号"
        />
        <!-- 设置默认地址 -->
        <van-cell clickable title="设为默认地址">
          <template #right-icon>
            <van-checkbox v-model="newAddress.checked" checked-color="red" />
          </template>
        </van-cell>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import addressApi from "../../../../../api/login";
export default {
  data() {
    return {
      newAddress: {
        name: "",
        tel: "",
        periouce: "",
        street: "",
        checked: true,
      },
    };
  },
  created() {
    if (this.$route.query.edit == true) {
      addressApi.userAddress(this.$route.query.id).then((res) => {
        let user = res.data.data.defaultAddr;
        this.newAddress.street = user.address;
        this.newAddress.name = user.username;
        this.newAddress.checked = user.isDefault;
        this.newAddress.tel = user.mobile;
        this.newAddress.periouce = "浙江省杭州市";
      });
    }
  },
  methods: {
    toUserAddress() {
      this.$router.push({
        name: "UserAddress",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.address-add-container {
  width: 100%;
  height: 100%;
  background: #ededed;
  .add-head {
    padding-bottom: 1.4rem;
  }
  .info-head-title {
    width: 98%;
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
    .van-button {
      border: none;
    }
  }
  .add-main {
    width: 100%;
    background-color: white;
  }
}
</style>