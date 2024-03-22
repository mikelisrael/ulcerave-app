"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { Dispatch, SetStateAction } from "react";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export function DashboardNav({ items, setOpen }: DashboardNavProps) {
  const path = usePathname();

  // Function to determine if a route is active
  const isActive = (href: string) => {
    // if item href is "/dashboard"
    if (href === "/dashboard") {
      return path === href;
    }

    return path === href || path.startsWith(href + "/");
  };

  if (!items?.length) {
    return null;
  }

  const DashboardIcon = Icons[items[0].icon || "arrowRight"];

  return (
    <nav className="grid items-start gap-2">
      {items[0].href && (
        <Link
          href={items[0].href}
          onClick={() => {
            if (setOpen) setOpen(false);
          }}
        >
          <span
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              isActive(items[0].href) ? "bg-accent" : "transparent",
              items[0].disabled && "cursor-not-allowed opacity-80",
            )}
          >
            <DashboardIcon className="mr-2 h-4 w-4" />
            <span>{items[0].title}</span>
          </span>
        </Link>
      )}

      {items.slice(1).map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];
        return (
          item.href && (
            <Link
              key={index}
              href={item.disabled ? "/" : item.href}
              onClick={() => {
                if (setOpen) setOpen(false);
              }}
            >
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  isActive(item.href) ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
