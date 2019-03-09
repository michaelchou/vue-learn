// arrow fn 不具备this和arguments
// 由于自己不存在this，就查找上一级this

// 问题：如果更改this指向
// 1） call apply bind
// 2) var that = this;
// 3) => 箭头函数

// 问题：如何确定this是谁
// 和在哪定义无关，看是谁调用，.前面是谁，this就是谁

// 如何写箭头函数
function a(b) {
    return b + 1;
}
let _a = b => b + 1;
// 1) 去掉function关键字
// 2）参数如果有一个，可以省略小括号()
// 3) 小括号()和大括号{}之间有一个=>
// 4) 如果没有大括号{}则直接是返回值，有大括号{}必须有return

// 栗子
function aa(bb) {
    return function (cc) {
        return bb + cc;
    }
}
console.log(aa(1)(2));

let _aa = bb => cc => bb + cc;  // 高阶函数 2个(含)箭头函数以上的
console.log(_aa(1)(2));

// 闭包：函数执行的一瞬间叫闭包。
// 特点：不销毁的作用域，当执行后返回的结果必须是引用数据类型(Object,Array,Date,RegExp,Function)，被外界变量接收，此时这个函数不会销毁
// 模块化

[1, 2, 3].forEach(item => console.log(item));

// PS：在vue中，很多时候不能使用=>箭头函数