"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BreadCrumbDisplay = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path !== "");
  let accumulatedPath = "";

  const cleanPath = (path: string) => {
    return path.replace(/-/g, " ");
  };

  return (
    <Breadcrumb>
      <BreadcrumbList className="capitalize">
        {paths.map((path, index) => {
          accumulatedPath += `/${path}`;
          return (
            <>
              {index !== paths.length - 1 ? (
                <>
                  {index === 0 ? (
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href="/dashboard">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  ) : (
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={accumulatedPath}>{cleanPath(path)}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  )}
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage>{cleanPath(path)}</BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbDisplay;
