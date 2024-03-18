import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "Ulcerave | Manage ulcer patients with ease.",
  description: "Ulcerave is a platform for managing ulcer patients with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
