"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) => href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><span /></span>
          <span><strong>深度寻知</strong><small>DEEP INSIGHT</small></span>
        </Link>
        <nav id="main-navigation" className={open ? "main-nav open" : "main-nav"} aria-label="主导航">
          {siteConfig.nav.map((item) => {
            const active = isCurrent(item.href);
            return <Link href={item.href} className={`nav-link ${active ? "active" : ""}`} aria-current={active ? "page" : undefined} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>;
          })}
        </nav>
        <div className="nav-actions">
          <Link className="nav-status" href="/status"><span className="status-dot" />系统正常</Link>
          <Link className="nav-login" href="/dashboard-demo">登录控制台 <ArrowUpRight size={14} /></Link>
          <Link className="button button-primary button-small" href="/contact">获取服务</Link>
        </div>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "关闭菜单" : "打开菜单"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
