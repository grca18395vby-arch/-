import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

export function SiteLayout({ children }: { children: ReactNode }) {
  return <><Header /><main><PageTransition>{children}</PageTransition></main><Footer /></>;
}
