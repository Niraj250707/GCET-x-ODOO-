import { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { AIChatWidget } from "@/components/ai/AIChatWidget";

interface LayoutProps {
  children: ReactNode;
  userName?: string;
}

export function Layout({ children, userName }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header userName={userName} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pb-20 md:pb-6">
          {children}
        </main>
      </div>
      <BottomNav />
      <AIChatWidget />
    </div>
  );
}
