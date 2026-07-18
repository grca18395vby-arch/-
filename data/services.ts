import type { LucideIcon } from "lucide-react";
import { Braces, Bot, Cable, CloudCog, Code2, Languages, MessageSquare, PlugZap, Server, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  icon: LucideIcon;
  tone: "blue" | "cyan" | "violet" | "green" | "amber";
  tags: string[];
  href: string;
  eyebrow: string;
  bullets: string[];
  audience: string[];
  cta: string;
  compliance?: string;
};

export const services: Service[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT 订阅服务",
    shortName: "订阅协助",
    description: "订阅流程咨询、支付指导、账号使用说明与售后问题协助。",
    icon: MessageSquare,
    tone: "blue",
    tags: ["流程指导", "支付咨询", "售后支持"],
    href: "/services/chatgpt",
    eyebrow: "面向个人用户",
    bullets: ["订阅流程指导", "支付问题咨询", "使用问题解答", "套餐选择建议", "售后问题协助", "风险与注意事项说明"],
    audience: ["希望更便捷使用主流 AI 工具的个人用户", "需要订阅流程和支付问题咨询的用户", "需要基础账号使用支持的用户"],
    cta: "咨询订阅",
  },
  {
    slug: "api",
    name: "AI API 聚合网关",
    shortName: "API 聚合网关",
    description: "以统一接口连接多类 AI 能力，降低接入、切换和维护成本。",
    icon: Braces,
    tone: "cyan",
    tags: ["统一接口", "多模型接入", "调用统计"],
    href: "/api",
    eyebrow: "面向开发者与团队",
    bullets: ["统一 API 格式", "多模型接入", "API 密钥管理", "调用额度管理", "请求统计与日志", "模型切换与错误重试", "流式输出与频率限制", "团队成员管理", "接口状态监控", "SDK 与代码示例"],
    audience: ["需要统一接入多类 AI 能力的开发者", "正在搭建 AI 应用的创业团队", "需要调用、费用和权限管理的企业"],
    cta: "获取 API",
  },
  {
    slug: "sms",
    name: "国际短信验证服务",
    shortName: "短信验证",
    description: "面向合法开发测试、账号安全验证和国际业务场景的验证码接收服务。",
    icon: Smartphone,
    tone: "amber",
    tags: ["多地区", "状态查询", "API 接入"],
    href: "/services/sms",
    eyebrow: "面向合规业务场景",
    bullets: ["多国家和地区支持", "短信接收状态展示", "订单记录", "服务状态查询", "开发测试支持", "API 接入能力", "号码资源状态展示", "使用记录管理"],
    audience: ["本人合法账号验证", "经授权的开发测试", "国际业务验证场景"],
    cta: "咨询使用方式",
    compliance: "本服务仅限用户本人合法业务、开发测试和获得授权的验证场景。严禁用于批量注册、欺诈、垃圾营销、规避实名验证、绕过平台风控或其他违法违规行为。",
  },
  {
    slug: "deployment",
    name: "AI 网络与开发环境部署",
    shortName: "部署服务",
    description: "从云服务器、开发环境到 AI 应用运行环境，提供可落地的部署支持。",
    icon: CloudCog,
    tone: "violet",
    tags: ["云端部署", "环境配置", "安全加固"],
    href: "/services/deployment",
    eyebrow: "面向个人开发者与企业",
    bullets: ["云服务器环境配置", "Linux 系统初始化", "Docker 环境部署", "域名与 HTTPS 配置", "API 服务与数据库部署", "日志、监控与反向代理", "远程开发与团队协作环境", "服务迁移与维护"],
    audience: ["AI 应用开发与 API 服务运行", "企业内部工具与知识库部署", "远程开发与跨区域业务系统"],
    cta: "获取部署方案",
    compliance: "所有网络和服务器服务仅用于合法业务、软件开发、远程协作和企业数字化场景。",
  },
  {
    slug: "enterprise-agent",
    name: "企业垂直领域智能体",
    shortName: "垂直智能体",
    description: "围绕企业具体业务流程，定制具备知识理解、任务执行与协同能力的领域智能体。",
    icon: Bot,
    tone: "violet",
    tags: ["企业定制", "知识库接入", "流程自动化"],
    href: "/services/enterprise-agent",
    eyebrow: "面向企业团队",
    bullets: ["行业知识库与内部资料接入", "企业专属角色与权限设计", "业务流程自动化与任务编排", "多轮问答、检索与引用溯源", "内部系统与 API 对接规划", "人工审核与安全边界设计", "试点验证与效果评估", "持续运营与版本迭代"],
    audience: ["需要把专业知识沉淀为可复用能力的企业", "希望减少重复人工处理、提升业务响应效率的团队", "需要连接内部系统和业务流程的垂直行业项目"],
    cta: "咨询定制方案",
    compliance: "企业智能体的知识、权限、接口和部署方式需要根据真实业务进行评估；演示阶段仅展示服务范围，不代表已接入任何企业内部数据或系统。",
  },
  {
    slug: "ai",
    name: "深度寻知 AI 聚合平台",
    shortName: "AI 聚合平台",
    description: "在统一界面完成对话、创作、分析、翻译与开发任务。",
    icon: Sparkles,
    tone: "blue",
    tags: ["多模型对话", "文档问答", "代码辅助"],
    href: "/ai",
    eyebrow: "面向内容与知识工作者",
    bullets: ["多模型对话", "模型快速切换", "会话记录", "提示词模板", "文档问答", "图像生成与代码辅助", "翻译与润色", "多设备适配"],
    audience: ["学习、办公和写作", "编程、数据分析和翻译", "内容创作与创意设计"],
    cta: "立即体验",
  },
  {
    slug: "codex-skills",
    name: "Codex Skill 插件服务",
    shortName: "Skill 安装",
    description: "提供 Skill 插件安装、环境配置、故障排查与定制化工作流搭建。",
    icon: PlugZap,
    tone: "green",
    tags: ["插件安装", "环境配置", "工作流搭建"],
    href: "/services/codex-skills",
    eyebrow: "面向 Codex 用户",
    bullets: ["Skill 插件安装", "插件依赖配置", "环境变量配置", "兼容性检查", "MCP 或外部工具连接", "开发工具集成", "工作流配置", "升级与维护"],
    audience: ["Codex 新用户与独立开发者", "自动化工作流用户", "需要连接外部工具的企业研发团队"],
    cta: "预约安装",
    compliance: "部分插件可能涉及第三方服务、API 密钥或独立订阅费用，实际费用以第三方服务规则为准。",
  },
  {
    slug: "codex-chinese",
    name: "Codex 中文化与使用优化",
    shortName: "中文化服务",
    description: "为中文用户提供界面语言优化、提示词模板、配置指导与日常使用支持。",
    icon: Languages,
    tone: "cyan",
    tags: ["中文指南", "提示词模板", "版本兼容"],
    href: "/services/codex-chinese",
    eyebrow: "面向中文开发者",
    bullets: ["中文界面适配", "中文术语优化", "中文操作指南", "中文提示词模板", "常用命令说明", "开发环境配置", "使用问题排查", "版本兼容性检查"],
    audience: ["希望提升中文使用体验的用户", "需要中文提示词和操作指南的开发者", "需要版本兼容性支持的团队"],
    cta: "查看中文化方案",
    compliance: "中文化或语言适配可能受到软件版本更新影响；不修改或绕过软件授权验证，不提供破解、盗版或规避付费功能。",
  },
];

export const deploymentSteps = ["需求评估", "环境规划", "服务器配置", "服务部署", "安全检查", "运行测试", "售后维护"];
export const deploymentTags = ["Linux", "Docker", "Nginx", "HTTPS", "Node.js", "Python", "数据库", "日志监控"];

export const iconSet = { Cable, Code2, Server, ShieldCheck };
