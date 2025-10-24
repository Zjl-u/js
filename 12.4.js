// 也可以吧它们导入进一个js里，把所有接口导出
// import { site, url } from './12.2.js';
// import User, { web } from './12.3.js';
// export { site, url, User, web };

// 如果俩模块导出的接口有重名的
import * as m122 from './12.2.js';
import * as m123 from './12.3.js';
export { m122, m123 };