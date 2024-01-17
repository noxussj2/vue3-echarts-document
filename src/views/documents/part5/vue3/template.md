# template 多个根节点

`Vue3` 现在支持多个根节点的组件了。

## `Vue2` 语法

在 `Vue2` 中，需要额外用一个 `div` 包裹着组件，通常来说还要给这个 `div` 添加一个 `class`，这样就会多出一层无用的 `DOM` 节点。

```vue
<template>
    <div>
        <header></header>
        <main></main>
        <footer></footer>
    </div>
</template>
```

## `Vue3` 语法

在 `Vue3` 中，组件可以包含多个根节点，这样就不需要额外的 `div` 包裹了。但是必要的时候要通过 `$attrs` 来接收父组件传递的原生属性，具体是如何接收的可以阅读 [透传 `Attributes`](/documents/part5/vue3/attributes)

```vue
<template>
    <header></header>
    <main v-bind="$attrs"></main>
    <footer></footer>
</template>
```
