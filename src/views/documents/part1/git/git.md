<script setup>
import { loginRead } from '@/utils/login-read'

loginRead('g10001')
</script>

# <AppCode code="19" /> Git 介绍

<ClientOnly><AppRead code="g10001" /></ClientOnly>

## 什么是 Git？

git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。可以理解为 git 就是一个代码管理的仓库。

:::tip 指导
在学习一个新知识的时候，我们主要围绕这个思想去学习，就是为什么要学习这个新技术/知识，它的出现有什么作用？带来了什么好处？在学习 git 或者其他新知识之前，不要迫切的去看它们的代码/命令怎么写。而是先要了解它。
:::

## 基础案例

git 的出现，那么一定会有它的作用。举个例子，现在我有一个项目，里面有两个文件，分别是 a.html 和 b.html。

**a.html**

```html
<!DOCTYPE html> ．
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body></body>
</html>
```

**b.html**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body></body>
</html>
```

现在 boss 发布了新的需求任务，说让小明去把 a.html 文件的标题改为 "xiaoming "，让李白把 b.html 文件的标题改为 "libai "，5 分钟之内完成。由于时间紧迫，必须要两个人同时进行。那不用 git 的情况下，大家是如何做到两个人同时维护一个项目的代码呢？

### 传统方式实现

让我大胆假设一下大家的做法，该项目是李白搭建的（项目文件都在李白的电脑上面），这个时候小明就跟李白说把 a.html 文件通过微信发过来给我吧，然后我改完后就把这个文件再发回给你，同时小明会告诉李白我改了这个文件的哪个地方。

### git 方式实现

通过 git 方式实现，那么项目的真正文件就不会在李白或者小明其中一个人的电脑上（而是在线上的仓库，例如 gitee 或者 github）。当然项目文件也会在李白或者小明的电脑上（但这个是一个副本，正本是在线上仓库里面）。小明修改 a.html 后无需告知李白改了哪里，直接通过 git 的提交功能，把自己电脑上的代码更新到线上仓库上面，然后告诉李白，我代码提交了上去了线上仓库了。李白就通过 git 的下拉功能把线上仓库的代码同步到自己电脑的代码上。也不需要通过微信相互去传输文件。

现实生活中也存在很多类似的情况，例如使用 app 的相册管家、手机同步助手、ICloud 等都类似 Git 的方式，数据都是存在线上的。

![image](./git/image1.png)

这里是简化版的 git 使用流程

**使用 git 的优势**

-   高效率协同开发：不需频繁的发送文件给其他同事去更新
-   代码文件线上存储，更加安全可靠：不会因为电脑损坏而丢失代码，还可以恢复到指定版本的代码
-   方便错误跟踪：git 会记录某个时间点，某个人改了某一行代码

到了这里应该对 git 有了一个比较清晰的认知了吧？如果觉得没问题那么在继续往下看，下一篇文章会详细介绍 如何创建一个线上仓库。以及后续的文章会陆续介绍 git 工作流程，包含如何提交代码，如何拉取最新代码。

<AppComment />