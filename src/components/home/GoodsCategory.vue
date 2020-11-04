<template>
  <div class="goods-category-container">
    <!-- 头部标题组件 -->
    <head-info :title="title"></head-info>
    <!-- 主体部分组件化 -->
    <div
      class="goods-category-list"
      v-for="goodsList in allGoodsList"
      :key="goodsList.id"
    >
      <wsf-category :goods-list="goodsList"> </wsf-category>
      <div class="black"></div>
    </div>
  </div>
</template>
<script>
import HeadInfo from "../myModule/HeadInfo";
import WsfCategory from "../myModule/WsfCategory";
export default {
  components: {
    HeadInfo,
    WsfCategory,
  },
  data() {
    return {
      title: {
        text: "商品分类",
        src:
          "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/%E5%95%86%E5%93%81%E5%88%86%E7%B1%BB%402x.png",
      },
      allGoodsList: {
        goodsList1: {
          id: 1001,
          goodsTitle: {
            name: "三抽屉嵌式电视柜",
            title: "客厅",
            price: "￥2650",
            src:
              "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/1%402x.png",
          },
          goodsShow: [
            {
              name: "三抽屉嵌式电视柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/2%402x.png",
              price: "￥2650",
              id: 100001,
            },
            {
              name: "欧式白色大理石茶几",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/3%402x.png",
              price: "￥2650",
              id: 100002,
            },
            {
              name: "富艺沙发欧式",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/4%402x.png",
              price: "￥2650",
              id: 100003,
            },
            {
              name: "欧式多格抽屉电视机柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/5%402x.png",
              price: "￥2650",
              id: 100004,
            },
          ],
        },
        goodsList2: {
          id: 1002,
          goodsTitle: {
            name: "三抽屉嵌式电视柜",
            title: "餐厅",
            price: "￥2650",
            src:
              "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/6%402x.png",
          },
          goodsShow: [
            {
              name: "三抽屉嵌式电视柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/7%402x.png",
              price: "￥2650",
              id: 100001,
            },
            {
              name: "欧式白色大理石茶几",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/8%402x.png",
              price: "￥2650",
              id: 100002,
            },
            {
              name: "富艺沙发欧式",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/9%402x.png",
              price: "￥2650",
              id: 100003,
            },
            {
              name: "欧式多格抽屉电视机柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/5%402x.png",
              price: "￥2650",
              id: 100004,
            },
          ],
        },
        goodsList3: {
          id: 1003,
          goodsTitle: {
            name: "三抽屉嵌式电视柜",
            title: "卧室",
            price: "￥2650",
            src:
              "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/10%402x.png",
          },
          goodsShow: [
            {
              name: "三抽屉嵌式电视柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/11%402x.png",
              price: "￥2650",
              id: 100001,
            },
            {
              name: "欧式白色大理石茶几",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/12%402x.png",
              price: "￥2650",
              id: 100002,
            },
            {
              name: "富艺沙发欧式",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/13%402x.png",
              price: "￥2650",
              id: 100003,
            },
            {
              name: "欧式多格抽屉电视机柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/14%402x.png",
              price: "￥2650",
              id: 100004,
            },
          ],
        },
        goodsList4: {
          id: 1004,
          goodsTitle: {
            name: "三抽屉嵌式电视柜",
            title: "书房",
            price: "￥2650",
            src:
              "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/15%402x.png",
          },
          goodsShow: [
            {
              name: "三抽屉嵌式电视柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/15%402x.png",
              price: "￥2650",
              id: 100001,
            },
            {
              name: "欧式白色大理石茶几",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/3%402x.png",
              price: "￥2650",
              id: 100002,
            },
            {
              name: "富艺沙发欧式",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/4%402x.png",
              price: "￥2650",
              id: 100003,
            },
            {
              name: "欧式多格抽屉电视机柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/5%402x.png",
              price: "￥2650",
              id: 100004,
            },
          ],
        },
        goodsList5: {
          id: 1005,
          goodsTitle: {
            name: "三抽屉嵌式电视柜",
            title: "灯饰照明",
            price: "￥2650",
            src:
              "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/16%402x.png",
          },
          goodsShow: [
            {
              name: "三抽屉嵌式电视柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/17%402x.png",
              price: "￥2650",
              id: 100001,
            },
            {
              name: "欧式白色大理石茶几",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/18%402x.png",
              price: "￥2650",
              id: 100002,
            },
            {
              name: "富艺沙发欧式",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/19%402x.png",
              price: "￥2650",
              id: 100003,
            },
            {
              name: "欧式多格抽屉电视机柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/20%402x.png",
              price: "￥2650",
              id: 100004,
            },
          ],
        },
        goodsList6: {
          id: 1006,
          goodsTitle: {
            name: "三抽屉嵌式电视柜",
            title: "家具软装",
            price: "￥2650",
            src:
              "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/21%402x.png",
          },
          goodsShow: [
            {
              name: "三抽屉嵌式电视柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/22%402x.png",
              price: "￥2650",
              id: 100001,
            },
            {
              name: "欧式白色大理石茶几",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/23%402x.png",
              price: "￥2650",
              id: 100002,
            },
            {
              name: "富艺沙发欧式",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/24%402x.png",
              price: "￥2650",
              id: 100003,
            },
            {
              name: "欧式多格抽屉电视机柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/25%402x.png",
              price: "￥2650",
              id: 100004,
            },
          ],
        },
        goodsList7: {
          id: 1007,
          goodsTitle: {
            name: "三抽屉嵌式电视柜",
            title: "家具饰品",
            price: "￥2650",
            src:
              "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/26%402x.png",
          },
          goodsShow: [
            {
              name: "三抽屉嵌式电视柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/17%402x.png",
              price: "￥2650",
              id: 100001,
            },
            {
              name: "欧式白色大理石茶几",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/18%402x.png",
              price: "￥2650",
              id: 100002,
            },
            {
              name: "富艺沙发欧式",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/19%402x.png",
              price: "￥2650",
              id: 100003,
            },
            {
              name: "欧式多格抽屉电视机柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/20%402x.png",
              price: "￥2650",
              id: 100004,
            },
          ],
        },
        goodsList8: {
          id: 1008,
          goodsTitle: {
            name: "三抽屉嵌式电视柜",
            title: "其它",
            price: "￥2650",
            src:
              "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/27%402x.png",
          },
          goodsShow: [
            {
              name: "三抽屉嵌式电视柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/17%402x.png",
              price: "￥2650",
              id: 100001,
            },
            {
              name: "欧式白色大理石茶几",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/18%402x.png",
              price: "￥2650",
              id: 100002,
            },
            {
              name: "富艺沙发欧式",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/19%402x.png",
              price: "￥2650",
              id: 100003,
            },
            {
              name: "欧式多格抽屉电视机柜",
              url:
                "https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/home/goodskinds/20%402x.png",
              price: "￥2650",
              id: 100004,
            },
          ],
        },
      },
    };
  },
};
</script>
<style scoped>
.goods-category-container {
  width: 95%;
  margin: 0.2rem;
  background-color: white;
}
.black {
  border: 0.1rem solid #ededed;
  background: #ededed;
}
</style>