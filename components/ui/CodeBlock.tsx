"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ code, language = "typescript" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => { await navigator.clipboard?.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1600); };
  return <div className="code-block"><div className="code-toolbar"><span><i /><i /><i /></span><small>{language}</small><button onClick={copy}>{copied ? <Check size={14} /> : <Copy size={14} />}{copied ? "已复制" : "复制"}</button></div><pre><code>{code}</code></pre></div>;
}
