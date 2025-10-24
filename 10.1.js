// 第一种方法 分开写
// export let site = 'chuan';
// export default class User {
//     static render() {
//         return 'User static render';
//     }
// }

// 第二种方法 合在一起
let site = 'chuan';
class User {
    static render() {
        return 'User static render';
    }
}
export { User as default, site };