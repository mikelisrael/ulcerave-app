"use client";
import React, { useEffect, useState } from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { SessionProvider, SessionProviderProps } from "next-auth/react";
import { appAuth } from "@/firebase";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  // const [user, setUser] = useState<User | null>(null);
  // const router = useRouter();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(appAuth, (user) => {
  //     setUser(user);
  //   });

  //   return () => unsubscribe();
  // }, []);

  // if (!user) {
  //   router.replace("/");
  // } else {
  //   router.replace("/dashboard");
  // }

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider session={session}>{children}</SessionProvider>
      </ThemeProvider>
    </>
  );
}
