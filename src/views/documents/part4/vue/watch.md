<script setup>
import Image1 from "./watch/_image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10017')
</script>

# <AppCode code="116" /> 侦听器 Watch

<ClientOnly><AppRead code="v10017" /></ClientOnly>

:::warning 注意
阅读本章内容之前必须先了解什么是 计算属性 Computed。<br />
相比计算属性，计算属性更适合用来做一些数据加工、过滤等处理。<br />
而侦听器更适合用来监听一个数据是否发生变化（包含 data、props、computed），如果发生变化则触发特定的函数操作。<br />
定义 Watch 侦听器函数时，请不要使用箭头函数。
:::

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动。侦听器 Watch 是一个对象，键是需要观察的表达式，值是对应回调函数。有一点需要注意，当你有一些数据需要随着其它数据变动而变动时，你很容易就会滥用 Watch，如有类似这种情况使用 Computed 才是更合适。当需要在数据变化时执行异步或开销较大的操作时，使用 Watch 更合适。Watch 侦听器使用的越多，性能就会越差，所以尽量不要滥用。

## 基础案例

```vue
<template>
    <div class="home">
        <div>{{ _price }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price: 100.85
        }
    },
    watch: {
        price: function () {
            console.log('我被修改了')
        }
    },
    mounted() {
        setTimeout(() => {
            this.price = 102.85
        }, 1000)
    }
}
</script>
```

预览效果

<AppImage :src="Image1" />

<AppPlayground href="https://codepen.io/noxussj/pen/OJwoPGj" />

页面渲染 dom 完毕 1 秒 后进行修改了 `this.price`，触发了侦听器 `price` 函数，所以在控制台打印了信息。

## 与计算属性 Computed 区别？

侦听器 Watch 和 计算属性 Computed 是完全独立的功能，虽然有点接近，但是两者没有任何关联的。

以现实生活举例，侦听器 Watch 就像监听我的手机号码，如果我的手机号码变化了，那么就要执行一个函数，这个函数里面执行了告诉我的家人，同事，朋友语句。而计算属性 Computed 是在原来某样东西的基础上进行加工，就像一杯白开水，我觉得不好喝，不满足我的需求，我就要加工，在它的基础上我加入了炼奶，最后成了一杯牛奶。

<AppComment />