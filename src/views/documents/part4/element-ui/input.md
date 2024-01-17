<script setup>
import Demo1 from "./input/Demo1.vue"
import Demo2 from "./input/Demo2.vue"
import Demo3 from "./input/Demo3.vue"
import Demo4 from "./input/Demo4.vue"
import Demo5 from "./input/Demo5.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10012')
</script>

# <AppCode code="136" /> Input 输入框

<ClientOnly><AppRead code="u10012" /></ClientOnly>

通过鼠标或键盘输入字符

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { Input } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-ui/lib/theme-chalk/input.css'

Vue.use(Input)
```

## 基础使用

当 `value` 的值在 `script` 中被修改了，那么 `input` 输入框中也会实时更新对应的值。

```vue
<el-input v-model="value" placeholder="请输入内容"></el-input>

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

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## 禁用状态

输入框不可用状态。

```vue
<el-input disabled v-model="value" placeholder="请输入内容"></el-input>

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

:::warning 注意
在浅色模式中会更加明显看到禁用样式。
:::

<AppCardBlank>
    <Demo2 />
</AppCardBlank>

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框。

```vue
<el-input v-model="value" placeholder="请输入密码" show-password></el-input>

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

<AppCardBlank>
    <Demo3 />
</AppCardBlank>

## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 `textarea`。

```vue
<el-input type="textarea" :rows="3" v-model="value" placeholder="请输入内容"></el-input>

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

<AppCardBlank>
    <Demo4 />
</AppCardBlank>

## 输入长度限制

`maxlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 `Javascript` 的字符串长度统计的。对于类型为 `text` 或 `textarea` 的输入框，在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 属性来展示字数统计。

```vue
<el-input type="text" v-model="value" placeholder="请输入内容" maxlength="10" show-word-limit></el-input>

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

<AppCardBlank>
    <Demo5 />
</AppCardBlank>

## Input Attributes

<table border="0" cellspacing="0" cellpadding="0" width="100%" style="display:table;text-align:left;">
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>type</td>
            <td>类型</td>
            <td>string</td>
            <td>text</td>
        </tr>
        <tr>
            <td>v-model</td>
            <td>绑定值</td>
            <td>string | number</td>
            <td></td>
        </tr>
        <tr>
            <td>maxlength</td>
            <td>原生属性，最大输入长度</td>
            <td>number</td>
            <td></td>
        </tr>
        <tr>
            <td>show-word-limit</td>
            <td>字数统计</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>placeholder</td>
            <td>输入框占位文本</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>show-password</td>
            <td>是否显示切换密码图标</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>disabled</td>
            <td>禁用</td>
            <td>boolean</td>
            <td>false</td>
        </tr>
        <tr>
            <td>rows</td>
            <td>输入框行数，只对 type="textarea" 有效</td>
            <td>number</td>
            <td>2</td>
        </tr>
        <tr>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<AppComment />