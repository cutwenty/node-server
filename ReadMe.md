# node-server
这是我腾讯云 node 服务器的代码，服务器是 ubuntu 14.04 系统，不得不说 ubuntu 真是很好用的 linux 系统。

服务器使用 express 打开服务，forever 管理 node 进程，bunyan 输出日志。

## 配置

node_modules 安装可以用

	npm install
		
或

	yarn install
	
不过 yarn 有包缓存管理的功能，下载会很快，yarn 的安装 [官网](https://yarnpkg.com/en/docs/install#mac) 有很详细的说明。

由于打开的是 80 端口，要用 sudo 打开 node 服务：

	sudo node app.js
	
不过这种方法如果终端关闭了，就会结束 node 服务。

最好的解决办法是使用 [forever](http://blog.csdn.net/huodianyan/article/details/40583287)。

	sudo npm run start	//打开服务器
	sudo npm run stop	//停止服务
	
## 添加路由

只要在 router 下添加一个路由文件夹和 index.js 作为路由的路口文件，接下来路由文件夹内怎么写都可以了。

## 添加中间件

和 router 类似，只要把中间件文件写在 middleware 文件夹下就可以了。

## 添加数据

其他的 数据文件 像图片、json，可以放在 data 文件夹下。自己通过路由访问。

## 日志功能
使用 [node-bunyan](https://github.com/trentm/node-bunyan/)。。。
