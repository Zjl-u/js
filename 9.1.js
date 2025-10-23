// 默认导出方法1
// export default class User {
//     static render() {
//         return 'user tatic user';
//     }
// }

// 默认导出方法2
class User {
    static render() {
        return 'user tatic user';
    }
}
// export { User as default };

// 默认导出方法3（在接口外写）
export { User };