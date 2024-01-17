<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('c10004')
</script>

# <AppCode code="11" /> 选择器

<ClientOnly><AppRead code="c10004" /></ClientOnly>

css 选择器代表如何选中某个元素

:::tip 现实生活举例
我们可以想象一个元素，其实就是一个人，那我该如何找到这个人呢？例如可以通过 id 选择器的方式，就像是通过身份证号码找到 TA。也可以通过标签选择器找到 TA，就像是通过喊 TA 的名字的方式。
:::

## 类选择器

```css
.my-content {
    color: #f00;
}
```

## id 选择器

```css
#my-content {
    color: #f00;
}
```

## 标签选择器

```css
div {
    color: #f00;
}
```

## 属性选择器

```css
div[name='myName'] {
    color: #f00;
}
```

## 后代选择器

```css
.my-content .box1 {
    color: #f00;
}
```

## 子代选择器

```css
.my-content > .box1 {
    color: #f00;
}
```

## 相邻选择器

```css
.my-content + .my-content2 {
    color: #f00;
}
```

## 兄弟选择器

```css
.my-content ~ .my-content2 {
    color: #f00;
}
```

## 伪类选择器

```css
/* 鼠标移入 */
.my-content:hover {
    color: #f00;
}

/* 鼠标按下 */
.my-content:active {
    color: #00f;
}

/* 元素禁用 */
.my-content:disabled {
    color: #888;
}

/* 在父元素中匹配第一个子元素 my-content */
.my-content:first-child {
    color: #f00;
}

/* 在父元素中匹配最后一个子元素 my-content */
.my-content:last-child {
    color: #f00;
}

/* 在父元素中匹配第n个子元素 my-content */
.my-content:nth-child(2) {
    color: #f00;
}

/* 在父元素中匹配倒数第n个子元素 my-content */
.my-content:nth-last-child(2) {
    color: #f00;
}
```

## 伪元素选择器

```css
/* 元素前面插入 */
.my-content::before {
    content: 'name1';
    color: #f00;
}

/* 元素后面插入 */
.my-content::after {
    content: 'name2';
    color: #00f;
}
```

<AppComment />