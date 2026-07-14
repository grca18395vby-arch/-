import type { Metadata } from "next";
import { PolicyPage } from "@/components/content/PolicyPage";
export const metadata: Metadata = { title: "可接受使用政策" };
export default function AcceptableUsePage() { return <PolicyPage eyebrow="ACCEPTABLE USE" title="可接受使用政策" intro="本政策用于说明服务的合法、合规使用边界。"><h2>允许的使用场景</h2><p>AI 工具学习、办公、软件开发、合法业务验证、远程协作、企业数字化和经授权的测试场景。</p><h2>禁止的使用行为</h2><p>禁止用于欺诈、账号盗用、批量注册、垃圾营销、伪造身份、规避实名验证、绕过平台风控、侵犯知识产权或违反第三方平台条款的行为。</p><h2>短信验证专项说明</h2><p>国际短信服务仅限用户本人合法业务、开发测试和获得授权的验证场景。不得用于批量注册、欺诈、垃圾营销、规避实名验证或其他违法违规行为。</p><h2>网络与部署服务</h2><p>网络和服务器服务仅用于合法业务、软件开发、远程协作和企业数字化场景。</p></PolicyPage>; }
