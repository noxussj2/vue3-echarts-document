<template>
    <div class="demo">
        <div>实时更新的值：{{ value }}</div>
        <input v-model="value" type="text" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
