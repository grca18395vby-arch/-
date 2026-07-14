# Render 演示部署

## 1. 上传代码

将整个项目上传到 GitHub 仓库，建议保持仓库为 Private。

## 2. 创建服务

在 Render 中选择 `New → Web Service`，连接该 GitHub 仓库。

项目根目录直接使用仓库根目录，不需要填写 Root Directory。

推荐配置：

```text
Runtime: Node
Plan: Free
Build Command: npm install && npm run build
Start Command: npm start
Health Check Path: /
```

项目也已经提供 `render.yaml`，如果使用 Blueprint，可以直接读取配置。

## 3. 演示版说明

- 页面使用演示数据，不代表真实客户、订单、余额或服务指标。
- 联系表单只展示前端校验和成功状态，不会保存或发送真实信息。
- API 地址、模型名和密钥均为虚构演示内容。
- Render 免费 Web Service 长时间无人访问后可能休眠，首次打开会有冷启动延迟。

## 4. 后续接入真实服务器

后续只需要将前端表单和页面数据请求改为读取后端环境变量，例如：

```text
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
CONTACT_API_URL=https://api.example.com/contact
```

真实 API 密钥不要写入前端代码或提交到 GitHub。
