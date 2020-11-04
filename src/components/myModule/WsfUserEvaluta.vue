<template>
  <div class="user-evalute-container">
    <div class="just-for-style" v-for="user in userInfoList" :key="user.id">
      <div class="user-info">
        <div class="user">
          <van-image width="1rem" height="1rem" :src="user.avator" />
          <div class="user-name">
            <span style="font-size: 0.32rem">{{ user.name }}</span>
            <span style="font-size: 0.2rem">{{ user.goods }}</span>
          </div>
        </div>
        <span>{{ user.date }}</span>
      </div>
      <div class="user-show-info">
        <span>{{ user.evalute }}</span>
        <div class="show-images">
          <van-image
            :src="image"
            v-for="image in user.images"
            :key="image.index"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["userInfoList"],
};
</script>
<style scoped lang = 'scss'>
.user-evalute-container {
  background: white;
  padding: 0 0.28rem;
}
.just-for-style {
  padding: 0.1rem 0;
  border-bottom: 1px solid #ededed;
}
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 0;
  color: #808080;
  .user {
    display: flex;
    justify-content: center;
    align-items: center;
    .user-name {
      margin-left: 0.1rem;
      display: flex;
      flex-direction: column;
    }
  }
}

.user-show-info {
  padding-bottom: 0.2rem;
  span {
    font-size: 0.3rem;
  }
  .show-images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .van-image {
      width: 2.2rem;
      height: 1.4rem;
      margin: 0.15rem 0;
    }
  }
}
</style>