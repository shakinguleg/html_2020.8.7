# readme
- 项目说明文档
+ 列表
    - 项目说明文档, 随项目放在一起

## 初始化版本库
- git init
- 如果是clone别人的仓库, 则不需要初始化. 别人已经做过了且含有.git文件.
- 同理origin别人也已经配置过

## 添加文件到暂存区
- git add .

## 提交到本地仓库
- git commit -m "说明性文字"

## 查看修改变更
- git diff
- test


## 添加标签
- git tag v1.0 (默认给最近一次的提交添加标签)
- git tag v2.0 xxxxx

## 删除标签
- git tag -d v1.0

## 查看标签名
- git tag

## 跳到指定版本
- git reset --hard xxxx
- git reset --hard HEAD^ (上个版本)

## 移除暂存区上次操作
- git reset

## 关联远程仓库
- git remote add origin(节点名称自定义) 仓库地址
- git push -u origin master 设置默认远程仓库和分支

- git push 后面直接提交
## 重新设置节点名称
-git remote rm origin 移除远程origin节点名称
-git remote add xxx 仓库名称

## 查看远程仓库
- git remote -v

## 查看log历史
- git log --oneline (仅有注释)
- git log --oneline --graph (有修改历史界面)

## 存储当前工作状态(add过, 但还未commmit)
- git stash (存储)
<!-- 之后就可以切换到其他分支, 等到其他分支修改完毕后-->
<!-- 弹出之前工作区继续工作 -->
- git stash pop
