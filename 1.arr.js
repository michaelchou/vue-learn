'use strict'
console.log('Hello World!')

// for,forEach,for in,for of的区别
// 1.forEach
let arr = [1, 2, 3, 4, 5];
arr.b = 'b';
// 编程式
// 支持return
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    // 1 2 3 4 5
}
// 声明式，不关心如何实现
// 不支持return
arr.forEach(function (item) {
    console.log(item);  // 1 2 3 4 5
});
// key会将内容变成字符串
// 包括数组的私有属性
for (let key in arr) {
    console.log(typeof key);    // String String String String String String 
    console.log(key);    // 1 2 3 4 5 b
}
// key会将内容变成字符串
// 不包含数组的私有属性
// for不可遍历对象
for (let key of arr) {
    console.log(typeof key);    // number number number number number
    console.log(key);   // 1 2 3 4 5
}
let obj = { school: 'hello', age: 'world' };
// for (let key of obj) {
//     console.log(key);   // obj is not iterable
// }
for (let val of Object.keys(obj)) {  // Object.keys将对象的key作为新的数组 ['school', 'age']
    console.log(obj[val]);   // obj is not iterable
}

// 2.filter 过滤------删除
// 是否操作原数组:否 
// 方法返回结果:过滤后的新数组 
// 回调函数的返回结果:如果返回true，表示这一项放到新数组
let _filter = [1, 2, 3, 4, 5].filter(function (item) {
    return item > 2 && item < 5;
});
console.log(_filter);

// 3.map 映射------更新 将原有的数组映射成一个系数组
// 是否操作原数组:否 
// 方法返回结果:过滤后的新数组 
// 回调函数的返回什么这一项就是什么
// <li>1</li><li>2</li><li>3</li>
let _map = [1, 2, 3].map((item) => {
    return `<li>${item}</li>`;  // ``是es6中的模板字符串 遇到变量用${}取值
});
console.log(_map);  // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]
console.log(_map.join('')); // <li>1</li><li>2</li><li>3</li>

// 4.includes 返回boolean
let arr3 = [1, 2, 3, 4, 55, 555];
console.log(arr3.includes(5));  // false
console.log(arr3.includes(55));  // true

// 5.find 返回找到的那一项 不会改变数组 回调函数中返回true表示找到了，找到后停止循环 找不到返回undefined
let _find = arr3.find(function (item) {    // 找到具体的某一项用find
    return item.toString().indexOf('5') > -1;
});
console.log(_find);    // 55

// 6.some 不会改变数组 回调函数中返回true表示找到了，找到后停止循环，返回true
let _some = arr3.some(function (item) {    // 找到具体的某一项用find
    return item.toString().indexOf('5') > -1;
});
console.log(_some);    // true
// 7.every 不会改变数组 回调函数中返回false表示找到了，找到后停止循环，返回false
let _every = arr3.every(function (item) {    // 找到具体的某一项用find
    return item.toString().indexOf('5') > -1;
});
console.log(_every);    // false

// 8.reduce 收敛函数 4个参数  返回的事叠加后的结果 回调函数返回的结果 原数组不发生变换
// 1次循环 previousValue 代表的数组的第一项，currentValue的第二项
// 2次循环 previousValue 是undefined，currentValue是第三项
// 单数组对象求和
let sum = [1, 2, 3, 4, 5].reduce(function (previousValue, currentValue, currentIndex, array) {
    // [Arguments] { '0': 1, '1': 2, '2': 1, '3': [ 1, 2, 3, 4, 5 ] }
    // [Arguments] { '0': undefined, '1': 3, '2': 2, '3': [ 1, 2, 3, 4, 5 ] }
    // [Arguments] { '0': undefined, '1': 4, '2': 3, '3': [ 1, 2, 3, 4, 5 ] }
    // [Arguments] { '0': undefined, '1': 5, '2': 4, '3': [ 1, 2, 3, 4, 5 ] }
    // console.log(arguments);

    // 1 2
    // undefined 3
    // undefined 4
    // undefined 5
    console.log(previousValue, currentValue);
    return previousValue + currentValue; // 本次的返回值会作为下一次循环中的previousValue
});
console.log(sum);   // 15

// 对象数据求和
let sum2 = [{ price: 30, count: 2 }, { price: 30, count: 3 }, { price: 30, count: 4 }].reduce(function (previousValue, currentValue) {
    // { price: 30, count: 2 } { price: 30, count: 3 }
    // undefined { price: 30, count: 4 }
    console.log(previousValue, currentValue);
    // { price: 30, count: 2 } { price: 30, count: 3 }
    // 180 { price: 30, count: 4 }
    // 停止计算，返回NaN
    // return previousValue.price * currentValue.count + currentValue.price * currentValue.count;
    return previousValue + currentValue.price * currentValue.count;
}, 0);  // 默认指定第一次 initialValue

console.log(sum2)   // 270 [0, { price: 30, count: 2 }, { price: 30, count: 3 }, { price: 30, count: 4 }]

// 二维数组合并为一维
let arr2_1 = [[1,2,3],[4,5,6],[7,8,9]].reduce(function (previousValue, currentValue) {
    return previousValue.concat(currentValue);
})
console.log(arr2_1);    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
