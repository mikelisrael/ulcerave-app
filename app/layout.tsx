import "./globals.css";
import Providers from "@/components/providers";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "Ulcerave | Manage ulcer patients with ease.",
  description: "Ulcerave is a platform for managing ulcer patients with ease.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body>
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
}
