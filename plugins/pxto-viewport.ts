import type { Options } from "./type";
import type { Plugin } from "postcss";
const defaultOptions = {
  viewPortWidth: 375,
  mediaQuery: false,
  unitToConvert: "px",
  include: [], // 默认不限制路径
};
export const pxToViewport = (options: Options = defaultOptions): Plugin => {
  const opt = Object.assign({}, defaultOptions, options);

  return {
    postcssPlugin: "postcss-px-to-viewport",
    //css节点都会经过这个钩子
    Declaration(node) {
      const value = node.value;
      // 获取当前 CSS 文件的绝对路径
      const filePath = node.source?.input.file;

      // 路径匹配检查
      const isInclude = opt.include.some((pattern) => {
        if (!filePath) return false;
        return typeof pattern === "string"
          ? filePath.includes(pattern)
          : pattern?.test(filePath);
      });

      console.log("filePath", opt.include.length > 0 && !isInclude);
      // 未配置 include 或路径不匹配时跳过
      if (opt.include.length > 0 && !isInclude) return;

      //匹配到px 转换成vw
      if (value.includes(opt.unitToConvert)) {
        const num = parseFloat(value);
        const transformValue = (num / opt.viewPortWidth) * 100;
        node.value = `${transformValue.toFixed(2)}vw`; //转换之后的值
      }
    },
  };
};
