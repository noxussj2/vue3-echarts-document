<script setup>
import Demo1 from "./table/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10018')
</script>

# <AppCode code="142" /> Table 表格

<ClientOnly><AppRead code="u10018" /></ClientOnly>

用于展示表格数据

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { ElTable, ElTableColumn } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-plus/theme-chalk/table.css'
import 'element-plus/theme-chalk/table-column.css'

Vue.use(ElTable)
Vue.use(ElTableColumn)
```

## 基础使用

```vue
<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                },
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ]
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## Table Attributes

<table border="0" cellspacing="0" cellpadding="0" width="100%" style="display:table;text-align:left;">
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>data</td>
            <td>表格数据</td>
            <td>array</td>
            <td></td>
        </tr>
        <tr>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

## Table-column Attributes

<table border="0" cellspacing="0" cellpadding="0" width="100%" style="display:table;text-align:left;">
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>label</td>
            <td>标题</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>prop</td>
            <td>当前列对应的字段名</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>width</td>
            <td>当前列宽度</td>
            <td>string</td>
            <td></td>
        </tr>
        <tr>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>

<AppComment />