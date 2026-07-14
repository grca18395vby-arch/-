"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><span /></span>
          <span><strong>深度寻知</strong><small>DEEP INSIGHT</small></span>
        </Link>
        <nav className={open ? "main-nav open" : "main-nav"} aria-label="主导航">
          {siteConfig.nav.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
        </nav>
        <div className="nav-actions">
          <Link className="nav-login" href="/dashboard-demo">登录控制台 <ArrowUpRight size={14} /></Link>
          <Link className="button button-small" href="/contact">获取服务</Link>
        </div>
        <button className="menu-button" aria-label={open ? "关闭菜单" : "打开菜单"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
