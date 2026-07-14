import Link from "next/link";
import { ArrowRight, ChevronRight, ShieldCheck, Sparkles, Terminal, Zap } from "lucide-react";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { TechConsole } from "@/components/sections/TechConsole";
import { ApiFeature } from "@/components/sections/ApiFeature";
import { AIProductDemo } from "@/components/sections/AIProductDemo";
import { TerminalDemo } from "@/components/sections/TerminalDemo";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { deploymentSteps, deploymentTags } from "@/data/services";

export default function Home() {
  return <>
    <section className="hero-section"><div className="hero-grid" /><div className="hero-orb orb-blue" /><div className="hero-orb orb-violet" /><div className="container hero-inner"><div className="hero-copy"><div className="hero-kicker"><span className="pulse-dot" /> DEEP INSIGHT / AI SERVICE PLATFORM</div><h1>连接全球 AI 能力，<br /><span>让智能服务触手可及</span></h1><p>深度寻知为个人用户、开发者和企业提供 AI 工具订阅支持、统一 API 接入、国际短信验证、网络环境部署、AI 聚合平台及 Codex 配置服务。</p><div className="hero-actions"><ButtonLink href="/services">探索全部服务</ButtonLink><ButtonLink href="/contact" variant="secondary">咨询解决方案</ButtonLink></div><div className="hero-note"><Zap size={15} /> 一站式解决 AI 工具使用、开发接入和运行部署需求。</div></div><div className="hero-visual"><TechConsole /><div className="floating-chip chip-top"><span className="chip-icon"><Sparkles size={15} /></span><div><small>AI CAPABILITIES</small><strong>Ready to connect</strong></div></div><div className="floating-chip chip-bottom"><ShieldCheck size={15} /><span>合规边界清晰</span></div></div></div></section>
    <TrustStrip />
    <section className="section services-section"><div className="container"><SectionHeading eyebrow="CAPABILITIES / 01" title="一站式 AI 服务矩阵" description="从个人工具使用，到企业级 API 接入和开发环境部署，按你的场景组合所需能力。" action={<Link className="text-link" href="/services">查看全部服务 <ArrowRight size={16} /></Link>} /><ServiceGrid compact /></div></section>
    <section className="section api-section"><div className="container"><ApiFeature /></div></section>
    <section className="section ai-section"><div className="container"><div className="ai-section-heading"><div><span className="eyebrow">AI WORKSPACE / 03</span><h2>一个平台，体验<br /><span>多种 AI 模型</span></h2><p>无需频繁切换不同工具，在统一界面完成对话、创作、分析与开发任务。</p><div className="tag-row big-tags"><span>多模型对话</span><span>图像生成</span><span>文档分析</span><span>代码辅助</span><span>翻译润色</span><span>提示词模板</span></div></div><ButtonLink href="/ai" variant="secondary">了解 AI 聚合平台</ButtonLink></div><AIProductDemo /></div></section>
    <section className="section codex-section"><div className="container"><SectionHeading eyebrow="CODEX SERVICES / 04" title="让 Codex 更容易安装、更容易使用" description="为中文用户和开发者提供插件安装、环境配置、中文使用优化与工作流支持。" /><div className="codex-grid"><Link href="/services/codex-skills" className="codex-card"><div className="codex-card-head"><span className="card-icon tone-icon-green"><Terminal size={20} /></span><ArrowRight size={17} /></div><span className="eyebrow">SKILL PLUGINS</span><h3>Skill 插件安装</h3><p>完成插件安装、依赖配置、外部工具连接和工作流搭建。</p><span className="card-link">查看安装服务 <ChevronRight size={14} /></span></Link><Link href="/services/codex-chinese" className="codex-card featured-codex"><div className="codex-card-head"><span className="card-icon tone-icon-cyan"><Sparkles size={20} /></span><ArrowRight size={17} /></div><span className="eyebrow">CHINESE EXPERIENCE</span><h3>中文化与使用优化</h3><p>提供中文界面适配、中文操作指南、提示词模板和版本兼容支持。</p><span className="card-link">查看中文化方案 <ChevronRight size={14} /></span></Link></div><TerminalDemo /></div></section>
    <section className="section deployment-section"><div className="container"><div className="deployment-heading"><div><span className="eyebrow">DEPLOYMENT / 05</span><h2>从本地开发到云端运行</h2><p>围绕 AI 应用和企业数字化场景，规划可理解、可维护的运行环境。</p></div><ButtonLink href="/services/deployment">获取部署方案</ButtonLink></div><div className="step-line">{deploymentSteps.map((step, index) => <div className="step-item" key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < deploymentSteps.length - 1 && <i />}</div>)}</div><div className="deployment-tags">{deploymentTags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></section>
    <section className="section advantage-section"><div className="container"><SectionHeading eyebrow="WHY DEEP INSIGHT / 06" title="专业服务，也保持透明" description="不堆砌未经验证的数字，用清晰的边界、流程和交付预期建立长期信任。" /><div className="advantage-grid">{["服务覆盖完整", "面向中文用户", "开发者友好", "一对一技术支持", "流程透明", "售后响应", "灵活套餐", "注重隐私与安全"].map((item, index) => <Reveal key={item} delay={index * 0.04}><div className="advantage-item"><span>0{index + 1}</span><strong>{item}</strong><ShieldCheck size={16} /></div></Reveal>)}</div></div></section>
    <section className="section faq-section"><div className="container faq-layout"><div className="faq-intro"><span className="eyebrow">FAQ / 07</span><h2>把重要问题<br /><span>先说清楚</span></h2><p>服务边界、品牌关系、数据安全和使用规范，都可以在这里找到明确说明。</p><Link className="text-link" href="/help">前往帮助中心 <ArrowRight size={16} /></Link></div><FAQ limit={6} /></div></section>
    <CTA />
  </>;
}
