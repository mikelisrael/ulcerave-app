import ThemeToggle from "@/components/ThemeToggle/theme-toggle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <Link href="/dashboard" className="relative hidden w-28 lg:block">
          <Image
            priority
            src="/logo.svg"
            width={200}
            height={200}
            alt="Logo"
            className="relative h-14 w-28"
          />
        </Link>

        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
