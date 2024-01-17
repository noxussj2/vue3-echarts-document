<script setup>
import Image1 from "./demo/_image1.png"
import Image2 from "./demo/_image2.png"
import Image3 from "./demo/_image3.png"
import Image4 from "./demo/_image4.png"
import Image5 from "./demo/_image5.png"
import Image6 from "./demo/_image6.png"
import Image7 from "./demo/_image7.png"
import Image8 from "./demo/_image8.png"
import Image9 from "./demo/_image9.png"
import Image10 from "./demo/_image10.png"
import Image11 from "./demo/_image11.png"
import Image12 from "./demo/_image12.png"
import Image13 from "./demo/_image13.png"
import { loginRead } from '@/utils/login-read'

loginRead('g10005')
</script>

# <AppCode code="23" /> Git 操作演示

<ClientOnly><AppRead code="g10005" /></ClientOnly>

## 项目初始化流程

**1. 查看 git 仓库地址**

在 gitee 上面操作，找到自己创建的项目仓库。

<AppImage :src="Image1" />

<br />

**2. 克隆项目**

填写自己的 git 仓库地址

`git clone https://gitee.com/noxussj/course-e-project3.git`

```cmd
PS C:\> git clone https://gitee.com/noxussj/course-e-project3.git
Cloning into 'course-e-project3'...
warning: You appear to have cloned an empty repository.
PS C:\>
```

已经克隆好了，它提示说你克隆的是一个空项目，这个很正常没问题。

<br />

**3. 配置邮箱和用户名**

需要进入到刚才创建项目的路径下，才能进行配置。

`git config user.name "HN"`

`git config user.email "632922356@qq.com"`

```cmd
PS C:\> cd .\course-e-project3\
PS C:\course-e-project3> git config user.name "HN"
PS C:\course-e-project3> git config user.email "632922356@qq.com"
PS C:\course-e-project3>
```

<br />

**4. 验证**

可以在项目根目录下查看 `.git` 文件夹，如果没有则需要开启 "显示隐藏文件"。

<AppImage :src="Image2" />

`.git` 文件夹里面有个 config 文件，直接拖入 VS Code 中。

<AppImage :src="Image3" />

可以看到我们的 git 仓库地址以及配置的用户名和邮箱。

## 修改文件后提交到远端仓库流程

**1. 新建文件并查看状态**

`git status` 用户查看当前暂存区的文件

标记红色：代表不在暂存区，标记绿色：已经在暂存区。

目前我已经新建了两个文件，可以通过命令进行查看状态。

<AppImage :src="Image4" />

<br />

**2. 添加修改的文件到暂存区**

`git add .` 代表把当前目录下的所有的红色文件提交到暂存区中。

<AppImage :src="Image5" />

<br />

**3. 把暂存区的文件提交到本地**

`git commit -m "提交的备注信息"`

<AppImage :src="Image6" />

<br />

**4. 拉取远端的文件，检查是否有冲突**

`git pull`

因为目前是第一次初始化项目，项目是空的，所以拉了个寂寞。如果以后开发中拉取遇到冲突时，则需要联系对应的小伙伴一起进行处理，处理完后需要重新拉取一次。

<AppImage :src="Image7" />

<br />

**5. 推送刚才提交的文件到线上仓库中**

`git push`

已经把文件推送到远端仓库上了。

<AppImage :src="Image8" />

验证完毕，能够在线上仓库中看到刚刚提交上来的文件。

<AppImage :src="Image9" />

## 标记标签/版本

可以给项目的每一个阶段/版本进行标记，方便后续查看某个版本的代码。

**创建标签**

`git tag v1.0.0` 打上标记

`git push --tag` 推送到线上仓库

<AppImage :src="Image10" />

验证

<AppImage :src="Image11" />

**删除标签**

`git tag -d v1.0.0` 删除本地标签

`git push origin --delete v1.0.0` 推送到线上仓库

<AppImage :src="Image12" />

验证

<AppImage :src="Image13" />

<AppComment />