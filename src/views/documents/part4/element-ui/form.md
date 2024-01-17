<script setup>
import Demo1 from "./form/Demo1.vue"
import { loginRead } from '@/utils/login-read'

loginRead('u10010')
</script>

# <AppCode code="134" /> Form 表单

<ClientOnly><AppRead code="u10010" /></ClientOnly>

通常用于选择日期

## 按需引入方式

如果是完整引入可跳过此步骤

```javascript
import Vue from 'vue'
import { ElForm, ElFormItem, ElInput, ElSelect, ElOption, ElButton } from 'element-ui'
import 'element-ui/lib/theme-chalk/base.css'
import 'element-plus/theme-chalk/form.css'
import 'element-plus/theme-chalk/form-item.css'
import 'element-plus/theme-chalk/input.css'
import 'element-plus/theme-chalk/select.css'
import 'element-plus/theme-chalk/option.css'
import 'element-plus/theme-chalk/button.css'

Vue.use(Form)
Vue.use(ElFormItem)
Vue.use(ElInput)
Vue.use(ElSelect)
Vue.use(ElOption)
Vue.use(ElButton)
```

## 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

```vue
<template>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px">
        <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入活动名称" />
        </el-form-item>
        <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="上海" value="shanghai" />
                <el-option label="北京" value="beijing" />
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"> 提交 </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                name: 'Hello',
                region: ''
            },
            rules: {
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                region: [{ required: true, message: '请选择活动区域', trigger: 'change' }]
            }
        }
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!')
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        }
    }
}
</script>
```

<AppCardBlank>
    <Demo1 />
</AppCardBlank>

## Form Attributes

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
            <td>model</td>
            <td>表单数据对象</td>
            <td>object</td>
            <td></td>
        </tr>
        <tr>
            <td>rules</td>
            <td>表单验证规则</td>
            <td>object</td>
            <td></td>
        </tr>
        <tr>
            <td>label-width</td>
            <td>表单标签宽度</td>
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

## Form Methods

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
            <td>validate</td>
            <td>表单校验方法</td>
            <td>Function</td>
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