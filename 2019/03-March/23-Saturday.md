## 计划任务

- [x] 跟进 CRM v1.15 测试

## 阅读思考

### [Scaling webapps for newbs & non-techies](https://arcentry.com/blog/scaling-webapps-for-newbs-and-non-techies/)

服务的横向扩展是平行增加服务器，纵向扩展是使用更强大的计算机。由于计算机越强大，价格越昂贵，并且硬件条件有限，所以横向扩展增强服务是主流。

#### 反向代理

“reverse proxy” 反向代理，通常情况下，只是用来接受和转发请求。  
为什么叫反向代理？要站在后端的角度理解，通常情况下，请求是从服务器发送到网络。反之，服务器接受来自网络（用户客户端）的请求，路由到服务器，所以就叫反向代理。  
反向代理可以帮助我们检测服务器是否还处于运行状态；路由定位到正确的服务器；验证身份确保用户有访问服务器的权限；确保安全访问的防火墙。

![V59BFA.png](https://s2.ax1x.com/2019/06/14/V59BFA.png)

反向代理也可以用来作为负载均衡器，负载均衡通俗点说就是平衡服务器压力。

![V59ySP.png](https://s2.ax1x.com/2019/06/14/V59ySP.png)

#### 数据库

服务器扩展但依然使用同一数据库，那数据库如何扩展？  
我们扩展出多个数据库，为了保证数据 “一致性”，使用 主/从 模式。主数据库负责接收并存储数据（write），从服务器只能检索存储的数据（read）。

![V59DJI.png](https://s2.ax1x.com/2019/06/14/V59DJI.png)

但这种扩展仍然只有一个数据库能写入，对于中小型项目来说没问题，但无法满足 Facebook 这样的项目。

#### 微服务

将服务器分解为功能单元，单独部署，可互相连接。每个微服务可以有自己的资源，比如数据库，这样能在一定程度上缓解上面描述的数据库问题。

![V59rWt.png](https://s2.ax1x.com/2019/06/14/V59rWt.png)

#### 缓存和 CDN

将静态资源放到 CDN 并配置 HTTP 协议缓存字段，以空间换时间的方式提升速度。

![V59HyT.png](https://s2.ax1x.com/2019/06/14/V59HyT.png)

#### 消息队列

像 Facebook 这样的大型 Web 应用，每分钟都用成千上万的图片上传到服务器，每个图片都需要调整大小、分析元信息、标记等，这是一个耗时的过程，不可能等到所以任务都完成才反馈用户。
接收图片的服务器只需要在图片上传完成后，反馈到用户的同时，生成一些任务消息，发送给其它服务器，每个任务完成后都被释放，直到所有任务完成。这个处理任务的系统称之为 “消息队列”。

![V597lV.png](https://s2.ax1x.com/2019/06/14/V597lV.png)

#### Sharding

> "Sharding is a technique of parallelizing an application's stacks by separating them into multiple units, each responsible for a certain key or namespace"

通过一定的规则将用户分配给不同的服务器，比如地理位置、使用频率等。

![V59TS0.png](https://s2.ax1x.com/2019/06/14/V59TS0.png)

#### DNS

免费，可以用来对负载均衡器进行负载均衡。  
域名对应的是 IP 地址，DNS 注册表允许我们为每个域名指定多个 IP 地址，每个 IP 都对应不同的负载均衡器。

![V59IWq.png](https://s2.ax1x.com/2019/06/14/V59IWq.png)
