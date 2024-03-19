import { appAuth } from "@/firebase"; // Import your Firebase configuration
import { signInWithEmailAndPassword } from "firebase/auth";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// The authentication options object
const authOptions: AuthOptions = {
  pages: {
    signIn: "/", // sign in page is the root
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Ensure credentials are defined to avoid type errors
        if (!credentials) {
          console.error("Missing credentials in authorize function.");
          return null; // Indicate failed authorization
        }

        try {
          // Sign in with Firebase using email and password
          const userCredential = await signInWithEmailAndPassword(
            appAuth,
            credentials.email,
            credentials.password,
          );
          const user = userCredential.user;
          // return the user object
          return {
            id: user.uid,
            email: user.email,
            image:
              "https://t3.ftcdn.net/jpg/03/97/01/50/360_F_397015069_YvoHexqYAKLGdeKNZktvjchm7bkQEsMc.jpg",
            name: "Bukunmi Ogunmola",

            // Include other relevant user data you want in the session
          };
        } catch (error) {
          // console.error("ERROR IN ROUTE.TS =============== ", error); // Log the error for debugging
          // console.log((error as { code: string }).code);

          return null; // Indicate failed authorization
        }
      },
    }),
  ],
};

// Export handler function for the [...nextauth] API route
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
