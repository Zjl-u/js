// (function (window) {
//     function hd() {
//         console.log('4.1.js-hd');
//     }
//     function show() {
//         console.log('4.1.js-show');
//     }
//     window.js1 = { hd, show };
// })(window)

// 另一种写法（块作用域
{
    let hd = function () {
        console.log('4.1.js-hd');
    };
    let show = function () {
        console.log('4.1.js-show');
    };
    window.js1 = { hd, show };
}