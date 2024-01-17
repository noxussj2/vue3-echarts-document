<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('s10003')
</script>

# <AppCode code="80" /> Sass 常用功能

<ClientOnly><AppRead code="s10003" /></ClientOnly>

Sass 功能有很多，这边只列举一些比较常用的。

## 嵌套规则 (Nested Rules)

Sass 允许将一套 CSS 样式嵌套进另一套样式中，内层的样式将它外层的选择器作为父选择器。

**编译前**

```css
.box {
    .box1 {
        background-color: red;
    }

    .box2 {
        background-color: blueviolet;
    }
}
```

**编译后**

```css
.box .box1 {
    background-color: red;
}
.box .box2 {
    background-color: blueviolet;
}
.box .box3 {
    background-color: blue;
}
```

## 父选择器 & (Referencing Parent Selectors: &)

在嵌套 CSS 规则时，有时也需要直接使用嵌套外层的父选择器。

**编译前**

```css
button {
    width: 100px;
    height: 30px;

    &:hover {
        background-color: red;
    }
}
```

**编译后**

```css
button {
    width: 100px;
    height: 30px;
}
button:hover {
    background-color: red;
}
```

## 属性嵌套 (Nested Properties)

有些 CSS 属性遵循相同的命名空间 ( namespace )，比如 font-family , font-size , font-weight 都以 font 作为属性的命名空间。为了便于管理这样的属性，同时也为了避免了重复输入，Sass 允许将属性嵌套在命名空间中。

**编译前**

```css
.my-content {
    padding: {
        top: 10px;
        right: 10px;
        bottom: 10px;
        left: 10px;
    }

    font: {
        size: 30px;
        weight: bold;
    }
}
```

**编译后**

```css
.my-content {
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    font-size: 30px;
    font-weight: bold;
}
```

## 注释 /\* _/ 与 // (Comments: /_ \*/ and //)

单行注释不会被编译到 css 文件中，多行注释中可以使用差值语句 "``" ，类型 ES6 的模板字符串。

### 单行注释

**编译前**

```css
// These comments are only one line long each.
// They won't appear in the CSS output,
// since they use the single-line comment syntax.

.my-content {
    width: 100%;
    height: 100%;
}
```

**编译后**

```css
.my-content {
    width: 100%;
    height: 100%;
}
```

### 多行注释

**编译前**

```css
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */

.my-content {
    width: 100%;
    height: 100%;
}
```

**编译后**

```css
/* This comment is
 * several lines long.
 * since it uses the CSS comment syntax,
 * it will appear in the CSS output. */
.my-content {
    width: 100%;
    height: 100%;
}
```

## 变量 $ (Variables: $)

**编译前**

```css
$width: 100px;
$height: 100px;

.box {
    width: $width;
    height: $height;
}
```

**编译后**

```css
.box {
    width: 100px;
    height: 100px;
}
```

## 运算 (Operations)

**编译前**

```css
.box {
    width: 100px + 100px;
    height: 200px / 2;
    background-color: royalblue;
}
```

**编译后**

```css
.box {
    width: 200px;
    height: 100px;
    background-color: royalblue;
}
```

## 插值语句 #{} (Interpolation: #{})

**编译前**

```css
$name: box;
$attr: background;

.box {
    .#{$name}1 {
        width: 100px;
        height: 100px;
        #{$attr}-color: red;
    }

    .#{$name}2 {
        width: 100px;
        height: 100px;
        #{$attr}-color: blueviolet;
    }

    .#{$name}3 {
        width: 100px;
        height: 100px;
        #{$attr}-color: blue;
    }
}
```

**编译后**

```css
.box .box1 {
    width: 100px;
    height: 100px;
    background-color: red;
}
.box .box2 {
    width: 100px;
    height: 100px;
    background-color: blueviolet;
}
.box .box3 {
    width: 100px;
    height: 100px;
    background-color: blue;
}
```

## @import

Sass 拓展了 @import 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令 ( mixin ) 都可以在导入的文件中使用。

**编译前（base.scss）**

```css
@import './reset.scss';

.box {
    .#{$name}1 {
        width: 100px;
        height: 100px;
        #{$attr}-color: red;
    }

    .#{$name}2 {
        width: 100px;
        height: 100px;
        #{$attr}-color: blueviolet;
    }

    .#{$name}3 {
        width: 100px;
        height: 100px;
        #{$attr}-color: blue;
    }
}
```

**编译前（reset.scss）**

```css
* {
    margin: 0;
    padding: 0;
}

$name: box;
$attr: background;
```

**编译后（base.css）**

```css
* {
    margin: 0;
    padding: 0;
}

.box .box1 {
    width: 100px;
    height: 100px;
    background-color: red;
}
.box .box2 {
    width: 100px;
    height: 100px;
    background-color: blueviolet;
}
.box .box3 {
    width: 100px;
    height: 100px;
    background-color: blue;
}
```

## 嵌套 @import

**编译前（base.scss）**

```css
.box {
    @import 'box';
}
```

**编译前（box.scss）**

```css
.box1 {
    width: 100px;
    height: 100px;
    background-color: red;
}

.box2 {
    width: 100px;
    height: 100px;
    background-color: blue;
}

.box3 {
    width: 100px;
    height: 100px;
    background-color: blueviolet;
}
```

**编译后（base.css）**

```css
.box .box1 {
    width: 100px;
    height: 100px;
    background-color: red;
}
.box .box2 {
    width: 100px;
    height: 100px;
    background-color: red;
}
.box .box3 {
    width: 100px;
    height: 100px;
    background-color: red;
}
```

## @extend

**编译前**

```css
.box {
    width: 100px;
    height: 100px;
}

.box {
    .box1 {
        @extend .box;

        background-color: red;
    }

    .box2 {
        @extend .box;

        background-color: blueviolet;
    }

    .box3 {
        @extend .box;

        background-color: blue;
    }
}
```

**编译后**

```css
.box,
.box .box1,
.box .box2,
.box .box3 {
    width: 100px;
    height: 100px;
}

.box .box1 {
    background-color: red;
}
.box .box2 {
    background-color: blueviolet;
}
.box .box3 {
    background-color: blue;
}
```

## @if

当 @if 的表达式返回值不是 false 或者 null 时，条件成立，输出 {} 内的代码。

**编译前**

```css
$type: monster;

p {
    @if $type == ocean {
        color: blue;
    } @else if $type == matador {
        color: red;
    } @else if $type == monster {
        color: green;
    } @else {
        color: black;
    }
}
```

**编译后**

```css
p {
    color: green;
}
```

## @for

@for 指令可以在限制的范围内重复输出格式，每次按要求（变量的值）对输出结果做出变动。这个指令包含两种格式：@for $var from "start" through "end"，或者 @for $var from "start" to "end" 。

区别在于 through 与 to 的含义：当使用 through 时，条件范围包含 "start" 与 "end" 的值，而使用 to 时条件范围只包含 "start" 的值不包含 "end" 的值。另外， $var 可以是任何变量，比如 $i ； "start" 和 "end" 必须是整数值。

**编译前**

```css
@for $i from 1 through 3 {
    .item-#{$i} {
        width: 2em * $i;
    }
}
```

**编译后**

```css
.item-1 {
    width: 2em;
}

.item-2 {
    width: 4em;
}

.item-3 {
    width: 6em;
}
```

## @each

@each 指令的格式是 $var in "list", $var 可以是任何变量名，比如 $length 或者 $name，而 "list" 是一连串的值，也就是值列表。@each是一个循环语句，$key、$value、相当于 javascript 中的对象键值对，名字可以自定义。

**编译前**

```css
@each $key, $value in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$key} {
        font-size: $value;
    }
}
```

**编译后**

```css
h1 {
    font-size: 2em;
}

h2 {
    font-size: 1.5em;
}

h3 {
    font-size: 1.2em;
}
```

## @while

@while 指令重复输出格式直到表达式返回结果为 false。这样可以实现比 @for 更复杂的循环，只是很少会用到。

**编译前**

```css
$i: 3;
@while $i > 0 {
    .item-#{$i} {
        width: 2em * $i;
    }
    $i: $i - 1;
}
```

**编译后**

```css
.item-3 {
    width: 6em;
}

.item-2 {
    width: 4em;
}

.item-1 {
    width: 2em;
}
```

## 混合指令 @mixin & @include

使用 @mixin 指令定义混合样式，使用 @include 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）。

**编译前**

```css
@mixin box {
    width: 100px;
    height: 100px;
}

.box {
    .box1 {
        @include box;

        background-color: red;
    }

    .box2 {
        @include box;

        background-color: blueviolet;
    }

    .box3 {
        @include box;

        background-color: blue;
    }
}
```

**编译后**

```css
.box .box1 {
    width: 100px;
    height: 100px;
    background-color: red;
}
.box .box2 {
    width: 100px;
    height: 100px;
    background-color: blueviolet;
}
.box .box3 {
    width: 100px;
    height: 100px;
    background-color: blue;
}
```

## 参数 (Arguments)

参数用于给混合指令中的样式设定变量，并且赋值使用。在定义混合指令的时候，按照变量的格式，通过逗号分隔，将参数写进圆括号里。引用指令时，按照参数的顺序，再将所赋的值对应写进括号。

**编译前**

```css
@mixin box($color) {
    width: 100px;
    height: 100px;
    background-color: $color;
}

.box {
    .box1 {
        @include box(red);
    }

    .box2 {
        @include box(blueviolet);
    }

    .box3 {
        @include box(blue);
    }
}
```

**编译后**

```css
.box .box1 {
    width: 100px;
    height: 100px;
    background-color: red;
}
.box .box2 {
    width: 100px;
    height: 100px;
    background-color: blueviolet;
}
.box .box3 {
    width: 100px;
    height: 100px;
    background-color: blue;
}
```

## 函数指令 (Function Directives)

Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用。

**编译前**

```css
@function box-width($width) {
    @return $width * 2;
}

.box {
    .box1 {
        width: box-width(100px);
        height: 100px;
        background-color: red;
    }

    .box2 {
        width: box-width(100px);
        height: 100px;
        background-color: blueviolet;
    }

    .box3 {
        width: box-width(100px);
        height: 100px;
        background-color: blue;
    }
}
```

**编译后**

```css
.box .box1 {
    width: 200px;
    height: 100px;
    background-color: red;
}
.box .box2 {
    width: 200px;
    height: 100px;
    background-color: blueviolet;
}
.box .box3 {
    width: 200px;
    height: 100px;
    background-color: blue;
}
```

<AppComment />