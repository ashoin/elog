<template>
  <div class="location-container">
    <!-- 头部搜索栏 -->
    <location-head></location-head>
    <!-- 主体部分 -->
    <div class="location-main">
      <!-- 热门城市 -->
      <div class="main-hot-city">
        <div class="hot-city-title">热门城市</div>
        <div class="hot-city-list">
          <van-button
            v-for="hotCity in hotCityList"
            :key="hotCity.index"
            @click="getAddress($event)"
          >
            {{ hotCity }}
          </van-button>
        </div>
      </div>
      <!-- 首字母标签查找 -->
      <div class="main-code-search">
        <van-index-bar highlight-color="red" :sticky-offset-top="105">
          <div v-for="city in allCities" :key="city.index">
            <van-index-anchor :index="city.initial" />
            <van-cell
              :title="item.name"
              v-for="item in city.list"
              :key="item.code"
              @click="getAddress($event)"
            />
          </div>
        </van-index-bar>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import LocationHead from "../components/location/LocationHead";
export default {
  components: {
    LocationHead,
  },
  data() {
    return {
      allCities: [],
      hotCityList: [
        "北京市",
        "天津市",
        "上海市",
        "成都市",
        "广州市",
        "南京市",
        "武汉市",
        "厦门市",
        "重庆市",
        "长沙市",
        "地球村",
      ],
    };
  },
  computed: {
    ...mapState("token", {
      city: "city",
    }),
  },
  created() {
    this.axios.get("/city.json").then((res) => {
      this.allCities = res.data.city;
    });
  },
  methods: {
    ...mapMutations("token", {
      changeCity: "changeCity",
    }),
    getAddress(e) {
      this.changeCity(e.target.innerText);
    },
  },
};
</script>
<style scoped lang='scss'>
.location-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ededed;
}
.location-head {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
}
.main-hot-city {
  padding-top: 2.1rem;
  .hot-city-title {
    font-size: 0.38rem;
    margin: 0.2rem;
  }
  .hot-city-list {
    padding: 0.2rem 0.3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    background: white;
    .van-button {
      margin: 0.12rem;
      background-color: #ededed;
    }
  }
}
/deep/.van-index-anchor {
  font-size: 0.38rem;
  background-color: #ededed;
}
</style>