# Render 演示部署说明

本项目当前按演示用途配置为 Render 免费静态站点，可直接通过 Blueprint 导入 GitHub 仓库。

## 自动部署

1. 打开 Render Dashboard，选择 **New → Blueprint**。
2. 连接 GitHub 仓库 `grca18395vby-arch/-`。
3. Render 会读取 `render.yaml` 并创建免费的 Static Site 服务。

## 手动配置

- **Type**: `Static Site`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `out`
- **Node Version**: `20` 或更高

## 演示版说明

- 页面使用演示数据，不代表真实客户、订单、余额或服务指标。
- 联系表单只展示前端校验和成功状态，不会保存或发送真实信息。
- API 地址、模型名和密钥均为虚构演示内容。
- 页面交互在浏览器端运行，不需要真实后端或数据库。

## 后续接入真实服务

后期租用服务器后，可以将前端请求改为读取后端环境变量，例如：

```text
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
CONTACT_API_URL=https://api.example.com/contact
```

真实 API 密钥不要写入前端代码或提交到 GitHub。

项目使用 Next.js 静态导出，构建产物为 `out`，因此演示阶段不需要 Node 服务进程。
