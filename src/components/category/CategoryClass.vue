<template>
  <wsf-for-image :background-images="backgroundImages"></wsf-for-image>
</template>
<script>
import WsfForImage from "../myModule/WsfForImage";

export default {
  components: {
    WsfForImage,
  },
  data() {
    return {
      backgroundImages: [
        {
          id: 1001,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/25.png')",
        },
        {
          id: 1002,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/24.png')",
        },
        {
          id: 1003,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/23.png')",
        },
        {
          id: 1004,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/22.png')",
        },
        {
          id: 1005,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/21.png')",
        },
        {
          id: 1006,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/20.png')",
        },
        {
          id: 1007,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/19.png')",
        },
        {
          id: 1008,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/18.png')",
        },
        {
          id: 1009,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/17.png')",
        },
        {
          id: 10010,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/16.png')",
        },
        {
          id: 10011,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/15.png')",
        },
        {
          id: 10012,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/14.png')",
        },
        {
          id: 10013,
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/13.png')",
        },
      ],
    };
  },
};
</script>