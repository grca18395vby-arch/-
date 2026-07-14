import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { services } from "@/data/services";

export function generateStaticParams() { return services.filter((service) => service.slug !== "api" && service.slug !== "ai").map((service) => ({ slug: service.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const service = services.find((item) => item.slug === slug); return { title: service?.name ?? "服务详情", description: service?.description }; }
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const service = services.find((item) => item.slug === slug); if (!service || service.slug === "api" || service.slug === "ai") notFound(); return <ServiceDetail service={service} />; }
