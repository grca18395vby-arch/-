"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/faq";

export function FAQ({ limit }: { limit?: number }) {
  const [active, setActive] = useState(0);
  return <div className="faq-list">{faqs.slice(0, limit).map((item, index) => <div className={`faq-item ${active === index ? "active" : ""}`} key={item.q}><button onClick={() => setActive(active === index ? -1 : index)}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item.q}</strong><ChevronDown size={18} /></button><div className="faq-answer"><p>{item.a}</p></div></div>)}</div>;
}
