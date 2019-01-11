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