import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = { title: "联系我们", description: "提交你的 AI 工具、API、部署或企业定制需求。" };
export default function ContactPage() { return <><section className="page-hero compact-page-hero"><div className="container"><span className="eyebrow">CONTACT / NEXT STEP</span><h1>把你的需求，<span>交给我们一起拆解</span></h1><p>填写表单后，我们会基于使用场景提供对应的产品与技术服务建议。当前为演示提交流程，暂未接入真实工单系统。</p></div></section><section className="section contact-section"><div className="container contact-grid"><div className="contact-aside"><span className="eyebrow">WHAT HAPPENS NEXT</span><h2>从一条信息<br /><span>开始一次有效沟通</span></h2><p>你可以描述正在解决的问题、已有环境和期望交付时间。信息越具体，方案评估越高效。</p><div className="contact-steps">{["提交你的场景", "确认服务范围", "获得方案建议"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></div><ContactForm /></div></section></>; }
