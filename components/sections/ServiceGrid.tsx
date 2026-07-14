"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";

export function ServiceGrid({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState("全部");
  const categories = ["全部", "个人用户", "开发者", "企业团队"];
  const visible = (compact ? services.slice(0, 7) : services).filter((service) => {
    if (filter === "全部") return true;
    if (filter === "个人用户") return ["chatgpt", "ai", "codex-chinese"].includes(service.slug);
    if (filter === "开发者") return ["api", "deployment", "codex-skills", "codex-chinese"].includes(service.slug);
    return ["api", "deployment", "codex-skills"].includes(service.slug);
  });
  return <><div className="filter-row">{categories.map((category) => <button className={filter === category ? "active" : ""} onClick={() => setFilter(category)} key={category}>{category}</button>)}</div><div className="service-grid">{visible.map((service, index) => { const Icon = service.icon; return <Reveal key={service.slug} delay={index * 0.04}><article className={`service-card tone-${service.tone}`}><div className="card-icon"><Icon size={20} /></div><span className="card-eyebrow">{service.eyebrow}</span><h3>{service.name}</h3><p>{service.description}</p><div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><Link href={service.href}>查看详情 <ArrowUpRight size={15} /></Link><div className="card-index">0{index + 1}</div></article></Reveal>; })}</div></>;
}
