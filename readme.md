# readme
- 项目说明文档
+ 列表
    - 项目说明文档, 随项目放在一起

## 初始化版本库
- git init

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

## 移除工作区上次操作
- git reset

## 关联远程仓库
- git remote add origin 仓库地址
- git push -u origin master 设置默认远程仓库和分支
- git push 后面直接提
## 在线修改

## 查看远程仓库
- git remote -v

## 
git log --graph --pretty=oneline --abbrev-commit
