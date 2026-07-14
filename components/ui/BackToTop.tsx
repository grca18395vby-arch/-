"use client";

import { ArrowUp } from "lucide-react";

export function BackToTop() { return <button className="back-top" aria-label="返回顶部" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={16} /></button>; }
