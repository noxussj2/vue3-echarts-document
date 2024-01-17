<script setup>
import Image1 from "./computed/_image1.png"
import Image2 from "./computed/_image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10016')
</script>

# <AppCode code="115" /> 计算属性 Computed

<ClientOnly><AppRead code="v10016" /></ClientOnly>

:::warning 注意
阅读本章内容之前必须先了解什么是 getter 、setter。 必须知道模板语法以及过滤器的使用。
:::

小伙伴们应该都知道选项 data 里面可以用来定义一些数据，也可以通过 props 接收父组件传进来的数据，props 接收进来的数据是不能进行修改的，这里在明确声明一下。当我们想对展示的数据进行修改，可以通过过滤器的方式，之前的文章有介绍过了，还可以通过表达式来修改，因为模板语法支持表达式。下面进行代码回顾一下，之前验证过了，这里就不验证了。

## 基础案例

**模板语法表达式**

```vue
<template>
    <div class="home">
        <div>{{ Math.round(price) }}</div>
    </div>
</template>
```

模板语法的表达式设计初衷是用于简单的数据运算，不适合太多复杂逻辑的运算。

**过滤器**

```vue
<template>
    <div class="home">
        <div>{{ price | format }}</div>
    </div>
</template>
```

过滤器其实就还好，内部使用复杂一点的运算逻辑也影响不大，但是使用场景就有限制，只能在模板语法或者表达式中使用。

## 计算属性 Computed

所以，对于任何复杂逻辑运算，你都应当使用计算属性 Computed。简单理解就是 Computed 在原来的 data 数据中基础上做了一些处理，处理完后用了一个新的变量进行存储，做的这些处理是不会影响原来的数据值的。并且 Computed 和选项 data 一样，使用的场景非常广泛，凡是能用 this 访问 Vue 实例的地方，都可以访问到 Computed 的数据。

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
    computed: {
        _price() {
            return Math.round(this.price)
        }
    }
}
</script>
```

预览效果

<AppImage :src="Image1" />

<AppPlayground href="https://codepen.io/noxussj/pen/BaPOyVR" />

**不能被修改**

因为 Computed 本身可能是基于选项 data 中的数据进行加工处理，可以理解它没有真身，所以无法给它赋值。我们平时在 Computed 编写的代码其实就是 getter 访问器，因为默认就是 getter，没有 setter。如果想要给 Computed 变量赋值，那么就需要给它设置 setter，代表赋值后要做什么事情？接下来进行实践一下。

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
    computed: {
        _price: {
            get() {
                return Math.round(this.price)
            },
            set(value) {
                this.price = value
            }
        }
    },
    mounted() {
        setTimeout(() => {
            this._price = 102.85
        }, 1000)
    }
}
</script>
```

预览效果

<AppImage :src="Image2" />

<AppPlayground href="https://codepen.io/noxussj/pen/JjBaoBg" />

代码中实现了 Computed 的 getter 、setter 写法。页面 dom 渲染完毕 1 秒后，会对 Computed 中的 `_price` 进行赋值，随即就会触发 setter 函数时，会对 选项 data 的值 `this.price` 进行修改。最后因为响应式的原理，Computed 的 `_price` 依赖了 `this.price`，所以 `this.price` 更新时，`_price` 的 getter 会重新进行计算。所以页面会显示出来 103。

<AppComment />