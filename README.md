# 响应式理财网站
这是学习响应式后的第一个项目，随课做完。基于CSS媒体查询，以实际上线的互联网金融网站为案例。

👉 [理财宝首页](https://chasen8.github.io/licaibao/src/)<br><br>
![N|Solid](http://m.qpic.cn/psb?/V14DPIsG3ADUGY/jsNBrJ5nCwoQgYuH1IwrTHyiwPIifWhKsK7o22cjeYo!/b/dGsBAAAAAAAA&bo=.QF0AwAAAAADB60!&rf=viewer_4)<br>
![N|Solid](http://m.qpic.cn/psb?/V14DPIsG3ADUGY/RDlg59Rk0ahDLKH9uJFuMnLBXZFODHtj1fmlS0n9RE0!/b/dJEAAAAAAAAA&bo=WAWAAgAAAAADJ90!&rf=viewer_4)

## 技术

- HTML：实现基本的 HTML 结构
- CSS：渐进增强 or 优雅降级；自己整理的 reset.css 来统一页面初始样式；相对单位 rem；媒体查询；清除浮动等
- JS：增加了一些特效，通过特效来改进用户体验；解决了一些浏览器兼容性问题；用 eslint 做 js 代码校验
- OwlCarousel2.js：响应式轮播图插件
- Gulp：自动化构建工具，使用Gulp进行自动化打包发布
- Node.js：同步异步编程方式的区别，包管理器NPM的使用，package.json 如何配置，http-server 的使用等知识
- Picturefill：填平浏览器picture标签的兼容




## 收获

1. 对常见的响应式布局方法（CSS Media Query、Flex 弹性布局、Bootstrap 栅格系统）有了更深的认识
2. 加深了对 css3 的一些特性的掌握，如 border-radius、transition 等
3. 能够快速掌握并使用一个简易 JS 插件
4. 熟悉了Node.js的基本知识、包管理器npm的使用、httpserver的使用
5. 熟悉了自动化构建工具 Gulp 的基本流程

<br><br>
上传github后在打开GitHub Pages时有个奇怪的错误，报错原因是项目中的OwlCarousel2插件，有一个未使用到的文件报错未正确闭合，因为这个项目未用到文件，所以我直接将文件删除了，错误现在还未弄清楚。这个插件就少一个docs_src目录。
