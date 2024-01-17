<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('l10002')
</script>

# <AppCode code="91" /> ESLint 配置规则

<ClientOnly><AppRead code="l10002" /></ClientOnly>

## 配置规则

**官方规则参考**

[https://eslint.nodejs.cn/docs/latest/rules/](https://eslint.nodejs.cn/docs/latest/rules/)

配置文件中的 `extends` 字段主要是用来继承其他的规范，例如 `standard`、`airbnb` 等。当然你也可以通过 `rules` 属性在这些继承的规范基础上进行修改，它会覆盖掉原有的规则。

:::warning 注意
当你使用 `extends` 继承主流的规范时，请记得要安装对应的模块，否则不会生效。
:::

## 常用规则

以下是博主比较常用的规则，在 `Vue3.0` + `TypeScript` 项目中使用，仅供参考。

::: code-group

```json [.eslintrc.json]
{
    /**
     * 规则继承，顺序不可进行调整
     */
    "extends": ["standard", "plugin:vue/vue3-recommended", "plugin:vue/vue3-essential", "@vue/typescript/recommended"],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        /**
         * 类型定义符号后面需要统一空格
         */
        "@typescript-eslint/type-annotation-spacing": [
            "error",
            {
                "before": false,
                "after": true
            }
        ],

        /**
         * vue 文件名称为多个单词，不校验
         */
        "vue/multi-word-component-names": ["error", { "ignores": ["index"] }],

        /**
         * vue 代码缩进 4 个空格
         */
        "vue/html-indent": ["error", 4],

        /**
         * vue 单行属性数量
         */
        "vue/max-attributes-per-line": [
            "error",
            {
                "singleline": 10
            }
        ],

        /**
         * vue 单个节点不换行
         */
        "vue/singleline-html-element-content-newline": ["off"],

        /**
         * vue 组件调用命名，小写横杆
         */
        "vue/component-name-in-template-casing": [
            "error",
            "kebab-case",
            {
                "registeredComponentsOnly": false,
                "ignores": []
            }
        ],

        /**
         * vue 不允许使用静态 style
         */
        "vue/no-static-inline-styles": [
            "error",
            {
                "allowBinding": true
            }
        ],

        /**
         * vue 不允许使用未定义的组件，全局组件除外
         */
        "vue/no-undef-components": [
            "error",
            {
                "ignorePatterns": ["el(\\-\\w+)+", "app(\\-\\w+)+", "router-view"]
            }
        ],

        /**
         * vue <template> <script> <style> 之间要有换行
         */
        "vue/padding-line-between-blocks": ["error", "always"],

        /**
         * vue 多个子标签之间要有换行
         */
        "vue/padding-line-between-tags": ["error", [{ "blankLine": "always", "prev": "*", "next": "*" }]],

        /**
         * vue 使用宏 define 定义的变量命名必须遵循规范
         */
        "vue/require-macro-variable-name": [
            "error",
            {
                "defineProps": "props",
                "defineEmits": "emit",
                "defineSlots": "slots",
                "useSlots": "slots",
                "useAttrs": "attrs"
            }
        ],

        /**
         * 缩进空格
         */
        "indent": ["error", 4],

        /**
         * 最高代码行数
         */
        "max-lines": ["error", { "max": 500 }],

        /**
         * 导入排序
         */
        "sort-imports": [
            "error",
            {
                "ignoreCase": false,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": ["all", "single", "multiple", "none"],
                "allowSeparatedGroups": false
            }
        ],

        /**
         * 注释间隔
         */
        "spaced-comment": ["error", "always", { "markers": ["/"] }],

        /**
         * 注释换行
         */
        "lines-around-comment": [
            "error",
            {
                "beforeBlockComment": true,
                "beforeLineComment": true
            }
        ],

        /**
         * 不允许块内有多余的换行，关闭校验
         */
        "padded-blocks": ["off"],

        /**
         * 不可对函数参数进行原数据修改
         */
        "no-param-reassign": ["error", { "props": true }]
    }
}
```

:::

<AppComment />
