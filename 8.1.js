let site = 'chuan';

function show() {
    return 'show function';
}
class User {
    static render() {
        return 'user static render';
    }
}

export { site as hd, show, User };//可以在模块输出时改名