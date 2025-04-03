// src/types/chart-manager.d.ts
declare module "@/utils/chartManager" {
  import type { ECharts, EChartsOption } from "echarts";

  export const chartManager: {
    getInstance(container: HTMLElement): ECharts | undefined;
    init(container: HTMLElement, options: EChartsOption): ECharts;
    dispose(container: HTMLElement): void;
  };
}
