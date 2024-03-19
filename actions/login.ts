// "use server";

import { appAuth } from "@/firebase";
import { loginSchema } from "@/schemas/loginSchema";
import { signInWithEmailAndPassword } from "firebase/auth";
import * as z from "zod";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: true,
      message: "Invalid fields! Please check your input.",
    };
  }

  const { email, password } = validatedFields.data;
  return signInWithEmailAndPassword(appAuth, email, password)
    .then(() => {
      // redirect to the dashboard
      return {
        success: true,
        message: "Logged in successfully!",
        redirectUri: "/dashboard",
      };
    })
    .catch((error) => {
      let errorMessage = "An error occurred. Please try again later.";
      if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid email or password. Please try again.";
      }
      // return the error message
      return { error: true, message: errorMessage };
    });
};
