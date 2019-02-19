# 简介
本项目介绍了前端实现跨域的几种方式，有通过window.name、document.domain、hash和postMessage，还有jsonp和CORS。
是否跨域成功可在控制台中查看

# 用法
克隆并npm install之后直接```npm start```即可。

# 注意
既然我们做的是前端跨域的几种实现，那么就需要占用两个域名。一个是www.abc.com还有一个是abc.com。在系统的hosts文件中添加如下两行：

```
127.0.0.1 www.abc.com
127.0.0.1 abc.com
```

**node是起在8899端口的**

好了开心的验证吧。
