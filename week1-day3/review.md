## vue第二天复习
- v-model(如果checkbox、select多选是数组，提供一个value属性)(radio checkbox分组靠的v-model),checked selected不存在
- 修饰符 .number .lazy
- 按键修饰符 .enter .ctrl .keyCode
- 事件
    - @事件.stop(阻止事件传递)
    ```
    阻止冒泡 stopPropagation, cancelBubble=true, 
    ```
    - @事件.capture
    ```
    xxx.addEventListener("click", fn, true)
    ```
    - @事件.prevent
    ```
    preventDefault, returnValue=false
    ```
    - @事件.once
    ```
    on("click").off("click")
    ```
    - @事件.self
    ```
    e.srcElement && e.target判断事件绑定事件
    ```
## filters

## computed 计算“属性” 不是方法
- 方法不会有缓存，computed会根据依赖的属性进行缓存
- 两部分组成有get和set（不能只写set，可以单独有get）


