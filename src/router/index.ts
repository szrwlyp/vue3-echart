import { createRouter, createWebHistory } from "vue-router";

// 导入页面组件
import Home from "@/views/Home.vue";
import EChart2 from "@/views/EChart2.vue";
import EChart from "@/views/EChart.vue";
import PxToViewport from "@/views/PxToViewport.vue";
// 定义路由规则
const routes = [
  {
    path: "/", // 路径
    name: "Home", // 名称（可选）
    component: Home, // 对应的组件
  },
  {
    path: "/echart2", // 路径
    name: "echart2", // 名称（可选）
    component: EChart2, // 对应的组件
  },
  {
    path: "/echart", // 路径
    name: "echart", // 名称（可选）
    component: EChart, // 对应的组件
  },
  {
    path: "/PxToViewport", // 路径
    name: "PxToViewport", // 名称（可选）
    component: PxToViewport, // 对应的组件
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(), // 使用 HTML5 History 模式
  routes, // 路由规则
});

export default router;
