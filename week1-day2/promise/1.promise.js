
"use strict"

// 回调函数是将后续的处理逻辑传入到当前要做的事情中，当事情完成后调用此函数

function buy(callback) {
    setTimeout(()=>{
        let a = "fish";
        callback(a);
    }, 2000);
}

function cook(value) {
    console.log(value);
}

buy(cook);

// promise 解决回调问题
// promise 的三个状态 成功，失败，等待
// 栗子
