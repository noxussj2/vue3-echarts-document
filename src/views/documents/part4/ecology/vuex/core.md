<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'

loginRead('v30002')
</script>

# <AppCode code="124" /> 核心概念

<ClientOnly><AppRead code="v30002" /></ClientOnly>

Store 有五个核心的概念，State、Getters、Mutations、Actions、Modules。你都必须要知道它们的作用是什么。

## State 状态

我们每一个项目，基本上都是使用同一个 store 实例，所以 State 也是共用一个，State 是一个对象，也是唯一一个数据源，整个 Store 中的数据都从 State 中进行管理存储。State 其实就像是 Vue 实例中的选项 data。

### 基础案例

**在组件中获取 State 数据**

由于 State 是响应式的，所以能够结合计算属性将其返回。每当 `state.count` 变化的时候, 都会重新求取计算属性，并且触发更新相关联的 DOM。

```vue
<template>
    <div class="home">
        {{ count }}
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count
        }
    }
}
</script>
```

<br />

**通过 mapState 辅助函数获取 State 数据**

当一个组件需要获取多个 State 状态的时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，从而优化你的代码。

```vue
<template>
    <div class="home">
        {{ count }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            count: (state) => state.count,
            name: (state) => state.name
        })
    }
}
</script>
```

## Getters 计算属性

有时候我们需要从 store 中的 state 中派生出一些状态，这种情况就需要用到 getters。其实 getters 就是和计算属性 computed 一样的。因为有些情况你觉得 state 的数据不是你想要的格式，你想在其基础上加工进行处理，然后在进行使用，当然也不会影响原始 state 的值。

### 基础案例

**定义 Getters ，在原始 State 基础上进行加工**

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: 'xiaoming'
    },
    getters: {
        name(state) {
            return 'my name is ' + state.name
        }
    }
})

export default store
```

<br />

**在组件中获取 Getters 数据**

```vue
<template>
    <div class="home">
        {{ name }}
    </div>
</template>

<script>
export default {
    computed: {
        name() {
            return this.$store.getters.name
        }
    }
}
</script>
```

<br />

**通过 mapGetters 辅助函数获取 Getters 数据**

```vue
<template>
    <div class="home">
        {{ myName }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        // 把 `this.name` 映射为 `this.$store.getters.name`
        ...mapGetters({
            myName: 'name'
        })
    }
}
</script>
```

## Mutations 同步修改 State

更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。mutations 非常类似 Vue 在调用子组件时，给子组件传递了数据，子组件通过 `$emit` 通知父组件修改数据。都采用单向数据流的方式。

### 基础案例

**定义 mutations**

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.num
        }
    }
})

export default store
```

<br />

**提交载荷（Payload）**

通过 `$store.commit` 进行调用 mutations，并且可以传入额外的参数，即 mutation 的载荷（payload）。

```vue
<template>
    <div class="home">
        {{ $store.state.count }}
    </div>
</template>

<script>
export default {
    mounted() {
        setTimeout(() => {
            this.$store.commit('increment', { num: 10 })
        }, 1000)
    }
}
</script>
```

<br />

**通过 mapMutations 辅助函数获取 mutations 函数**

你可以在组件中使用 `this.$store.commit('$mutationsName')` 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 `$store.commit` 调用。

```vue
<template>
    <div class="home">
        {{ $store.state.count }}
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        // 将 `this.myIncrement()` 映射为 `this.$store.commit('increment')`
        ...mapMutations({
            myIncrement: 'increment'
        })
    },
    mounted() {
        setTimeout(() => {
            this.myIncrement({ num: 10 })
        }, 1000)
    }
}
</script>
```

<br />

**Mutation 需遵守 Vue 的响应式规则**

既然 Vuex 的 store 中的状态是响应式的，那么当我们变更状态时，监视状态的 Vue 组件也会自动更新。这也意味着 Vuex 中的 mutation 也需要与使用 Vue 一样遵守一些注意事项：例如最好提前在你的 Store 中初始化好所有所需的状态 State。

<br />

**Mutation 必须是同步函数**

一条重要的原则就是要记住 mutation 必须是同步函数，并且内部的逻辑也是同步的。如果是异步的则导致状态无法被正常跟踪。

## Actions 异步提交 Mutations

在 mutation 中混合异步调用会导致你的程序很难调试。例如，当你调用了两个包含异步回调的 mutation 来改变状态，你怎么知道什么时候回调和哪个先回调呢？这就是为什么我们要区分这两个概念。在 Vuex 中，mutation 都是同步事务，都必须是即刻修改当前状态。

Actions 类似于 mutation，它们之间不同的地方是，Actions 提交的是 mutation，而不是直接变更状态 state。Actions 是异步的，函数内可以包含任意异步操作。

### 基础案例

**定义 actions**

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.num
        }
    },
    actions: {
        incrementAsync({ commit }, payload) {
            setTimeout(() => {
                commit('increment', payload)
            }, 1000)
        }
    }
})

export default store
```

<br />

**分发 actions**

actions 通过 `$store.dispatch` 方法触发。

```vue
<template>
    <div class="home">
        {{ $store.state.count }}
    </div>
</template>

<script>
export default {
    mounted() {
        this.$store.dispatch('incrementAsync', {
            num: 10
        })
    }
}
</script>
```

<br />

**通过 mapActions 辅助函数获取 actions 函数**

```vue
<template>
    <div class="home">
        {{ $store.state.count }}
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        // 将 `this.myIncrementAsync()` 映射为 `this.$store.dispatch('incrementAsync')`
        ...mapActions({
            myIncrementAsync: 'incrementAsync'
        })
    },
    mounted() {
        this.myIncrementAsync({ num: 10 })
    }
}
</script>
```

## Module 模块

由于使用相同的一个状态 State，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。

为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、getters、mutations、actions、module。

### 基础案例

**定义 module**

```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    namespaced: true,
    state: {
        count: 0,
        name: 'xiaoming'
    },
    getters: {
        name(state) {
            return 'my name is ' + state.name
        }
    },
    mutations: {
        increment(state, payload) {
            state.count += payload.num
        }
    },
    actions: {
        incrementAsync({ commit }, payload) {
            setTimeout(() => {
                commit('increment', payload)
            }, 1000)
        }
    }
}

const store = new Vuex.Store({
    modules: {
        a: moduleA
    }
})

export default store
```

<br />

**通过 mapState 辅助函数获取 State 数据**

```vue
<template>
    <div class="home">
        {{ name }}
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    computed: {
        // 把 `this.name` 映射为 `this.$store.state.a.name`
        ...mapState({
            name: (state) => state.a.name
        })
    }
}
</script>
```

<br />

**通过 mapGetters 辅助函数获取 Getters 数据**

```vue
<template>
    <div class="home">
        {{ myName }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        // 把 `this.myName` 映射为 `this.$store.getters['a/name']`
        ...mapGetters({
            myName: 'a/name'
        })
    }
}
</script>
```

<br />

**通过 mapMutations 辅助函数获取 mutations 函数**

```vue
<template>
    <div class="home">
        {{ $store.state.a.count }}
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    methods: {
        // 将 `this.myIncrement()` 映射为 `this.$store.commit('a/increment')`
        ...mapMutations({
            myIncrement: 'a/increment'
        })
    },
    mounted() {
        setTimeout(() => {
            this.myIncrement({ num: 10 })
        }, 1000)
    }
}
</script>
```

<br />

**通过 mapActions 辅助函数获取 actions 函数**

```vue
<template>
    <div class="home">
        {{ $store.state.a.count }}
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        // 将 `this.myIncrementAsync()` 映射为 `this.$store.dispatch('a/incrementAsync')`
        ...mapActions({
            myIncrementAsync: 'a/incrementAsync'
        })
    },
    mounted() {
        this.myIncrementAsync({ num: 10 })
    }
}
</script>
```

<AppComment />