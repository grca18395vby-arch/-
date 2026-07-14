import { BarChart3, BookOpen, Gauge, KeyRound, MonitorCheck, Network, RefreshCcw, UsersRound } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const code = `import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.AI_API_KEY,
  baseURL: process.env.AI_BASE_URL,
});

const response = await client.chat.completions.create({
  model: "example-model",
  messages: [{
    role: "user",
    content: "请介绍深度寻知的服务",
  }],
});`;

const features = [[Network, "统一接口"], [RefreshCcw, "多模型切换"], [BarChart3, "调用统计"], [Gauge, "额度控制"], [UsersRound, "团队管理"], [MonitorCheck, "实时日志"], [KeyRound, "密钥管理"], [BookOpen, "开发文档"]] as const;

export function ApiFeature() {
  return <div className="api-feature-grid"><div className="api-feature-copy"><span className="eyebrow">API GATEWAY / 02</span><h3>一个接口，连接多种 AI 能力</h3><p>为开发者和企业提供统一的模型 API 接入、密钥管理、调用统计、费用管理和模型切换能力。</p><div className="feature-list">{features.map(([Icon, label]) => <div key={label}><Icon size={16} /><span>{label}</span></div>)}</div></div><div className="api-code-wrap"><div className="code-context"><span className="status-live" /> <span>DEMO ENDPOINT</span><small>实际支持模型以控制台为准</small></div><CodeBlock code={code} /></div></div>;
}
