<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('v20002')
</script>

# <AppCode code="120" /> 安装

<ClientOnly><AppRead code="v20002" /></ClientOnly>

在我们使用脚手架搭建项目的时候，默认是没有帮我们安装的。需要自己手动进行安装。安装的 Vue-Router 插件时需要注意版本信息，Vue2.0 使用的是 Vue-Router3.x ，而 Vue3.0 使用的是 Vue-Router4.x。

通过命令安装 vue-router@3 插件

```sh
$ yarn add vue-router@3
```

<AppComment />