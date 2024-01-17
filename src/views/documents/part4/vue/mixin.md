<script setup>
import Image1 from "./mixin/_image1.png"
import Image2 from "./mixin/_image2.png"
import { loginRead } from '@/utils/login-read'

loginRead('v10014')
</script>

# <AppCode code="113" /> Mixin 混入

<ClientOnly><AppRead code="v10014" /></ClientOnly>

混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

怎么理解呢，就是每一个组件都会有一些选项 data、computed、methods ...对吧，假设我有 10 个组件，每一个组件内都有一个相同的 methods 方法，那我就将这个可复用的方法抽离到 mixin 文件中，然后在引入进来。这样我就不需要每个组件都编写重复的 methods 方法了，data、mounted 等等的选项也是如此。

## 基础案例

hello-world.vue

```vue
<template>
    <div class="home">
        {{ name }}
    </div>
</template>

<script>
import mixin from './mixin.js'

export default {
    mixins: [mixin],
    data() {
        return {}
    }
}
</script>
```

mixin.js

```javascript
export default {
    data() {
        return {
            name: 'xiaoming'
        }
    }
}
```

预览效果

<AppImage :src="Image1" />

## 选项合并

因为混入会把它本身的选项和组件的选项一起合并，那么也就是说会发生一些冲突，例如混入中的文件含有 name 属性，而组件的选项 data 中也存在 name 属性，那页面渲染的时候会以哪个为准呢？接下来进行测试一下。

hello-world.vue

```vue
<template>
    <div class="home">
        {{ name }}
    </div>
</template>

<script>
import mixin from './mixin.js'

export default {
    mixins: [mixin],
    data() {
        return {
            name: 'libai'
        }
    }
}
</script>
```

mixin.js

```javascript
export default {
    data() {
        return {
            name: 'xiaoming'
        }
    }
}
```

预览效果

<AppImage :src="Image2" />

可以看出来是以组件选项的为准，这里只举例了选项 data 的冲突，其他选项 methods、computed、mounted 也是如此，小伙伴们可以自行去测试一下。在开发的时候需要多留意一下冲突的情况。

<AppComment />