<script setup>
import Image1 from "./filters/_image1.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10013')
</script>

# <AppCode code="112" /> 过滤器 Filters

<ClientOnly><AppRead code="v10013" /></ClientOnly>

过滤器一般用于格式化文本内容，通常可以在两个地方使用，主要是模板语法、以及 `v-bind` 表达式中。例如我想对展示的文本进行一些特殊处理，将金额进行四舍五入后再展示。选项 filters 内可以编写多个自定义过滤器。

用法：变量名或文本 | 过滤器名称

```vue
<template>
    <div class="home">
        <div>{{ price | format }}</div>
        <div :num="price | format">xiaoming</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            price: 100.85
        }
    },
    filters: {
        format: function (num) {
            if (!num) return ''

            return Math.round(num)
        }
    }
}
</script>
```

预览效果

<AppImage :src="Image1" />

<AppPlayground href="https://codepen.io/noxussj/pen/JjBaoyV" />

<AppComment />