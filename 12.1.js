// 我们可以把要用的模块一个一个写
// import { site, url } from './12.2.js';
// import User, { web } from './12.3.js';
// console.log(User.show());

// 也可以吧它们导入进一个js里，把所有接口导出
import *as m124 from "./12.4.js";
console.log(m124.m122.site);
console.log(m124.m123.default.show());