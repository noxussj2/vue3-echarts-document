<template>
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="80px">
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

<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { reactive, ref } from 'vue'

const ruleFormRef = ref<FormInstance>()

// 表单值
const ruleForm = reactive({
    name: 'Hello',
    region: ''
})

// 表单校验规则
const rules = reactive<FormRules>({
    name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
    region: [{ required: true, message: '请选择活动区域', trigger: 'change' }]
})

// 表单提交
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            alert('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}
</script>
