"use strict"
// resovle代表转向成功态
// reject代表转向失败态
// 两个参数都是函数
// Promise的实例有一个then方法
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 2;
        resolve(a)
    }, 2000)
});
promise.then((value) => {
    console.log(value);
}, () => {
});
