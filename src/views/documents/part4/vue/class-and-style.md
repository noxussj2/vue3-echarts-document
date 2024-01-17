<script setup>
import Image1 from "./class-and-style/_image1.png"
import Image2 from "./class-and-style/_image2.png"
import Image3 from "./class-and-style/_image3.png"
import Image4 from "./class-and-style/_image4.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10012')
</script>

# <AppCode code="111" /> 动态 Class & Style

<ClientOnly><AppRead code="v10012" /></ClientOnly>

我们平时可以直接给元素设置静态的 Class 或者是 Style，但是这种方式会带来很多限制，假设我想要内容动态的改变 Class 或者是 Style，通过原生的方式要通过 JavaScript 频繁操作 dom 才能够实现。而在 Vue 中我们无需关心内部实现原理，可以直接给元素的 Class、Style 绑定一个变量或表达式，这样使得我们的代码更加灵活。

## 动态绑定 Class

### 对象语法

我们可以给 `v-bind:class` 赋值一个对象，对象的属性名就是要绑定的 class 名称，对象的属性值通常是布尔值 true 或者是 false，为 true 时样式名称会生效，为 false 时样式名称不会生效。属性值还可以是一个表达式，例如三元表达式。

```vue
<template>
    <div class="home">
        <div :class="myClass">xiaoming</div>
        <div :class="{ red: isActive, pink: isActive }">libai</div>
        <div :class="{ green: name === 'xiaoming' ? true : false }">anqila</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myClass: {
                red: true
            },
            isActive: true,
            name: 'xiaoming'
        }
    }
}
</script>
```

预览效果

<AppImage :src="Image1" />

### 数组语法

我们可以给 `v-bind:class` 赋值一个数组，数组中可以编写多个 class 名称，可以是动态的也可以是静态，并且能够混合在一起使用。数组中的动态值可以是一个表达式或对象语法。

```vue
<template>
    <div class="home">
        <div :class="['red', myClass]">xiaoming</div>
        <div :class="['red', isActive ? 'pink' : 'blue']">libai</div>
        <div :class="['red', { aa: true, bb: true }]">anqila</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myClass: 'pink',
            isActive: true
        }
    }
}
</script>
```

预览效果

<AppImage :src="Image2" />

## 动态绑定 Style

### 对象语法

写法其实和 Class 的写法是一样的，只不过对象的属性名称是 style 样式的名称。有些样式名称要写成小写驼峰的形式，或者是小写横杠但是要加上单引号。对象的值是 style 样式具体对应的值。

```vue
<template>
    <div class="home">
        <div :style="myClass">xiaoming</div>
        <div :style="{ fontWeight: 'bold' }">libai</div>
        <div :style="{ color: isActive ? 'red' : 'blue' }">anqila</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            myClass: {
                color: 'red',
                fontSize: '20px'
            },
            isActive: true
        }
    }
}
</script>
```

预览效果

<AppImage :src="Image3" />

### 数组语法

我们可以给 v-bind:class 赋值一个数组，数组的每一项就是对象的语法，可以把多个样式对象进行组合。

```vue
<template>
    <div class="home">
        <div :style="[style1, style2]">xiaoming</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            style1: {
                color: 'red'
            },
            style2: {
                fontSize: '20px'
            }
        }
    }
}
</script>
```

预览效果

<AppImage :src="Image4" />

<AppComment />