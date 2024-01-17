<script lang="ts" setup>
import { loginRead } from '@/utils/login-read'
loginRead('n10017')
</script>

# 字符串最后一个单词的长度

<ClientOnly><AppRead code="n10017" /></ClientOnly>

## 原题描述

计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于 5000。（注：字符串末尾不以空格为结尾）

-   输入一行，代表要计算的字符串，非空，长度小于 5000。

-   输出一个整数，表示输入字符串最后一个单词的长度。

## 示例 1

输入：hello nowcoder

输出：8

说明：最后一个单词为 nowcoder，长度为 8

## 实现代码

```javascript
const line = 'hello nowcoder'

const arr = line.split(' ')
const res = arr.pop().length
```
