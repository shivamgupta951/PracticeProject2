import type { Metadata } from "next";
import "./globals.css";
import ClientProvider from "@/ClientProvider";

export const metadata: Metadata = {
  title: "PracticeProject~2",
  description: "testing project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>
        {children}
        </ClientProvider>
        </body>
    </html>
  );
}
