import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { BRAND_DISCLAIMER, CONTACT_EMAIL } from "@/lib/constants";
import { footerGroups } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-intro">
            <Link href="/" className="brand"><span className="brand-mark"><span /></span><span><strong>深度寻知</strong><small>DEEP INSIGHT</small></span></Link>
            <p>连接全球 AI 能力，让智能服务触手可及。</p>
            <div className="footer-contact"><span><Mail size={15} /> {CONTACT_EMAIL}</span><span><MapPin size={15} /> 中国 · 面向全球服务</span></div>
          </div>
          <div className="footer-links">
            {footerGroups.map((group) => <div key={group.title}><h3>{group.title}</h3>{group.links.map(([label, href]) => <Link href={href} key={href}>{label}<ArrowUpRight size={13} /></Link>)}</div>)}
          </div>
        </div>
        <div className="footer-disclaimer"><span className="eyebrow">BRAND NOTICE</span><p>{BRAND_DISCLAIMER}</p></div>
        <div className="footer-bottom"><span>© 2026 深度寻知 · 独立第三方技术服务平台</span><div><Link href="/terms">用户协议</Link><Link href="/privacy">隐私政策</Link><Link href="/acceptable-use">可接受使用政策</Link><Link href="/refund">退款政策</Link></div></div>
      </div>
    </footer>
  );
}
