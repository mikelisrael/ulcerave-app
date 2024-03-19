import { cn } from "@/lib/utils";
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";

import React from "react";

type Props = {
  message?: string;
  type: "success" | "error";
};

function FormResponse({ type, message }: Props) {
  if (!message) return null;

  return (
    <div
      className={cn("flex items-center gap-x-2 rounded-md p-3 text-xs", {
        "bg-green-400/15 text-green-600": type === "success",
        " bg-destructive text-destructive-foreground dark:bg-destructive/20":
          type === "error",
      })}
    >
      {type === "success" ? (
        <CheckCircledIcon className="size-4" />
      ) : (
        <ExclamationTriangleIcon className="size-4" />
      )}
      <p>{message}</p>
    </div>
  );
}

export default FormResponse;
