<script lang="ts" setup>
import Demo1 from "./throttle/Demo1.vue"
import Demo2 from "./throttle/Demo2.vue"
import { loginRead } from '@/utils/login-read'
loginRead('j20014')
</script>

# <AppCode code="46" /> 防抖和节流

<ClientOnly><AppRead code="j20014" /></ClientOnly>

:::tip 提示
防抖和节流一般在做用户体验优化的时候会用上。
:::

## 什么是防抖？

是指一个事件在同一时间内被多次频繁触发后，最终只会执行一次。多次触发后会重新计算时间，只生效最后一次触发。

### 基础案例

可通过定时器来实现

```javascript
var timer = 0

function click() {
    clearTimeout(timer)

    timer = setTimeout(function () {
        console.log('鼠标单击触发')
    }, 1000)
}

document.addEventListener('click', click)
```

高频点击可体验效果

<AppCard>
    <Demo1 />
</AppCard>

### 应用场景

提交按钮：所有提交后要调用接口的按钮都可以添加防抖，避免多次调用重复接口。

浏览器窗口缩放：在一些特定时候需要监听浏览器窗口变动，变动后重新渲染页面，使用防抖可以防止重复渲染。

## 什么是节流？

在规定时间内，该事件只会被触发第一次。后续触发的事件将会被忽略，直到计时结束。

### 基础案例

可通过定时器和锁定标识实现。

```javascript
var isLock = false

function click() {
    if (isLock) return

    isLock = true

    setTimeout(function () {
        console.log('鼠标单击触发')
        isLock = false
    }, 1000)
}

document.addEventListener('click', click)
```

高频点击可体验效果

<AppCard>
    <Demo2 />
</AppCard>

### 应用场景

搜索框联动查询：用户在搜索框输入内容值，可定时查询接口返回展示的内容。

获取验证码功能：获取手机验证码后，在规定时间内无法在进行获取。

<AppComment />