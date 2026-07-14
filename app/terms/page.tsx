import type { Metadata } from "next";
import { PolicyPage } from "@/components/content/PolicyPage";
export const metadata: Metadata = { title: "用户协议" };
export default function TermsPage() { return <PolicyPage eyebrow="TERMS OF SERVICE" title="用户协议" intro="请在使用相关服务前阅读本协议，当前页面为上线前的内容占位与结构示例。"><h2>一、服务范围</h2><p>深度寻知提供 AI 工具使用咨询、开发者基础设施、部署支持及相关技术服务。具体服务内容、交付方式和费用以双方确认结果为准。</p><h2>二、用户责任</h2><p>用户应遵守适用法律法规、第三方平台条款及本网站的可接受使用政策，不得将服务用于违法违规、欺诈、账号盗用或其他损害他人权益的行为。</p><h2>三、演示内容</h2><p>网站中的控制台数据、状态指标、代码地址和产品界面均可能为演示内容，不构成真实服务承诺。上线前应由企业补充正式条款和服务细则。</p><h2>四、联系</h2><p>如对协议内容有疑问，请通过 <a href="/contact">联系我们</a> 页面提交信息。</p></PolicyPage>; }
