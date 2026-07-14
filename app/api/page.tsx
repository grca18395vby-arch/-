import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Check, Gauge, KeyRound, Network, RefreshCcw, UsersRound } from "lucide-react";
import { ApiFeature } from "@/components/sections/ApiFeature";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = { title: "AI API 聚合网关", description: "统一接入多类 AI 能力的 API 聚合网关与开发者服务。" };
const tabs = ["统一 API 格式", "多模型接入", "密钥管理", "调用统计", "费用与账单", "请求日志", "团队管理", "状态监控"];
const models = ["文本生成模型", "推理模型", "图像生成模型", "语音模型", "向量模型", "多模态模型"];
const curl = `curl https://api.example.com/v1/chat/completions \\
  -H "Authorization: Bearer $AI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{ "model": "example-model", "messages": [] }'`;

export default function ApiPage() { return <><section className="page-hero api-page-hero"><div className="container"><span className="eyebrow">API PLATFORM / GATEWAY</span><h1>让模型接入<br /><span>变成一件简单的事</span></h1><p>统一接口、模型切换、调用统计与团队管理，帮助开发者把精力放在产品本身。</p><div className="hero-actions"><ButtonLink href="/docs">查看开发文档</ButtonLink><ButtonLink href="/dashboard-demo" variant="secondary">进入控制台</ButtonLink></div><div className="api-hero-metrics"><div><strong>01</strong><span>统一接入层</span></div><div><strong>02</strong><span>可观测调用</span></div><div><strong>03</strong><span>按需扩展</span></div></div></div></section><section className="section"><div className="container"><ApiFeature /></div></section><section className="section api-capabilities"><div className="container"><div className="api-capability-header"><div><span className="eyebrow">CONTROL PLANE / 02</span><h2>从请求到团队，<br /><span>保持可见与可控</span></h2></div><p>面向开发者和企业团队，提供围绕调用全生命周期的基础能力。以下为平台功能示意，实际支持范围以控制台为准。</p></div><div className="api-capability-grid">{tabs.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><Check size={15} /></div>)}</div></div></section><section className="section model-section"><div className="container split-section"><div><span className="eyebrow">MODEL CATEGORIES / 03</span><h2>不同能力，<br /><span>一个接入方式</span></h2><p>模型类别展示用于说明平台的接入思路，不代表当前已支持的具体模型清单。</p><div className="model-list">{models.map((model) => <span key={model}><Network size={15} /> {model}</span>)}</div><div className="notice-box"><KeyRound size={16} /><span>请勿在前端代码中写入真实 API 密钥。示例使用虚构地址与环境变量。</span></div></div><CodeBlock code={curl} language="curl" /></div></section><section className="section api-cta"><div className="container centered-cta"><span className="eyebrow">START BUILDING</span><h2>准备好连接你的下一项能力了吗？</h2><p>先从文档和演示控制台开始，确认适合你的接入方式。</p><div className="hero-actions"><ButtonLink href="/docs">阅读开发文档</ButtonLink><Link href="/contact" className="text-link">咨询 API 方案 <ArrowRight size={16} /></Link></div></div></section></>; }
