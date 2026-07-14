import type { Metadata } from "next";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = { title: "AI 服务", description: "查看深度寻知提供的 AI 工具、API、部署与 Codex 技术服务。" };
export default function ServicesPage() { return <><section className="page-hero"><div className="container"><span className="eyebrow">SERVICES / CATALOG</span><h1>为每一种 AI 场景<br /><span>准备合适的服务</span></h1><p>从订阅咨询到开发者基础设施，从个人使用到团队部署，用清晰的服务边界承接真实需求。</p></div></section><section className="section"><div className="container"><SectionHeading eyebrow="ALL CAPABILITIES" title="服务目录" description="以下内容包含演示数据与服务占位信息，实际范围以咨询确认结果为准。" /><ServiceGrid /></div></section></>; }
