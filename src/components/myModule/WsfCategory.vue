<template>
  <div class="wsf-category-main">
    <div class="category-top">
      <p style="font-size: 0.4rem; padding: 0; margin: 0.2rem 0">
        {{ goodsList.goodsTitle.title }}
      </p>
      <van-image
        style="width: 6rem; height: 3rem"
        :src="goodsList.goodsTitle.src"
      />
      <p style="padding: 0; margin: 0 0 0.2rem 0">
        {{ goodsList.goodsTitle.name }}
      </p>
      <span style="color: red">{{ goodsList.goodsTitle.price }}</span>
    </div>
    <div class="category-grid">
      <van-grid :border="true" :column-num="2">
        <van-grid-item v-for="goods in goodsList.goodsShow" :key="goods.id">
          <van-image
            width="3rem"
            height="1.5rem"
            fit="contain"
            :src="goods.url"
          />
          <p style="padding: 0; margin: 0 0 0.2rem 0">{{ goods.name }}</p>
          <span style="color: red">{{ goods.price }}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="category-bottom">
      <button>查看更多</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["goodsList"],
};
</script>
<style scoped>
.wsf-category-main {
  width: 100%;
  border-top: 1px solid silver;
  margin-bottom: 0.2rem;
}
.category-bottom {
  margin-top: 0.2rem;
}
</style>