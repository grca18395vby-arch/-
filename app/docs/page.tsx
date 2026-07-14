import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ChevronRight, CircleHelp, Code2, KeyRound, ShieldCheck } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";

export const metadata: Metadata = { title: "API 开发文档", description: "深度寻知 AI API 聚合网关开发文档演示页面。" };
const js = `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AI_API_KEY,
  baseURL: process.env.AI_BASE_URL,
});

const response = await client.chat.completions.create({
  model: "example-model",
  messages: [{ role: "user", content: "Hello" }],
});`;
const python = `from openai import OpenAI
import os

client = OpenAI(
    api_key=os.environ["AI_API_KEY"],
    base_url=os.environ["AI_BASE_URL"],
)

response = client.chat.completions.create(
    model="example-model",
    messages=[{"role": "user", "content": "Hello"}],
)`;

export default function DocsPage() { return <div className="docs-layout"><aside className="docs-sidebar"><Link href="/docs" className="docs-brand"><BookOpen size={17} /> API 文档</Link><div className="docs-nav"><span>开始使用</span><Link className="active" href="#overview">概览</Link><Link href="#auth">鉴权与密钥</Link><Link href="#request">发起请求</Link><span>参考</span><Link href="#models">模型类别</Link><Link href="#errors">错误处理</Link><span>支持</span><Link href="/help">帮助中心</Link><Link href="/contact">联系支持</Link></div><div className="docs-side-note"><ShieldCheck size={15} />演示文档<br />实际能力以控制台为准</div></aside><main className="docs-main"><div className="docs-topline"><span>DEVELOPER DOCS / V1</span><span>演示版本 · 2026.07</span></div><section id="overview" className="docs-article"><span className="eyebrow">GET STARTED</span><h1>用一个接口，<br /><span>开始构建 AI 应用</span></h1><p className="lead">本页面展示统一 API 接入的基本思路。地址、模型名和密钥均为虚构演示内容，不能直接用于生产环境。</p><div className="docs-callout"><CircleHelp size={18} /><div><strong>先确认服务范围</strong><p>实际支持模型、额度、计费方式和服务可用性，请以控制台和服务确认结果为准。</p></div></div><h2 id="auth">鉴权与密钥</h2><p>将密钥保存在服务端环境变量中，通过请求头发送。不要把密钥写入前端代码、公开仓库、日志或截图。</p><CodeBlock code={`AI_API_KEY=your_api_key\nAI_BASE_URL=https://api.example.com/v1`} language="bash" /><h2 id="request">发起请求</h2><p>以下示例分别展示 JavaScript 与 Python 的调用方式。统一网关会使用兼容的请求结构进行演示。</p><div className="docs-code-grid"><CodeBlock code={js} language="javascript" /><CodeBlock code={python} language="python" /></div><h2 id="models">模型类别</h2><div className="docs-reference-grid">{["文本生成", "推理", "图像生成", "语音", "向量", "多模态"].map((item) => <div key={item}><Code2 size={15} /><strong>{item}模型</strong><ChevronRight size={15} /></div>)}</div><h2 id="errors">错误处理</h2><p>生产接入时应实现超时、重试、频率限制和日志脱敏策略，并在服务端保留必要的请求追踪信息。</p><div className="notice-box"><KeyRound size={16} /><span>安全提醒：不要在浏览器端暴露 AI_API_KEY。当前页面不包含任何真实密钥。</span></div></section></main></div>; }
