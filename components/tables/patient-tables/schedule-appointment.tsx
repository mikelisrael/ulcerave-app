"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Plus,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Button, buttonVariants } from "@/components/ui/button";
import { patients } from "@/constants/data";
import Link from "next/link";

export function ScheduleAppointment() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      {/* schedule appointment */}
      <Button
        variant="outline"
        className="items-center gap-2 text-xs md:text-sm"
        onClick={() => setOpen(true)}
      >
        Schedule Appointment
        <p className="text-sm text-muted-foreground">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>{" "}
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search patient name..." />
        <CommandList>
          <CommandEmpty>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              No patient matches your search.
              <Link
                className={buttonVariants({ variant: "default" })}
                href="/dashboard/patients/add-new?schedule=true"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add new
              </Link>
            </div>
          </CommandEmpty>
          <CommandSeparator />
          <CommandGroup heading="Patients">
            {patients.map((patient, index) => (
              <React.Fragment key={index}>
                <CommandItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>{patient.name}</span>
                </CommandItem>
                <CommandSeparator />
              </React.Fragment>
            ))}
          </CommandGroup>{" "}
        </CommandList>
      </CommandDialog>
    </>
  );
}
