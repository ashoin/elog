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
          chinese: "简美",
          english: "Simple American",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/8.png')",
        },
        {
          id: 1002,

          chinese: "新中式",
          english: "Neo-Chinese",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/9.png')",
        },
        {
          id: 1003,

          chinese: "北欧",
          english: "Nordic",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/10.png')",
        },
        {
          id: 1004,

          chinese: "现代",
          english: "Modern",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/11.png')",
        },
        {
          id: 1005,

          chinese: "欧式新古典",
          english: "Eurpean Neo Classicism",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/12.png')",
        },
      ],
    };
  },
};
</script>
