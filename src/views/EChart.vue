<script setup lang="ts">
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
import { nextTick } from "vue";

// 防抖函数 (200ms延迟)
const debounce = (fn: Function, delay = 300) => {
  let timer: any = null;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

let width = ref(document.body.clientWidth / 4 - 10);
let height = ref(document.body.clientHeight / 3 - 10);
// let width = ref(document.body.clientWidth / 4);
// let height = ref(document.body.clientHeight / 3);
console.log(width.value, height.value);

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
  width.value = document.body.clientWidth / 4 - 10;
  height.value = document.body.clientHeight / 3 - 10;
  await nextTick();
  console.log(item1Instance);
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
    <div class="item-side">
      <div
        class="grid-item"
        :style="{ width: width + 'px', height: height + 'px' }"
        id="item1"
      ></div>
      <div
        class="grid-item"
        :style="{ width: width + 'px', height: height + 'px' }"
        id="item2"
      ></div>
      <div
        class="grid-item"
        :style="{ width: width + 'px', height: height + 'px' }"
        id="item3"
      ></div>
    </div>
    <div class="item-side">
      <div
        class="grid-item"
        id="item4"
        :style="{
          width: width * 2 + 10 + 'px',
          height: height * 2 + 10 + 'px',
        }"
      ></div>
      <div style="display: flex">
        <div
          class="grid-item"
          id="item5"
          :style="{ width: width + 'px', height: height + 'px' }"
        ></div>
        <div
          class="grid-item"
          id="item6"
          :style="{ width: width + 'px', height: height + 'px' }"
        ></div>
      </div>
    </div>
    <div class="item-side">
      <div
        class="grid-item"
        :style="{ width: width + 'px', height: height + 'px' }"
        id="item7"
      ></div>
      <div
        class="grid-item"
        :style="{ width: width + 'px', height: height + 'px' }"
        id="item8"
      ></div>
      <div
        class="grid-item"
        :style="{ width: width + 'px', height: height + 'px' }"
        id="item9"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.e-demo {
  /* height: calc(100vh - 20px);
  width: calc(100vw - 20px); */
  height: 100vh;
  width: 100vw;
  display: flex;
  /* padding: 10px; */
  /* gap: 10px; */
}
.item-side {
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
}

.grid-item {
  background-color: #4caf50;
  color: white;
  text-align: center;
  font-size: 20px;
  border-radius: 5px;
  margin: 5px;
}
</style>
