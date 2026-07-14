import type { Metadata } from "next";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { BackToTop } from "@/components/ui/BackToTop";
import { siteConfig } from "@/data/site";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "深度寻知｜AI 工具、API 聚合与 Codex 技术服务", template: "%s｜深度寻知" },
  description: siteConfig.description,
  openGraph: { title: "深度寻知｜AI 工具、API 聚合与 Codex 技术服务", description: siteConfig.description, type: "website", locale: "zh_CN" },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><SiteLayout>{children}</SiteLayout><BackToTop /></body></html>;
}
