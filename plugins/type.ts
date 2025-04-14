export interface Options {
  viewPortWidth?: number;
  mediaQuery?: boolean;
  unitToConvert?: string;
  include?: (string | RegExp)[]; // 新增 includePaths 参数
}
