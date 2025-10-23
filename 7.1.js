let hd = 'chuan';//导出具体名字就叫具名导出
function show() {
    return 'show function';
}
class User {
    static render() {
        return 'user static render';
    }
}

export { hd, show, User };