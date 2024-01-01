# sub-web-new
[本项目](https://sub.z1.gs)
在[sub-web-modify](https://github.com/youshandefeiyang/sub-web-modify) 的基础上精简而来,

前端页面、CSS样式等文件均来自[@友善的肥羊](https://github.com/youshandefeiyang/sub-web-modify) ，

兼容node18版本，解决大部分布局细节问题，增加“暗黑模式”，默认自动切换亮/暗模式（点击“太阳/月亮”图标可手动切换），增加“高级功能”点击显示/隐藏，添加短链接选择/自定义功能。

后端API使用的是[tindy2013](https://github.com/tindy2013/subconverter) 大佬的原版镜像 。

### 使用方法：
建议使用Docker一键部署:
```
docker run -d --restart unless-stopped --privileged=true -p 58080:80 --name sub-web-modify ring1003/sub-web-new
```

或者使用docker-compose方式运行

```
version: "3"
services:
  sub-web-modify:
    image: ring1003/sub-web-new
    container_name: sub-web-new
    ports:
      - '58080:80'
    restart: unless-stopped
    privileged: true
```

访问地址举例:
```
http://192.168.10.1:58080/?backend=https://v2api.z1.gs
```
