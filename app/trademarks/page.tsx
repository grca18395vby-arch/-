import type { Metadata } from "next";
import { BRAND_DISCLAIMER } from "@/lib/constants";
import { PolicyPage } from "@/components/content/PolicyPage";
export const metadata: Metadata = { title: "第三方品牌声明" };
export default function TrademarksPage() { return <PolicyPage eyebrow="TRADEMARK NOTICE" title="第三方品牌声明" intro="我们尊重第三方品牌、产品名称与商标的权利归属。"><div className="brand-statement"><span className="eyebrow">INDEPENDENT SERVICE PLATFORM</span><p>{BRAND_DISCLAIMER}</p></div><h2>页面使用说明</h2><p>页面中出现的 ChatGPT、OpenAI、Codex 或其他第三方产品名称，仅用于描述服务适用场景或技术上下文，不代表官方合作、代理、授权或隶属关系。</p><h2>服务表述</h2><p>涉及第三方产品的服务，应理解为订阅咨询、购买协助或技术支持服务。除非页面另有正式授权说明，不应理解为官方充值、官方代理或授权经销。</p></PolicyPage>; }
