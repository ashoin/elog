<template>
  <div class="refresh" v-if="!networkSuccess">
    <h1>我断网了</h1>
    <van-button type="danger" @click="onRefresh()">点我刷新</van-button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    onRefresh() {
      this.$router.go(-1); //返回之前点击的页面
    },
  },
  computed: {
    ...mapState(["networkSuccess"]),
  },
};
</script>
<style scoped>
.refresh {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>