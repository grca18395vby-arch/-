import type { Metadata } from "next";
import { PolicyPage } from "@/components/content/PolicyPage";
export const metadata: Metadata = { title: "隐私政策" };
export default function PrivacyPage() { return <PolicyPage eyebrow="PRIVACY POLICY" title="隐私政策" intro="我们重视信息安全，当前页面为上线前的隐私政策结构占位。"><h2>一、信息收集</h2><p>联系我们表单可能收集姓名、联系方式、邮箱、团队名称和需求描述，用于服务沟通。正式上线前需补充数据控制者、处理目的、保存期限与用户权利。</p><h2>二、信息使用</h2><p>信息仅用于响应咨询、评估服务范围和改进沟通流程，不应在未取得必要授权的情况下用于其他目的。</p><h2>三、API 日志与密钥</h2><p>API 服务正式上线前需明确请求日志、隐私脱敏、访问权限、数据保留和删除机制。用户应妥善保管 API 密钥。</p><h2>四、第三方服务</h2><p>如服务涉及第三方工具、模型或支付渠道，应在正式版本中补充对应的隐私说明和第三方规则链接。</p></PolicyPage>; }
