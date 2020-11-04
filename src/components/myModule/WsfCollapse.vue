<template>
  <van-collapse v-model="activeNames" accordion>
    <van-collapse-item
      :name="item.id"
      v-for="item in backgroundImages"
      :key="item.id"
    >
      <template #title>
        <div class="category-style-container">
          <div class="category-style-bg" :style="item.style"></div>
        </div>
      </template>
      <div
        class="cell-button"
        v-for="cell in cellList"
        :key="cell.id"
        @click="inform(cell.chinese)"
      >
        <div class="cell-button-text">
          <span style="font-size: 0.3rem">{{ cell.chinese }}</span>
          <span style="font-size: 0.25rem; margin-left: 0.1rem">{{
            cell.english
          }}</span>
        </div>
        <van-image
          width="0.2rem"
          height="0.3rem"
          src="https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/xiao_youjiantou%402x.png"
        ></van-image>
      </div>
    </van-collapse-item>
  </van-collapse>
</template>
<script>
export default {
  props: ["backgroundImages"],
  data() {
    return {
      activeNames: ["1"],
      cellList: [
        {
          id: 10011,
          chinese: "全部",
          english: "All",
        },
        {
          id: 10012,
          chinese: "沙发",
          english: "Sofas",
        },
        {
          id: 10013,
          chinese: "茶几",
          english: "Tea Tables",
        },
        {
          id: 10014,
          chinese: "休闲椅",
          english: "Leisure Chairs",
        },
        {
          id: 10015,
          chinese: "角几",
          english: "Comer Tables",
        },
        {
          id: 10016,
          chinese: "边几",
          english: "Side Tables",
        },
        {
          id: 10017,
          chinese: "电视柜",
          english: "TV Stands",
        },
        {
          id: 10018,
          chinese: "书报架",
          english: "Book Cabinets",
        },
        {
          id: 10019,
          chinese: "脚踏",
          english: "Footrests",
        },
      ],
    };
  },
  methods: {
    inform(form) {
      this.$notify(form);
      console.log(1);
    },
  },
};
</script>
<style scoped lang='scss'>
.category-style-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.category-style-bg {
  width: 100%;
  height: 1.6rem;
  background-size: 100% 100%;
}
.cell-button {
  width: 80%;
  margin: 0 auto;
  padding: 0.1rem;
  border-bottom: 1px solid silver;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/deep/ .van-cell__right-icon {
  display: none;
}
/deep/.van-collapse-item__content {
  padding: 0;
}
</style>