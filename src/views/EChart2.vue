<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from "echarts";
import { nextTick } from "vue";

// 防抖函数 (200ms延迟)
const debounce = (fn: Function, delay = 500) => {
  let timer: any = null;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

let item1Instance: any = null;
let item2Instance: any = null;
let item3Instance: any = null;
let item4Instance: any = null;
let item5Instance: any = null;
let item6Instance: any = null;
let item7Instance: any = null;
let item8Instance: any = null;
let item9Instance: any = null;
// 窗口变化处理
const handleResize = debounce(async () => {
  await nextTick();
  item1Instance?.resize();
  item2Instance?.resize();
  item3Instance?.resize();
  item4Instance?.resize();
  item5Instance?.resize();
  item6Instance?.resize();
  item7Instance?.resize();
  item8Instance?.resize();
  item9Instance?.resize();
});
onMounted(() => {
  let options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: "line",
      },
    ],
  };
  item1Instance = echarts.init(document.getElementById("item1"));
  item1Instance.setOption(options);
  item2Instance = echarts.init(document.getElementById("item2"));
  item2Instance.setOption(options);
  item3Instance = echarts.init(document.getElementById("item3"));
  item3Instance.setOption(options);
  item4Instance = echarts.init(document.getElementById("item4"));
  item4Instance.setOption(options);
  item5Instance = echarts.init(document.getElementById("item5"));
  item5Instance.setOption(options);
  item6Instance = echarts.init(document.getElementById("item6"));
  item6Instance.setOption(options);
  item7Instance = echarts.init(document.getElementById("item7"));
  item7Instance.setOption(options);
  item8Instance = echarts.init(document.getElementById("item8"));
  item8Instance.setOption(options);
  item9Instance = echarts.init(document.getElementById("item9"));
  item9Instance.setOption(options);
  window.addEventListener("resize", handleResize);
});
</script>

<template>
  <div class="e-demo">
    <div class="grid-item" id="item1">Item 1</div>
    <div class="grid-item item2" id="item2">Item 2</div>
    <div class="grid-item" id="item3">Item 3</div>
    <div class="grid-item" id="item4">Item 4</div>
    <div class="grid-item" id="item5">Item 5</div>
    <div class="grid-item" id="item6">Item 6</div>
    <div class="grid-item" id="item7">Item 7</div>
    <div class="grid-item" id="item8">Item 8</div>
    <div class="grid-item" id="item9">Item 9</div>
  </div>
</template>

<style lang="scss" scoped>
.e-demo {
  height: calc(100vh - 20px);
  width: calc(100vw - 20px);
  display: grid;
  grid-template-rows: repeat(3, 1fr); /* 定义 3 行，每行等分 */
  grid-template-columns: repeat(4, 1fr); /* 定义 4 列，每列等分 */
  gap: 10px;
  padding: 10px;
}
/* 定义通用样式 */
.grid-item {
  background-color: #4caf50;
  color: white;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
}

.item2 {
  grid-row: 1 / 3;
  grid-column: 2 / span 2;
}
</style>
