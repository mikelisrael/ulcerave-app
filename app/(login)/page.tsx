"use client";

import FormResponse from "@/components/layout/form-response";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/loginSchema";
import { FormResponseData } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Login = () => {
  const [isPending, startTransition] = useTransition();
  const [formResponse, setFormResponse] = useState<FormResponseData | null>(
    null,
  );

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    startTransition(async () => {
      try {
        const data = await signIn("credentials", {
          email: values.email,
          password: values.password,
          callbackUrl: `${window.location.origin}/dashboard`,
        });

        if (data && data.error) {
          setFormResponse({
            error: true,
            message: "Invalid email or password. Please try again.",
          });
          return;
        }

        setFormResponse({ success: true, message: "Logged in successfully!" });
      } catch (error) {
        setFormResponse({
          error: true,
          message: "An error occurred. Please try again later.",
        });
      }
    });
  };

  const isDisabled = isPending || formResponse?.success;

  return (
    <>
      <title>Ulcerave Login</title>

      <main className="flex h-screen w-screen flex-col items-center justify-center gap-3">
        <div className="relative h-16 w-full">
          <Image
            priority
            src="/logo.svg"
            fill
            alt="Logo"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>

        <Card className="w-[360px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Welcome back! Please login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@gmail.com"
                          disabled={isDisabled}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="•••••••"
                          type="password"
                          {...field}
                          disabled={isDisabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {formResponse && (
                  <FormResponse
                    type={formResponse.error ? "error" : "success"}
                    message={formResponse.message}
                  />
                )}

                <Button type="submit" disabled={isDisabled}>
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
    </>
  );
};

export default Login;
