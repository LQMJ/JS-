### git与github

> git 版本控制工具


 - SVN：集中式
    弊端:版本控制必须需要网络支持，一般SVN都是局域网，只能是公司内部人员使用，外界的人想参与开发是比较麻烦的，中央服务器不一定就稳定，一旦出事中央服务器所有资源都洗白白。

 - git：分布式
    不需要网络支持就能进行版本控制，只要能上网还要有开发权限都能参与开发，就算远程仓库库出事儿，计算机已经有了历史记录

- github：程序员交友网站、远程仓库、帮助学习


> git的三大区域

- 工作区 （本地）

- 暂存区 （保护工作区和版本区）

- 版本区 （版本库、历史区）只有形成版本才能进行版本的控制


- 形成版本就是根据.git文件来操作的，所以说要进行版本控制，必须要有.git这个隐藏文件

- 按着tab键可以补全命令

- 设置用户信息:

  + git config --global user.name 'xxx'（用户名）

  +  git config --global user.eamil 'xxx'（邮箱）

- 创建版本仓库
    git init(想在哪进行版本控制，就在哪个文件夹下使用右键点击git bash here)


- 查看状态
    - git status 如果查看状态的时候发现文件是红色的，就说明文件没有进行版本控制

    - 通过（ll）或者（ls）查看目录的文件

    - 通过上下键去切换刚才输入命令
- 工作区到暂存区
    - git add 文件名 
    - git add .  (快速把所有文件都放到暂存区)


- 暂存区到版本区
    - git commit -m "取个自己能够识别的名字"


- 快速从工作区到版本区
    - git commit -a -m "取个自己能够识别的名字"

- 查看版本
    - git log
    - git reflog (查看所有的历史记录（包括历史区回滚后）)

   - 出现nothing to commit, working directory clean就说明没有文件没被管理了（都被管理了）


- git reset --hard 历史ID （版本回滚）

- 过滤文件
  - touch .gitignore   （ 创建.gitignore文件 ）

  - 在.gitignore文件中填写过滤的文件或文件夹

  - *.zip、*.rar、*.via、*.tmp过滤这些后缀名的文件

  - 排除指定文件夹下的文件， /txt/1.txt

  - 排除指定文件夹  \txt2

  - git rm -r --cached .  如果已经提交过的代码，使用.gitignore是无效的，那么请使用前面这段代码


- clear清屏

- 如果发现（:）号就按Q键退出

- 查看各大区域的区别
    - 工作区到暂存区  git diff
    - 工作区到版本区  git diff master
    - 暂存区到版本区  git diff --cached


- 把本地git的版本上传到github上管理

- 设置秘钥:
    + ssh-keygen -t rsa -C "your_email@example.com"

    + git Bash Here 的窗口会出现一个矩形框，框的上面是秘钥的那个地址，一般是C盘/用户/..ssh文件，在这个文件下打开后缀名是pub的文本，把里面的内容复制到创建秘钥的key框的里面。

    + 登录github，右边头像下拉列表有个settings，找到SSH and GPG keys，找到new ssh key点击，把秘钥放到文本框   中，点击add ssh key。

- 在github上创建一个项目
    + 加号下拉列表，第一个创建新项目
    + 仓库名称
    + 说明
    + 公开
    + README打钩

-  git remote -v （ 查看远程仓库 ）

- 创建远程仓库
    + git remote add origin 远程地址
    ```
       比如: git remote add origin git@github.com:nizp/2019-10-8.git
    ```

- 同步远程
    - git pull origin master  

- 推送到远程
    - git push origin(远程名字) master(分支名)
    ```
        比如:git push origin master
    ```
- 删除远程仓库
    - git remote remove 远程名字

### 第二种方式
- 克隆项目
    - 找到远程仓库的地址
    - git clone（ 远程仓库地址 ） 回车
    - git add .
    - git commit -m ''
    - git push origin master



### node的安装（自带就有npm）

- npm 目前是全球最大的包管理平台（里面有很多的代码资源）
  + -g（全局安装）
  + -s （项目依赖）
  + 项目的初始化：npm init -y
  + npm install  资源名（安装程序）
  + npm uninstall 删除安装程序


- nrm的安装
  + npm install nrm -g

  + nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换

  + nrm test（用nrm测速度） 
    
  + nrm use taobao （切换资源路线）


- yarn的安装
    + npm install yarn -g

    + Yarn是由Facebook、Google、Exponent 和 Tilde 联合推出了一个新的 JS 包管理工具 ，正如官方文档中写的，     Yarn 是为了弥补 npm 的一些缺陷而出现的。

    + yarn add 安装程序
    + yarn remove 要删除的程序


































