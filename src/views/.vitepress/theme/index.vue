<template>
    <Layout>
        <template #layout-top> </template>
        <template #nav-bar-content-after>
            <ClientOnly><BaseGptChat /></ClientOnly>
        </template>
        <template #aside-outline-after> </template>
    </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import BaseGptChat from '@/components/BaseGptChat.vue'
const { Layout } = DefaultTheme
</script>
