import type { Metadata } from "next";
import { PolicyPage } from "@/components/content/PolicyPage";
export const metadata: Metadata = { title: "退款政策" };
export default function RefundPage() { return <PolicyPage eyebrow="REFUND POLICY" title="退款政策" intro="当前页面为售后规则占位，正式上线前需结合实际产品、支付方式和法律要求补充。"><h2>一、服务确认</h2><p>服务开始前应明确服务范围、交付方式、时间节点和费用。不同服务的取消与退款条件可能不同。</p><h2>二、已开始服务</h2><p>如服务已经开始执行，退款范围应依据已完成工作、第三方成本和双方确认的服务条款评估。</p><h2>三、第三方费用</h2><p>涉及第三方服务、独立订阅或不可撤销成本时，实际费用应以第三方规则和事先确认结果为准。</p><h2>四、咨询售后</h2><p>如需申请售后，请通过 <a href="/contact">联系我们</a> 提交订单或需求信息。</p></PolicyPage>; }
