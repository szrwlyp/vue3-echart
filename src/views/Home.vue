<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import type { EChartsOption } from "echarts";
import { chartManager } from "@/utils/chartManager";
import { nextTick } from "vue";

// 图表配置数组
const chartConfigs = ref<EChartsOption[]>([
  {
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
  } as EChartsOption,
  {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  },
  {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  },
  {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  },
  {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  },
  {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  },
  {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  },
  {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  },
  {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  },
]);

// 图表容器引用
const chartRefs = ref<HTMLElement[]>([]);

// 设置引用并初始化图表
const setChartRef = (el: HTMLElement | null, index: number) => {
  if (!el) return;

  chartRefs.value[index] = el;
  chartManager.init(el, chartConfigs.value[index]);
};

// 防抖函数 (200ms延迟)
const debounce = (fn: Function, delay = 300) => {
  let timer: any = null;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
// 窗口变化处理
const handleResize = debounce(() => {
  chartRefs.value.forEach(async (el) => {
    const instance = chartManager.getInstance(el);
    instance?.resize();
    await nextTick();
  });

  // window.location.reload(); // 刷新页面
});

// 生命周期
onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
  chartRefs.value.forEach((el) => chartManager.dispose(el));
});
</script>

<template>
  <div class="e-demo">
    <div
      v-for="(_, index) in chartConfigs"
      :key="index"
      :ref="(el) => setChartRef(el as HTMLElement, index)"
      class="grid-item"
      :class="{ item2: index === 1 }"
    ></div>
    <!-- :class="{ item2: index === 1 }" -->
    <!-- <div class="grid-item" id="item1">Item 1</div>
    <div class="grid-item item2" id="item2">Item 2</div>
    <div class="grid-item">Item 3</div>
    <div class="grid-item">Item 4</div>
    <div class="grid-item">Item 5</div>
    <div class="grid-item">Item 6</div>
    <div class="grid-item">Item 7</div>
    <div class="grid-item">Item 8</div>
    <div class="grid-item">Item 9</div> -->
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
