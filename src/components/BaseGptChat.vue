<template>
    <div class="base-gpt-chat">
        <img class="chat-button" src="/openai2.png" @click="btnClick">

        <el-dialog v-model="dialogTableVisible" title="OpenAI GPT" :close-on-click-modal="false" align-center>
            <div ref="scrollContainer" class="container">
                <div v-for="(item, index) in _message" :key="index" class="item" :class="{ assistant: item.role === 'assistant' }">
                    <template v-if="item.role === 'user'">
                        <p v-html="item.content" />

                        <img alt="" src="/logo.png">
                    </template>

                    <template v-if="item.role === 'assistant'">
                        <img alt="" src="/openai.png">

                        <div v-loading="loading && index === message.length - 1" />

                        <p v-html="item.content" />
                    </template>
                </div>
            </div>

            <template #footer>
                <el-input v-model="input" class="search" placeholder="请输入需要提问的内容" :disabled="inputDisabled" @keyup.enter="handleEnter" />
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { computed, nextTick, ref } from 'vue'
import { ElLoading } from 'element-plus'
import { getItem, setItem } from '@/utils/local-storage'

// import { loginRead } from '@/utils/login-read'

import { _fetch } from '@/utils/fetch'
import * as MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

let md = null

let _MarkdownIt: any = MarkdownIt

// 线上，浏览器环境
if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'development') {
    _MarkdownIt = _MarkdownIt.default
}

if (typeof window !== 'undefined') {
    md = new _MarkdownIt({
        highlight: function (str, lang) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return '<pre class="hljs"><code>' + hljs.highlight(str, { language: lang, ignoreIllegals: true }).value + '</code></pre>'
                } catch (__) {}
            }
            return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
        }
    })
}

const dialogTableVisible = ref(false)
const input = ref('')

const message: any = ref(getItem('message') || [])

/**
 * 展示内容
 */
const _message = computed(() => {
    const res = []

    message.value.forEach((x: any) => {
        const content: any = md.render(x.content)

        // content = content.replaceAll(/>\n/g, '>')
        res.push({ ...x, content })
    })

    return res
})

const loading = ref(false)

const scrollContainer = ref(null)

/**
 * 打开弹窗
 */
const btnClick = () => {
    dialogTableVisible.value = true

    // loginRead('n10020')

    nextTick(() => {
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight
    })
}

/**
 * 提问
 */
const inputDisabled = ref(false)

const handleEnter = () => {
    inputDisabled.value = true
    loading.value = true
    message.value.push({ role: 'user', content: input.value })
    message.value.push({ role: 'assistant', content: '' })

    nextTick(() => {
        scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight
    })

    const next = (data: string) => {
        message.value[message.value.length - 1].content += data
        loading.value = false

        nextTick(() => {
            scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight
        })
    }

    const complete = () => {
        setItem('message', message.value)
        inputDisabled.value = false
    }

    // 请求实时流数据
    _fetch('/api/v1/note/gpt', { question: input.value }, { next, complete })

    input.value = ''
}

const vLoading = ElLoading.directive
</script>

<style lang="scss" scoped>
.base-gpt-chat {
    position: fixed;
    right: 20px;
    bottom: 20px;
}

.chat-button {
    width: 40px;
    height: 40px;
}
.chat-button:hover {
    opacity: 0.8;
    cursor: pointer;
}

:deep(pre) {
    padding: 0 10px;
    background-color: #f6f6f6;
}

.container {
    padding: 0 20px 40px;
    position: relative;
    height: 100%;
    overflow-y: auto;
    flex-direction: column;
    justify-content: space-between;

    .item {
        display: flex;

        img {
            margin-top: 2px;
            margin-left: 16px;
            width: 26px;
            height: 26px;
        }

        p {
            width: 0;
            flex-grow: 1;
            white-space: break-spaces;
            text-align: right;
            line-height: 30px;
        }
    }

    .item + .item {
        margin-top: 32px;
    }

    .item.assistant {
        justify-content: flex-end;

        img {
            margin-right: 16px;
            margin-left: 0;
        }

        p {
            text-align: left;
        }

        > :deep(p) {
            line-height: 0;

            ul {
                margin: 24px 0;
            }

            li {
                line-height: 30px;
            }

            p,
            pre {
                line-height: 30px;
            }
        }
    }
}

.el-loading-parent--relative {
    line-height: 28px;
}

:deep(.el-loading-spinner) {
    top: 2px;
    margin-top: 0;

    .circular {
        width: 24px;
        height: 24px;

        .path {
            stroke-width: 4px;
            stroke: var(--el-text-color-regular);
        }
    }
}

:deep(.search) {
    .el-input__inner {
        height: 40px;
    }
}

:deep(.el-dialog) {
    width: 1000px;
    max-width: 90%;
    height: 800px;
    max-height: 80%;
    border-radius: 12px;
}

:deep(.el-dialog__body) {
    padding-bottom: 0;
    height: calc(100% - 55px - 62px);
}

:deep(.el-dialog__footer) {
    padding-top: 0;
}

:deep(.el-input__wrapper) {
    box-shadow: 0 0 6px 0 var(--el-input-border-color, var(--el-border-color));
}
</style>
