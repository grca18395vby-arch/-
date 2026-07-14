import type { Metadata } from "next";
import { FAQ } from "@/components/sections/FAQ";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = { title: "帮助中心", description: "查看深度寻知的服务边界、使用规范、品牌关系和常见问题。" };
export default function HelpPage() { return <><section className="page-hero compact-page-hero"><div className="container"><span className="eyebrow">HELP CENTER / FAQ</span><h1>重要信息，<span>先说清楚</span></h1><p>这里集中整理服务边界、品牌声明、数据安全与常见使用问题。</p></div></section><section className="section"><div className="container narrow-container"><SectionHeading eyebrow="COMMON QUESTIONS" title="常见问题" description="如果没有找到答案，欢迎通过联系页面提交你的具体场景。" /><FAQ /></div></section><CTA /></>; }
