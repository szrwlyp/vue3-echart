// src/utils/chartManager.ts
import * as echarts from "echarts";
import { nextTick } from "vue";

type ChartInstance = echarts.ECharts;
const chartMap = new WeakMap<HTMLElement, ChartInstance>();

export const chartManager = {
  // 获取或创建实例
  getInstance(container: HTMLElement): ChartInstance | undefined {
    return chartMap.get(container);
  },

  // 初始化图表
  init(container: HTMLElement, options: echarts.EChartsOption): ChartInstance {
    const existingInstance = chartMap.get(container);
    if (existingInstance) return existingInstance;

    const instance = echarts.init(container);
    instance.setOption(options);
    nextTick(() => {
      instance?.resize();
    });
    chartMap.set(container, instance);
    return instance;
  },

  // 销毁实例
  dispose(container: HTMLElement) {
    const instance = chartMap.get(container);
    if (instance) {
      instance.dispose();
      chartMap.delete(container);
    }
  },
};
