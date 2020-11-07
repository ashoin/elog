<template>
  <div class="shopping-detail-container">
    <!-- 头部banner和info -->
    <div class="detail-head">
      <!-- 回退箭头 -->
      <div class="head-title">
        <van-image
          width="0.2rem"
          height="0.36rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/back%402x.png"
          @click="toHome"
        />
        <van-image
          width="0.2rem"
          height="0.36rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/share%402x.png"
        />
      </div>
      <!-- 轮播和相关的价格信息 -->
      <shopping-detail-head />
    </div>
    <!-- 主体部分 -->
    <div class="detail-main">
      <!-- 用户评价 -->
      <div class="main-user-evaluate">
        <div class="user-evaluate-title" @click="toUserEvalute">
          <span style="font-size: 0.34rem">用户评价</span>
          <van-icon name="arrow" />
        </div>
        <!-- 用户评价组件 -->
        <wsf-user-evalute :user-info-list="userInfoList" />
      </div>
      <!-- 信息展示列表 -->
      <van-tabs line-width="1.5rem">
        <van-tab title="商品详情" title-style="font-size:0.34rem">
          <!-- 商品详情 -->
          <shopping-main-detail />
        </van-tab>
        <van-tab title="商品参数" title-style="font-size:0.34rem">
          <!-- 商品参数 -->
          <shopping-main-params />
        </van-tab>
      </van-tabs>
    </div>
    <!-- 购物车底部组件 -->
    <div class="detail-foot">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" />
        <!-- 点击图标小功能直接写在页面上 -->
        <van-goods-action-icon
          icon="star-o"
          text="收藏"
          @click="isSave = true"
          v-if="!isSave"
        />
        <van-goods-action-icon
          icon="star"
          color="red"
          text="已收藏"
          @click="isSave = false"
          v-else
        />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="isShow = true"
        />
        <van-goods-action-button
          type="danger"
          text="立即购买"
          @click="isShow = true"
        />
      </van-goods-action>
    </div>
    <!-- <wsf-sku :isShow="isShow" /> -->
    <van-sku
      v-model="isShow"
      :sku="sku"
      :goods="goods"
      :goods-id="sku.goodsId"
      @add-cart="addCart"
    />
  </div>
</template>
<script>
import ShoppingDetailHead from "../components/shopping/ShoppingDetailHead";
import ShoppingMainDetail from "../components/shopping/ShoppingMainDetail";
import ShoppingMainParams from "../components/shopping/ShoppingMainParams";
import WsfUserEvalute from "../components/myModule/WsfUserEvaluta";
import WsfSku from "../components/myModule/WsfSku";
import { mapMutations } from "vuex";
export default {
  components: {
    ShoppingDetailHead,
    ShoppingMainDetail,
    ShoppingMainParams,
    WsfUserEvalute,
    WsfSku,
  },
  data() {
    return {
      isSave: false,
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "尺寸", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "150*40*45cm", // skuValueName：规格值名称
              },
              {
                id: "2",
                name: "150*40*65cm",
              },
            ],
          },
          {
            k: "材质", // skuKeyName：规格类目名称
            k_s: "s2", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "白橡木", // skuValueName：规格值名称
              },
              {
                id: "2",
                name: "红杉木",
              },
            ],
          },
          {
            k: "颜色", // skuKeyName：规格类目名称
            k_s: "s3", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "胡桃色", // skuValueName：规格值名称
              },
              {
                id: "2",
                name: "原木色",
              },
            ],
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1",
            s3: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 219000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
            goodsId: 123103080129308,
            goodsname: "150*40*45cm;白橡木;",
            goodscolor: "胡桃色",
          },
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1",
            s3: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 229000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
            goodsId: 123103080129307,
            goodsname: "150*40*45cm;白橡木;",
            goodscolor: "原木色",
          },
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2",
            s3: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 239000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
            goodsId: 123103080129306,
            goodsname: "150*40*45cm;红杉木;",
            goodscolor: "胡桃色",
          },
          {
            id: 2259, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1",
            s3: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 249000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
            goodsId: 123103080129305,
            goodsId: 123103080129306,
            goodsname: "150*40*65cm;白橡木;",
            goodscolor: "胡桃色",
          },
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2",
            s3: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 259000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
            goodsId: 123103080129304,
            goodsname: "150*40*45cm;红杉木;",
            goodscolor: "原木色",
          },
          {
            id: 2259, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1",
            s3: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 269000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
            goodsId: 123103080129303,
            goodsname: "150*40*65cm;白橡木;",
            goodscolor: "原木色",
          },
          {
            id: 2259, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2",
            s3: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 279000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
            goodsId: 123103080129302,
            goodsname: "150*40*65cm;红杉木;",
            goodscolor: "胡桃色",
          },
          {
            id: 2259, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2",
            s3: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 289000, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
            goodsId: 123103080129301,
            goodsname: "150*40*65cm;红杉木;",
            goodscolor: "原木色",
          },
        ],
        price: "290.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        goodsId: "goods is good",
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "0", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/canshu-%402x.png",
      },
      userInfoList: [
        {
          id: 10001,
          name: "铁锤妹妹",
          goods: "1.5米 白橡木 胡桃色",
          evalute: "颜色淡雅，非常漂亮",
          avator:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/pict%402x.png",
          date: "2020-10-29",
          images: [
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/zhuti%402x.png",
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/qingdpic%402x.png",
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/zhuti%402x.png",
          ],
        },
      ],
      //   数据写在这里是不同的商品评价也不同
      allUserInfoList: [
        {
          id: 100011,
          name: "铁锤妹妹",
          goods: "1.5米 白橡木 胡桃色",
          evalute: "颜色淡雅，非常漂亮",
          avator:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/touyuan%402x.png",
          date: "2020-10-29",
          images: [
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/zhuti%402x.png",
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/qingdpic%402x.png",
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/zhuti%402x.png",
          ],
        },
        {
          id: 100012,
          name: "铁锤妹妹",
          goods: "1.5米 白橡木 胡桃色",
          evalute: "颜色淡雅，非常漂亮",
          avator:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/pict%402x.png",
          date: "2020-10-29",
          images: [],
        },
        {
          id: 100013,
          name: "铁锤妹妹",
          goods: "1.5米 白橡木 胡桃色",
          evalute: "颜色淡雅，非常漂亮",
          avator:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/tou-%402x.png",
          date: "2020-10-29",
          images: [
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/zhuti%402x.png",
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/qingdpic%402x.png",
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/zhuti%402x.png",
          ],
        },
        {
          id: 100014,
          name: "铁锤妹妹",
          goods: "1.5米 白橡木 胡桃色",
          evalute: "颜色淡雅，非常漂亮",
          avator:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/toux%402x.png",
          date: "2020-10-29",
          images: [],
        },
        {
          id: 100015,
          name: "铁锤妹妹",
          goods: "1.5米 白橡木 胡桃色",
          evalute: "颜色淡雅，非常漂亮",
          avator:
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/touyuan%402x.png",
          date: "2020-10-29",
          images: [
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/zhuti%402x.png",
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/qingdpic%402x.png",
            "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/seckill/zhuti%402x.png",
          ],
        },
      ],
      isShow: false,
    };
  },
  methods: {
    ...mapMutations("saveOrder", {
      changeText: "changeText",
    }),
    // 去用户评价页面
    toUserEvalute() {
      this.$router.push({
        name: "ShoppingAllEvalute",
        query: {
          list: this.allUserInfoList,
        },
      });
    },
    // 点击加入购物功能
    addCart(e) {
      this.isShow = false;
      console.log(e);
      let addGoods = e.selectedSkuComb;
      addGoods.count = e.selectedNum;
      this.changeText(addGoods);
      this.$toast.success("添加成功");
    },
    toHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped lang="scss">
.shopping-detail-container {
  width: 100%;
  background-color: #ededed;
}
.detail-head {
  width: 100%;
  .head-title {
    width: 90%;
    padding: 0 0.4rem;
    position: fixed;
    top: 0;
    left: 0;
    height: 0.8rem;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.user-evaluate-title {
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem;
  margin: 0.2rem 0 1px 0;
}
.detail-foot {
  background-color: #ededed;
  padding-top: 1.2rem;
}
.van-tabs {
  margin-top: 0.3rem;
}
</style>