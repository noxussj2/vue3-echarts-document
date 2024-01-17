<template>
    <div class="demo">
        {{ count }}
    </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted } from 'vue'

const count = ref(0)

const timer = setInterval(() => {
    count.value++
}, 1000)

onUnmounted(() => {
    clearInterval(timer)
})
</script>
