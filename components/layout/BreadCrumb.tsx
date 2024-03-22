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
import React from "react";

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
            <React.Fragment key={index}>
              {index !== paths.length - 1 ? (
                <React.Fragment key={index}>
                  {index === 0 ? (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink asChild>
                        <Link href="/dashboard">Home</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  ) : (
                    <BreadcrumbItem key={index}>
                      <BreadcrumbLink asChild>
                        <Link href={accumulatedPath}>{cleanPath(path)}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  )}
                  <BreadcrumbSeparator key={`${index}-separator`} />
                </React.Fragment>
              ) : (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage>{cleanPath(path)}</BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbDisplay;
