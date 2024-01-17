<script lang="ts" setup>
import Demo1 from "./flex/Demo1.vue"
import Demo2 from "./flex/Demo2.vue"
import Demo3 from "./flex/Demo3.vue"
import Demo4 from "./flex/Demo4.vue"
import Demo5 from "./flex/Demo5.vue"
import Demo6 from "./flex/Demo6.vue"
import Demo7 from "./flex/Demo7.vue"
import Demo8 from "./flex/Demo8.vue"
import Demo9 from "./flex/Demo9.vue"
import Demo10 from "./flex/Demo10.vue"
import Demo11 from "./flex/Demo11.vue"
import Demo12 from "./flex/Demo12.vue"
import Demo13 from "./flex/Demo13.vue"
import Demo14 from "./flex/Demo14.vue"
import Demo15 from "./flex/Demo15.vue"
import Demo16 from "./flex/Demo16.vue"
import Demo17 from "./flex/Demo17.vue"
import Demo18 from "./flex/Demo18.vue"
import Demo19 from "./flex/Demo19.vue"
import Demo20 from "./flex/Demo20.vue"
import Demo21 from "./flex/Demo21.vue"
import Demo22 from "./flex/Demo22.vue"
import Demo23 from "./flex/Demo23.vue"
import Demo24 from "./flex/Demo24.vue"
import Demo25 from "./flex/Demo25.vue"
import Demo26 from "./flex/Demo26.vue"
import Demo27 from "./flex/Demo27.vue"
import Demo28 from "./flex/Demo28.vue"
import Demo29 from "./flex/Demo29.vue"
import { loginRead } from '@/utils/login-read'

loginRead('c10007')
</script>

# <AppCode code="14" /> flex 布局

<ClientOnly><AppRead code="c10007" /></ClientOnly>

## 为什么要使用 flex 布局？

flex 布局是目前比较流行的一种布局，因为它十分简单灵活，区区简单几行代码就可以实现各种页面的的布局，以前我在学习页面布局的时候我深受其 float、display、position 这些属性的困扰。使用 flex 属性就可以写出简洁优雅复杂的页面布局。先大概看一下我下面写的内容，然后再去看看阮一峰老师写的 [Flex 布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

:::tip 提示
容器：采用 flex 布局的元素，称为容器。 <br />
项目：指的是容器里面的子元素。
:::

## 容器的 6 个属性

### flex-direction

属性决定主轴的方向（即项目的排列方向）。

`flex-direction: row` （默认）主轴为水平方向，起点在左端。

<AppCard>
    <Demo1 />
</AppCard>

`flex-direction: row-reverse` 主轴为水平方向，起点在右端。

<AppCard>
    <Demo2 />
</AppCard>

`flex-direction: column` 主轴为垂直方向，起点在上沿。

<AppCard>
    <Demo3 />
</AppCard>

`flex-direction: column-reverse` 主轴为垂直方向，起点在下沿。

<AppCard>
    <Demo4 />
</AppCard>

### flex-wrap

主轴的换行方式。

`flex-wrap: nowrap` （默认）当项目总宽度超出容器的宽度时，不进行换行并且对项目的宽度进行统一压缩。

<AppCard>
    <Demo5 />
</AppCard>

`flex-wrap: wrap` 换行，第一行在上方。

<AppCard>
    <Demo6 />
</AppCard>

`flex-wrap: wrap-reverse` 换行，第一行在下方。

<AppCard>
    <Demo7 />
</AppCard>

### flex-flow

`flex-flow` 是 `flex-direction` 和 `flex-wrap` 的简写形式。

`flex-flow: row nowrap` （默认）

### justify-content

项目在主轴上的对齐方式。

`justify-content: flex-start` （默认）左对齐。

<AppCard>
    <Demo8 />
</AppCard>

`justify-content: flex-end` 右对齐。

<AppCard>
    <Demo9 />
</AppCard>

`justify-content: center` 居中。

<AppCard>
    <Demo10 />
</AppCard>

`justify-content: space-between` 两端对齐，项目之间的间距都相等。

<AppCard>
    <Demo11 />
</AppCard>

`justify-content: space-around` 也属于两端对齐，项目之间的间距都相等，但是容器的两侧有一个间距，刚好是项目之间间距的一半。

<AppCard>
    <Demo12 />
</AppCard>

### align-items

项目在交叉轴上的对齐方式。

`align-items: stretch` （默认），项目铺满整个交叉轴高度。

<AppCard>
    <Demo13 />
</AppCard>

`align-items: flex-start` 顶部对齐，也就是与交叉轴的起点对齐。

<AppCard>
    <Demo14 />
</AppCard>

`align-items: flex-end` 底部对齐，也就是与交叉轴的终点对齐。

<AppCard>
    <Demo15 />
</AppCard>

`align-items: center` 垂直居中对齐，也就是交叉轴的中心点对齐。

<AppCard>
    <Demo16 />
</AppCard>

`align-items: baseline` 项目的第一行文字的基线对齐。

<AppCard>
    <Demo17 />
</AppCard>

### align-content

`align-items` 一般是指单根轴线的对齐方式，也就是只有一行内容。而 `align-content` 则是多根轴线的对齐方式。

:::warning 注意
如果项目只有一根轴线，该属性不会起任何作用。
:::

`align-content: stretch` （默认），每一行项目的高度都会平分交叉轴的高度。

<AppCard>
    <Demo18 />
</AppCard>

`align-content: flex-start` 顶部对齐，也就是与交叉轴的起点对齐。

<AppCard>
    <Demo19 />
</AppCard>

`align-content: flex-end` 底部对齐，也就是与交叉轴的终点对齐。

<AppCard>
    <Demo20 />
</AppCard>

`align-content: center` 垂直居中对齐，也就是交叉轴的中心点对齐。

<AppCard>
    <Demo21 />
</AppCard>

`align-content: space-between` 两端对齐，项目之间的间距都相等。

<AppCard>
    <Demo22 />
</AppCard>

`align-content: space-around` 也属于两端对齐，项目之间的间距都相等，但是容器的两侧有一个间距，刚好是项目之间间距的一半。

<AppCard>
    <Demo23 />
</AppCard>

## 项目的 6 个属性

### order

项目的排列顺序，数值越小越靠前，默认为 0。

分别给三个项目设置 `order: 3` `order: 2` `order: 1`

<AppCard>
    <Demo24 />
</AppCard>

### flex-grow

项目的放大比例。默认为 0（代表即使存在剩余空间也不放大）。如果所有项目的 `flex-grow` 属性都为 1，则它们会等比分配剩余空间。

分别给三个项目设置 `flex-grow: 1` `flex-grow: 1` `flex-grow: 1`

<AppCard>
    <Demo25 />
</AppCard>

分别给三个项目设置 `flex-grow: 1` `flex-grow: 2` `flex-grow: 1` ，假设一个项目的 `flex-grow` 属性为 2，其他都为 1，则前者占据的剩余空间将会比其他项目多一倍。

<AppCard>
    <Demo26 />
</AppCard>

### flex-shrink

项目的缩小比例，默认为 1（代表如果空间不足，该项目将缩小）。

分别给三个项目设置 `flex-shrink: 1` `flex-shrink: 0` `flex-shrink: 1` 。假设一个项目的 `flex-shrink` 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。

<AppCard>
    <Demo27 />
</AppCard>

### flex-basis

在分配多余空间之前，提前计算项目占据的主轴空间。默认为 auto（代表项目本身的大小）。

分别给三个项目设置 `flex-basis: 350px` `flex-grow: 1` `flex-grow: 1` 。假设一个项目的 `flex-basis` 属性为 350px，其他都为 auto，则前者占据固定空间，不进行分配剩余空间。效果其实和给它设置 `width: 350px` 或 `height: 350px` 效果一致。

<AppCard>
    <Demo28 />
</AppCard>

### flex

`flex` 属性是 `flex-grow`, `flex-shrink` 和 `flex-basis` 的简写

`flex-flow: 0 1 auto` （默认）

### align-self

`align-self` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖容器的 `align-items` 属性，默认值为 auto，表示继承父级元素的 `align-items` 属性，如果没有父级元素，则等同 `stretch`。

给三个项目设置 `align-self: flex-start` `align-self: flex-end` `align-self: flex-start` 。

<AppCard>
    <Demo29 />
</AppCard>

<AppComment />
