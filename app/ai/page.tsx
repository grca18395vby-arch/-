import type { Metadata } from "next";
import { AIProductDemo } from "@/components/sections/AIProductDemo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "AI 聚合平台", description: "在统一界面体验多种 AI 模型与工作流。" };
const featureCards = ["多模型对话", "模型快速切换", "会话记录", "提示词模板", "文档问答", "图像生成", "代码辅助", "翻译与润色", "多设备适配"];
export default function AIPage() { return <><section className="page-hero ai-page-hero"><div className="container"><span className="eyebrow">AI WORKSPACE / PRODUCT</span><h1>把不同 AI 能力<br /><span>放进同一个工作台</span></h1><p>通过一个平台满足文本生成、深度推理、内容创作、代码辅助、翻译、图像生成与知识问答等需求。</p><div className="hero-actions"><ButtonLink href="#demo">立即体验</ButtonLink><ButtonLink href="/pricing" variant="secondary">了解套餐</ButtonLink></div></div></section><section id="demo" className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">PRODUCT PREVIEW / 01</span><h2>统一界面，减少切换</h2><p>以下为官网展示用的模拟产品界面，不接入真实模型。</p></div></div><AIProductDemo /></div></section><section className="section"><div className="container"><div className="feature-mosaic">{featureCards.map((item, index) => <Reveal key={item} delay={index * 0.03}><div className={`mosaic-card mosaic-${index % 3}`}><span>0{index + 1}</span><h3>{item}</h3><p>{index < 3 ? "让常用任务在一个清晰的工作区内完成。" : "按使用场景组织能力，保持工作流连续。"}</p></div></Reveal>)}</div></div></section></>; }
