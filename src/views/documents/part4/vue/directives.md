<script lang="ts" setup>
import Image1 from "./directives/_image1.png"
import Image2 from "./directives/_image2.png"
import Image3 from "./directives/_image3.png"
import Image4 from "./directives/_image4.png"
import Demo1 from "./directives/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('v10006')
</script>

# <AppCode code="105" /> 指令

<ClientOnly><AppRead code="v10006" /></ClientOnly>

指令 (Directives) 是带有 v- 前缀的特殊 attribute。指令 attribute 的值预期是单个 JavaScript 表达式。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

<table border="0" cellspacing="0" cellpadding="0" width="auto">
    <thead>
        <tr>
            <th>常用指令</th>
            <th>预期</th>
            <th>简短介绍</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>v-show</td>
            <td>any</td>
            <td>显示隐藏元素，通过 display: none 的方式。</td>
        </tr>
        <tr>
            <td>v-if</td>
            <td>any</td>
            <td>显示隐藏元素，元素中不会渲染在 dom 中。</td>
        </tr>
        <tr>
            <td>v-for</td>
            <td>Array | Object | number | string | Iterable</td>
            <td>主要遍历对象或数组，并返回当前项和索引。</td>
        </tr>
        <tr>
            <td>v-on</td>
            <td>Function</td>
            <td>绑定事件监听器</td>
        </tr>
        <tr>
            <td>v-bind</td>
            <td>any</td>
            <td>动态绑定属性</td>
        </tr>
        <tr>
            <td>v-model</td>
            <td>any</td>
            <td>在表单控件或者组件上创建双向绑定</td>
        </tr>
    </tbody>
</table>

## v-show

主要作用是显示隐藏元素，通过 `display: none` 的方式。当表达式成立时，不做任何处理，但是表达式不成立时，则会给元素添加 `display: none` 属性。

```vue
<template>
    <div class="home">
        <span v-show="age > 100">Hello World</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: 80
        }
    }
}
</script>
```

<AppImage :src="Image1" />

<AppPlayground href="https://codepen.io/noxussj/pen/oNMPNOJ" />

## v-if

主要作用是显示隐藏元素，和 `v-show` 类似，但是 `v-if` 在条件不成立时，不会在 DOM 中渲染该元素。

```vue
<template>
    <div class="home">
        <span v-if="age > 100">Hello World</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: 80
        }
    }
}
</script>
```

<AppImage :src="Image2" />

<AppPlayground href="https://codepen.io/noxussj/pen/xxJaxNa" />

## v-for

主要遍历对象或数组，并返回当前项和索引，当然也可以遍历数字以及字符串。使用 `v-for` 的时候必须要把 `key` 属性带上，并且 `key` 是作为唯一值。其中 `item` 代表每一项的值，`index` 代表每一项的索引值，这两者都是可以自定义命名的。`in list` 代表需要遍历的变量名称。

**遍历一维数组**

```vue
<template>
    <div class="home">
        <div v-for="(item, index) in list" :key="index">{{ item }} -- {{ index }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: ['xiaoming', 'xiaohong', 'libai']
        }
    }
}
</script>
```

<AppCard>
    <div>xiaoming -- 0</div>
    <div>xiaohong -- 1</div>
    <div>libai -- 2</div>
</AppCard>

<AppPlayground href="https://codepen.io/noxussj/pen/NWBLPKR" />

<br />

**遍历对象数组**

```vue
<template>
    <div class="home">
        <div v-for="(item, index) in list" :key="index">{{ item.name }} -- {{ item.age }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    name: 'xiaoming',
                    age: 18
                },
                {
                    name: 'xiaohong',
                    age: 20
                },
                {
                    name: 'libai',
                    age: 22
                }
            ]
        }
    }
}
</script>
```

<AppCard>
    <div>xiaoming -- 18</div>
    <div>xiaohong -- 20</div>
    <div>libai -- 22</div>
</AppCard>

<AppPlayground href="https://codepen.io/noxussj/pen/KKBxwpq" />

<br />

**遍历对象**

```vue
<template>
    <div class="home">
        <div v-for="(item, index) in obj" :key="index">{{ item }} -- {{ index }}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            obj: {
                name: 'xiaoming',
                age: 18,
                like: 'running'
            }
        }
    }
}
</script>
```

<AppCard>
    <div>xiaoming -- name</div>
    <div>18 -- age</div>
    <div>running -- like</div>
</AppCard>

<AppPlayground href="https://codepen.io/noxussj/pen/QWBVwyv" />

## v-on

绑定事件监听器。在绑定的时候我们需要注意绑定的对象是原生 DOM 元素还是 Vue 的自定义组件。如果是原生 DOM 元素则会触发 DOM 事件，如果是自定义组件则会触发组件内 `emit` 事件。`v-on` 的缩写是 `@` 这个比较常用。

**原生 DOM 元素事件**

dom 原生事件有很多，但是都是固定的名称，不能够自定义。例如 `click` `input` `change` 事件等等。

```vue
<template>
    <div class="home">
        <button @click="handleClick">提交</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            alert('我被点击了')
        }
    }
}
</script>
```

<AppPlayground href="https://codepen.io/noxussj/pen/dyjqPXB" />

**Vue 自定义组件**

当子组件内部调用 `emit("event1")` 时，则 `handleClick` 就会被触发。这里的 `@` 事件名是可以自定义的。

index.vue 父组件

```vue
<template>
    <div class="home">
        <my-child-components @event1="handleClick"></my-child-components>
    </div>
</template>

<script>
import MyChildComponents from './my-child-components.vue'

export default {
    components: { MyChildComponents },
    methods: {
        handleClick() {
            console.log('我被触发了')
        }
    }
}
</script>
```

my-child-components 子组件

```vue
<template>
    <div class="my-child-components">
        <button @click="handleClick">点我</button>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$emit('event1')
        }
    }
}
</script>
```

## v-bind

动态绑定属性，通常我们给一个 dom 元素添加属性时，基本上都是固定不变的，所以能通过 `v-bind` 可以变为动态的，使得开发更加便捷。`v-bind` 和 `v-on` 一样也是有缩写的，`v-bind` 的缩写是英文的冒号 `:` 这个也是比较常用的。当我们绑定属性时，无论是静态还是动态，有一个地方需要注意，就是你绑定的元素是原生 DOM 元素，还是 Vue 的自定义组件。如果是原生的 DOM 元素则没有什么影响，但是如果是 Vue 的自定义属性，则是可以在其组件内部通过 `props` 接收传入的属性哦。如果子组件中没有通过 `props` 接收父组件传入的动态属性，则会作用到子组件的根原生 DOM 元素上。

**Vue 自定义组件**

index.vue 父组件

```vue
<template>
    <div class="home">
        <my-child-components :list="list"></my-child-components>
    </div>
</template>

<script>
import MyChildComponents from './my-child-components.vue'

export default {
    components: { MyChildComponents },
    data() {
        return {
            list: ['xiaoming', 'xiaohong', 'libai']
        }
    }
}
</script>
```

my-child-components 子组件

```vue
<template>
    <div class="my-child-components">
        {{ list }}
    </div>
</template>

<script>
export default {
    props: ['list']
}
</script>
```

<AppImage :src="Image3" />

<br />

**原生 DOM 元素动态属性**

```vue
<template>
    <div class="home">
        <div :name="name">内容1</div>
        <div :class="[age > 100 ? 'big-age' : 'small-age']">内容2</div>
        <div :style="{ width: width }">内容2</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            age: 80,
            name: 'xiaoming',
            width: '100px'
        }
    }
}
</script>
```

<AppImage :src="Image4" />

## v-model

一般都是在原生 DOM 元素上，并且是表单元素进行使用 `v-model`，更高级的用法就是给 Vue 自定义组件使用 `v-model` 属性，当然实现起来会复杂很多。想要在自定义组件上实现 `v-model`，则必须先了解 `v-model` 的实现原理。

**典型双向数据绑定例子**

这个例子刚好也诠释了 MVVM 模式是什么效果。当我们修改数据层上 value 的值时，视图上的 value 也会跟着变化。当我们通过视图中的 input 修改绑定的 value 时，数据层上的 value 也会实时跟着改变。

```vue
<template>
    <div class="home">
        <div>实时更新的值：{{ value }}</div>
        <input v-model="value" type="text" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
```

<AppCard>
    <Demo1 />
</AppCard>

<AppComment />