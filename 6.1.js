// 可以分别导出
export let hd = 'chuan';//导出具体名字就叫具名导出
export function show() {
    return 'show function';
}
export class User {
    static render() {
        return 'user static render';
    }
}

// 也可以一起导出
// export{hd，show，User}；