<script setup>
import Image1 from "./composition/image1.png"
</script>

# 组合式 API 语法糖

## 选项式 API

在 `Vue2` 中，我们基本上都是使用选项式 API 来开发项目的。

```vue
<script>
export default {
    data() {
        return {
            // 逻辑1：存储学生数据
            name: 'xiaoming'
            age: 18

            // 逻辑2：存储班级信息
            className: 'class1'
            classPeople: 50
        }
    },
    methods: {
        // 逻辑1：设置学生名称
        setName(name) {
            this.name = name
        },

        // 逻辑1：设置学生年龄
        setAge(age) {
            this.age = age
        },

        // 逻辑2：设置班级名称
        setClassName(className) {
            this.className = className
        },

        // 逻辑2：设置班级人数
        setClassPeople(classPeople) {
            this.classPeople = classPeople
        }
    }
}
</script>
```

在上方组件代码中包含两个逻辑部分，一个是与学生有关的，另一个是与班级有关的，当然在大型的组件中可能会包含更多的逻辑部分。

这样的代码在初期可能会没什么感觉，但是在代码量维护达到一定标准时，例如大于 1000 行代码。就会存在一些问题。

### 查找代码变得困难

因为在这种情况下，我们需要在一个非常长的代码块中去寻找我们想要的代码然后修改。

例如我要修改逻辑 1 部分的代码，我就要去选项 `data` `methods` `computed` `watch` `onMounted`... 中去查找，这些选项中又包含了其他不相关的部分，这样就会导致我们花费大量的时间去寻找我们想要的代码。甚至还有可能找漏。

### 排序混乱

在实际开发中，我们无法确保团队成员会按照逻辑 1、逻辑 2 整齐的顺序去编写代码。这也会使的我们阅读代码非常困难。

## 组合式 API

所以在 `Vue3` 中，官方推出了组合式 API 来解决这些问题。以下代码为组合式 API 的语法糖，比较推荐这种写法，原生写法暂时不介绍。

```vue
<script lang="ts" setup>
import { ref } from 'ref'

/**
 * 逻辑1：存储学生数据
 */
const name = ref('xiaoming')
const age = ref(18)

/**
 * 逻辑1：设置学生名称
 */
const setName = (name) => {
    name.value = name
}

/**
 * 逻辑1：设置学生年龄
 */
const setAge = (age) => {
    age.value = age
}

/**
 * 逻辑2：存储班级信息
 */
const className = ref('class1')
const classPeople = ref(50)

/**
 * 逻辑2：设置班级名称
 */
const setClassName = (className) => {
    className.value = className
}

/**
 * 逻辑2：设置班级人数
 */
const setClassPeople = (classPeople) => {
    classPeople.value = classPeople
}
</script>
```

从上方代码中可能感觉区别不是很大，只是把逻辑相同的部分放到了一起。但是实际上组合式 API 强调的是简洁高效的逻辑复用。也就是说组合式 API 的代码可以单独抽离出来，然后在其他组件中进行复用。这个是选项式 API 做不到的，因为它高强度依赖 `this` 上下文。

### 逻辑抽离

组合式 API 还可以将逻辑模块抽离到外部文件中，进行复用。

::: code-group

```vue [index.vue]
<script lang="ts" setup>
import { name, age, setName, setAge } from './student'
import { className, classPeople, setClassName, setClassPeople } from './class'

console.log(name.value) // xiaoming
console.log(age.value) // 18
console.log(className.value) // class1
console.log(classPeople.value) // 50
</script>
```

```ts [student.ts]
import { ref } from 'ref'

/**
 * 逻辑1：存储学生数据
 */
export const name = ref('xiaoming')
export const age = ref(18)

/**
 * 逻辑1：设置学生名称
 */
export const setName = (name) => {
    name.value = name
}

/**
 * 逻辑1：设置学生年龄
 */
export const setAge = (age) => {
    age.value = age
}
```

```ts [class.ts]
import { ref } from 'ref'

/**
 * 逻辑2：存储班级信息
 */
export const className = ref('class1')
export const classPeople = ref(50)

/**
 * 逻辑2：设置班级名称
 */
export const setClassName = (className) => {
    className.value = className
}

/**
 * 逻辑2：设置班级人数
 */
export const setClassPeople = (classPeople) => {
    classPeople.value = classPeople
}
```

:::

## 如何选择选项式 API 和组合式 API

如果将相同逻辑部分用同一种颜色表示，那平时开发的组件代码将会是下图的效果。

<AppImage :src="Image1" />

选项式 API 更像是一个框架，会限制你的代码结构，让项目代码更加规范，同时它也将你锁定在规定的代码组织模式中，没有摆脱的余地，这会导致在更大规模的项目中难以进行重构或提高代码质量。

组合式 API 则是解除了这种限制，可以更加灵活的组织代码，以及逻辑复用，更适合长期项目的维护。

:::danger 警告
由于组合式 API 相对比较灵活，代码组织需要你自己去规范，所以在团队开发中，如果没有统一的代码规范，那么组合式 API 可能会适得其反，导致代码混乱，不利于维护。
:::
