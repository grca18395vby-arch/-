import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return <section className="cta-section"><div className="container cta-inner"><div className="cta-orbit orbit-one" /><div className="cta-orbit orbit-two" /><div className="cta-copy"><span className="eyebrow">READY WHEN YOU ARE / 09</span><h2>需要 AI 工具、接口<br /><span>或部署服务？</span></h2><p>提交你的需求，我们将根据使用场景提供对应的产品与技术服务建议。</p></div><div className="cta-actions"><Link className="button button-primary" href="/contact">立即咨询 <ArrowUpRight size={16} /></Link><Link className="button button-secondary" href="/services">查看全部服务 <MessageCircle size={16} /></Link></div></div></section>;
}
