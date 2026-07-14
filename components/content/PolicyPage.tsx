import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PolicyPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) { return <><section className="page-hero compact-page-hero"><div className="container"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{intro}</p></div></section><section className="section policy-section"><div className="container policy-layout"><aside><Link href="/help"><ArrowLeft size={14} /> 帮助中心</Link><span>POLICY / INFORMATION</span></aside><article className="policy-article">{children}</article></div></section></>; }
