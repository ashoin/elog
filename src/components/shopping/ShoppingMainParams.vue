<template>
  <div class="main-params-container">
    <div class="params-list" v-for="params in paramsList" :key="params.id">
      <span>{{ params.text1 }}</span>
      <span>{{ params.text2 }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paramsList: [
        {
          id: 100011,
          text1: "商品风格",
          text2: "现代",
        },
        {
          id: 100012,
          text1: "主要材料",
          text2: "白橡树",
        },
        {
          id: 100013,
          text1: "产地",
          text2: "江苏徐州",
        },
        {
          id: 100014,
          text1: "油漆工艺",
          text2: "环保漆",
        },
        {
          id: 100015,
          text1: "商品毛重",
          text2: "30Kg",
        },
        {
          id: 100016,
          text1: "组装情况",
          text2: "组装",
        },
        {
          id: 100017,
          text1: "其它",
          text2: "都挺好",
        },
      ],
    };
  },
};
</script>
<style lang='scss' scoped>
.main-params-container {
  background: white;
  margin-top: 1px;
}
.params-list {
  height: 0.8rem;
  padding: 0 0.3rem;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
  span {
    width: 2rem;
    margin-right: 0.5rem;
    font-size: 0.3rem;
  }
}
</style>