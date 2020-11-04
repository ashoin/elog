<template>
  <wsf-collapse :background-images="backgroundImages"></wsf-collapse>
</template>
<script>
import WsfCollapse from "../myModule/WsfCollapse";

export default {
  components: {
    WsfCollapse,
  },
  data() {
    return {
      backgroundImages: [
        {
          id: 1001,
          chinese: "简美",
          english: "Simple American",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/1.png')",
        },
        {
          id: 10012,
          chinese: "简美",
          english: "Simple American",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/3.png')",
        },
        {
          id: 10013,
          chinese: "简美",
          english: "Simple American",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/4.png')",
        },
        {
          id: 10014,
          chinese: "简美",
          english: "Simple American",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/5.png')",
        },
        {
          id: 10015,
          chinese: "简美",
          english: "Simple American",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/6.png')",
        },
        {
          id: 10016,
          chinese: "简美",
          english: "Simple American",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/7.png')",
        },
        {
          id: 10017,
          chinese: "简美",
          english: "Simple American",
          style:
            "background-image:url('https://tiechuimeimeia.oss-cn-hangzhou.aliyuncs.com/category/category-content/2.png')",
        },
      ],
    };
  },
};
</script>