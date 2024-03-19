import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulcerave | Dashboard",
  description: "Analytics and insights for Ulcerave.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="w-full pt-16">
          <ScrollArea className="h-full">
            {children}
            <ScrollBar />
          </ScrollArea>
        </main>
      </div>
    </>
  );
}
