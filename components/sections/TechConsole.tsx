"use client";

import { Activity, ArrowDownToLine, Braces, Check, CircleDot, Cpu, Database, GitBranch, Server, Terminal } from "lucide-react";

const nodes = [
  { icon: Cpu, label: "模型路由", sub: "example-model", cls: "node-blue" },
  { icon: Braces, label: "统一 API", sub: "POST /v1/chat", cls: "node-cyan" },
  { icon: Server, label: "运行环境", sub: "healthy / demo", cls: "node-green" },
];

export function TechConsole() {
  return (
    <div className="tech-console">
      <div className="console-glow" />
      <div className="console-top"><div className="window-dots"><i /><i /><i /></div><span>deep-insight / control-plane</span><span className="live-state"><CircleDot size={11} /> LIVE DEMO</span></div>
      <div className="console-body">
        <div className="console-side"><div className="side-label">WORKSPACE</div><div className="side-item active"><Activity size={14} /> Overview</div><div className="side-item"><GitBranch size={14} /> Model routes</div><div className="side-item"><Database size={14} /> Usage logs</div><div className="side-divider" /><div className="side-label">STATUS</div><div className="server-line"><i /> gateway <span>ok</span></div><div className="server-line"><i /> worker <span>ok</span></div></div>
        <div className="console-main"><div className="console-heading"><div><span className="eyebrow">REQUEST FLOW / 01</span><h3>One layer. Multiple capabilities.</h3></div><span className="mini-badge"><Check size={12} /> simulated</span></div>
          <div className="node-flow">{nodes.map((node, index) => { const Icon = node.icon; return <div className="flow-group" key={node.label}><div className={`console-node ${node.cls}`}><Icon size={18} /><div><strong>{node.label}</strong><small>{node.sub}</small></div></div>{index < nodes.length - 1 && <div className="flow-line"><span /></div>}</div>; })}</div>
          <div className="console-lower"><div className="metric-card"><div className="metric-card-top"><span>REQUESTS / 24H</span><Activity size={14} /></div><strong>12,480</strong><div className="metric-bars"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div></div><div className="terminal-mini"><div className="terminal-head"><Terminal size={13} /> request.log <span>⌘ K</span></div><p><em>16:42:08</em> route <b>example-model</b> <mark>200</mark></p><p><em>16:42:06</em> stream connected <mark>ok</mark></p><p><em>16:41:52</em> token budget <b>managed</b></p></div></div>
        </div>
      </div>
      <div className="console-foot"><span><ArrowDownToLine size={13} /> 统一接口可观测性</span><span>DEMO DATA ONLY</span></div>
    </div>
  );
}
