<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('c10005')
</script>

# <AppCode code="12" /> 权重划分

<ClientOnly><AppRead code="c10005" /></ClientOnly>

选择器权重划分代表有多个选择器同时选中同一个元素时，应该以谁的为准，这里就会涉及到权重的问题。

:::tip 现实生活举例
假设你的好朋友小明和路人小红同时掉水里，你先救谁？那你可能会先救小明，因为小明的优先级/权重比较高。
:::

## 基础案例

### 在同一层级下

同一层级代表通过单个选择器直接选中某个元素。

以下案例存在类选择器和 id 选择器，两个选择器同时都选中了 “小明” 这个 `div` 并且都设置了字体颜色。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            .person {
                color: green;
            }
            #xiaoming {
                color: red;
            }
        </style>
    </head>
    <body>
        <div class="person" id="xiaoming">小明</div>
    </body>
</html>
```

最终结果是显示了红色的 "小明"，id 选择器优先级相对较高。

<AppPlayground href="https://codepen.io/noxussj/pen/KKBxLyb" />

其他的权重不需要特意记住，只需要知道以下前四个优先级即可。

!important > 内联样式 > ID 选择器 > 类选择器 > （标签选择器、伪类选择器、属性选择器...）

<br />

### 不同层级下

不同层级指后代、子代选择器的优先级问题，层级越深优先级越高。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            .box2 {
                color: green;
            }
            .box1 .box2 {
                color: red;
            }
        </style>
    </head>
    <body>
        <div class="box1">
            <div class="box2">小明</div>
        </div>
    </body>
</html>
```

最终结果是显示了红色的 "小明"，因为 `.box1 .box2` 是两层，而 `.box1` 是一层。

<AppPlayground href="https://codepen.io/noxussj/pen/BaPOgwE" />

<AppComment />