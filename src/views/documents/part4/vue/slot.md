<script lang="ts" setup>
import Image1 from "./slot/_image1.png"
import Image2 from "./slot/_image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10009')
</script>

# <AppCode code="108" /> 插槽

<ClientOnly><AppRead code="v10009" /></ClientOnly>

:::warning 注意
阅读该文章之前，已经确认你掌握了组件的基础知识，包含如何注册组件、引入子组件、组件之间的传递参数方式等。
:::

我们都知道父组件是可以传递数据给子组件的，传递的数据类型包含字符串、数值、对象、数组、函数等。我要是想传递原生 dom 结构或者其他组件进去呢？以及传递进去后需要在指定的地方进行展示？通过 props 实现是不是就不太行了。所以这里就有了插槽，插槽就是可以传递你的 html 部分代码进去。

Home.vue

```vue
<template>
    <div class="home">
        <MyChildren>
            <div slot="parent">parent:我是父组件传进来的 div</div>
        </MyChildren>
    </div>
</template>

<script>
import MyChildren from './MyChildren.vue'
export default {
    components: { MyChildren }
}
</script>

<style>
.home {
    width: 200px;
    height: 200px;
    background-color: blueviolet;
}
</style>
```

MyChildren.vue

```vue
<template>
    <div class="my-child-component">
        <slot name="parent"></slot>
    </div>
</template>

<style>
.my-child-component {
    width: 150px;
    height: 100px;
    background-color: brown;
}
</style>
```

预览效果

<AppImage :src="Image1" />

可以发现，我们的 parent div 标签已经传入到子组件里面去了，并且也在子组件里面进行了接收，slot 标签代表展示的位置，slot 中的 name 代表接收的参数名称，这里可能就会想到了，插槽是可以传入多个的，如果传入多个，则会按不同的 name 进行区分。

最后就到了，什么场景下会使用到插槽？为什么不直接在子组件里面写好插槽的 dom，然后利用 props 传递数据进去，这样不是更方便吗？以下继续进行举例。

<AppImage :src="Image2" />

假设标记绿色的部分是一个可复用的标题组件，左侧的标题可以通过 props 在子组件接收标题名称进行展示，可是右侧的展示形式不同，有 4 种情况，所以用 props 无法解决这个问题，除非你传入一个 type ，通过 v-if 不同的 type 展示不同的 dom 元素。这种方法有个弊端，万一有 100 种情况，那岂不是要在这个组件里面写 100 种展示形式，那这个组件可能要被代码撑爆了。

所以这种情况使用 slot 插槽是最合适的，这样标题组件里面就无需管理右侧的部分了。调用标题组件的时候，不同的展示形式就传入不同的 dom 元素即可。

<AppComment />